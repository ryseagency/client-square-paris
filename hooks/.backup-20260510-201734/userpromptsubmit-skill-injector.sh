#!/usr/bin/env bash
# RYSE — UserPromptSubmit hook (Skill + pitfalls injector)
#
# Pattern recommandé Reddit/X/GitHub mai 2026 (umputun gist + Code Coup) :
# Intercepte le prompt AVANT que Claude ne le lise, et injecte un system-reminder
# avec instructions "Evaluate → Activate → Implement" sur les sujets critiques.
#
# Sans ce hook : Claude oublie de charger les compagnons → bugs Shopify récurrents
# (closest.metafields, schema bytes UTF-8, theme block underscore, etc.)
#
# Avec ce hook : injection déterministe de rappels critiques pour chaque sujet matché.
#
# Format : stdout = JSON { hookSpecificOutput: { additionalContext: "..." } }

set -uo pipefail

payload=$(cat)
prompt=$(echo "$payload" | jq -r '.prompt // empty')

if [ -z "$prompt" ]; then
  exit 0
fi

# Détection mot-clés → rappels ciblés
inject=""

# === METAOBJECTS / METAFIELDS ===
# Restreint aux keywords PATH-SPECIFIC (pas concept-generic comme "fiche produit"
# qui peut être metaobject OU sections classiques OU metafields directs).
# Règle d'or 2026-05-10 : keywords UserPromptSubmit doivent être path-specific.
if echo "$prompt" | grep -qiE 'metaobject|meta\s*objet|metafield|dynamic\s*source|binding|closest\.product|rich_text_field|metafield_tag|fiche_(palette|service|produit|meuble|kit|machine|simple|consommable|cils|dental)_p[123]'; then
  inject+="

⚠️ RAPPEL CRITIQUE METAOBJECTS (avant tout code) :
1. Lire OBLIGATOIREMENT le compagnon \`metaobjects-shopify.md\` du skill lovable-to-shopify
2. Dynamic source dans templates *.json : TOUJOURS \`{{ closest.product.metafields.X }}\`, JAMAIS \`{{ product.metafields.X }}\` (sinon Shopify hardcode silencieusement les valeurs au save)
3. metafield_definition : access.storefront: PUBLIC_READ obligatoire pour visibility éditeur
4. rich_text rendu : \`{{ X | metafield_tag }}\` obligatoire (sinon JSON ProseMirror brut)
5. Limite 40 fields par metaobject definition → splitter en P1/P2/P3
6. Schema name MAX 25 BYTES UTF-8 (accents = 2 bytes)
7. Workflow OBLIGATOIRE en 6 étapes : plan exhaustif → batch creation → metafield definitions PUBLIC_READ → entries → liaison product → bindings dans TOUTES sections (pas juste section info) → vérification VISUELLE éditeur (icône 🔗 verte)
8. ⛔ COMPAT-MATRIX setting↔metafield : setting \`text\` INCOMPATIBLE avec metafield \`rich_text_field\` → utiliser setting \`richtext\` à la place. Setting \`number\` (range) INCOMPATIBLE avec texte. Si mismatch détecté au push (\"Le paramètre peut uniquement utiliser les types : Text\") → changer le setting type, pas la donnée
9. AVANT push : lancer \`~/Documents/Claude/RYSE/_scripts/audit-theme-references.sh <theme-dir>\` pour détecter blocks/sections référencés mais fichiers manquants (cascade silencieuse)
10. ⛔ ANTI-PATTERN INVERSE : si erreur push 'richtext invalid' sur un setting → LIRE le schema du setting parent. Si type=text/textarea → NE PAS wrapper en <p> (afficherait littéralement '<p>X</p>' au front). Solution : changer setting type en richtext dans le schema, ou retirer le wrap. JAMAIS le wrap aveugle.
11. Push 2-étapes obligatoire si erreur 'Type must be defined' : 1) shopify theme push --only 'config/*','templates/*' 2) puis --only 'sections/*','blocks/*','snippets/*'"
fi

# === HEADER / NAV / MEGA MENU ===
# Restreint aux keywords path-specific (Coree). "header"/"menu"/"nav" seuls = ambigu → mode SUGGESTION en bas
if echo "$prompt" | grep -qiE 'coree|menu\s*coree|header\s*coree|megamenu|mega\s*menu|mega-menu|drawer\s*mobile|mobile_menu|mobile_nav_badge'; then
  inject+="

⚠️ RAPPEL HEADER (avant tout code) :
1. Doctrine RYSE depuis 2026-05-10 : structure CANONIQUE Coree Beauty
2. 13 fichiers byte-à-byte au thème live dans \`reference/header-coree-canonical/\` à COPIER + adapter
3. Architecture : 1 section \`header.liquid\` + 4 blocks plats (mega_menu, mega_menu_brands, mobile_menu, mobile_nav_badge)
4. JAMAIS de hardcode liens nav, JAMAIS de blocks nested 6-niveaux (archi MDE legacy dépréciée)
5. Lire compagnon \`megamenu-architecture.md\` AVANT d'écrire"
fi

# === PUSH SHOPIFY ===
if echo "$prompt" | grep -qiE 'theme\s+push|shopify\s+push|deploy.*theme|push.*shopify|push.*theme'; then
  inject+="

⚠️⚠️ PUSH SHOPIFY — STRATÉGIE OBLIGATOIRE pour éviter les 33 push_with_errors qui ont planté la session précédente :

🔥 SI les modifs incluent des CHANGEMENTS STRUCTURELS — l'ordre 2-phases dépend du CAS :

   📌 CAS A : RENAME d'un schema existant OU modification settings_data référençant anciens settings
     → Phase 1 : config/templates D'ABORD (migrer les valeurs)
     → Phase 2 : sections/blocks ENSUITE (nouveau schema)
     \`shopify theme push --theme <id> --store <store> --allow-live --nodelete --only 'config/*','templates/*'\`
     puis \`--only 'sections/*','blocks/*','snippets/*'\`

   📌 CAS B : NOUVEAUX blocks/sections + nouveau template qui les référence (cas typique nouveau template fiche produit)
     → Phase 1 : sections/blocks D'ABORD (les fichiers DOIVENT exister avant que templates les référencent)
     → Phase 2 : templates ENSUITE (référence valide)
     \`shopify theme push --theme <id> --store <store> --allow-live --nodelete --only 'sections/*','blocks/*','snippets/*'\`
     puis \`--only 'config/*','templates/*'\`

   ⚠️ Si tu hésites → CAS B par défaut (plus safe pour live, pas de référence cassée pendant intervalle)

   🚀 OU lancer le wrapper auto : \`~/Documents/Claude/RYSE/_scripts/safe-push.sh\` (à mettre à jour pour gérer les 2 cas)

🟡 SI modifs cosmétiques uniquement (style, copy texte, asset) :
   → push standard OK : \`shopify theme push --theme <id> --store <store> --nodelete\`

🚨 ANTI-PATTERNS bloquants :
- \`--only 'fileA','fileB'\` (multiple comma-separated) FAILS SILENTLY → 1 fichier à la fois
- Push sans \`--theme <id>\` → risque écraser le live
- Annoncer 'push OK' sur output sans grep 'with errors' → 80% des saves Shopify sont silencieux
- Push sans \`--allow-live\` quand le theme cible est le live → prompt INTERACTIF → bloque silencieusement en mode non-interactif (Claude Code)
- Push sans \`--store <store>\` → ambiguïté store
- Préférer SYSTÉMATIQUEMENT \`~/Documents/Claude/RYSE/_scripts/safe-push.sh\` qui inclut DÉJÀ : --allow-live, --store auto, --nodelete, push 2-phases auto. Push direct \`shopify theme push\` UNIQUEMENT pour 1 fichier ciblé en cas exceptionnel.

✅ APRÈS chaque push :
- Lire stdout : si 'with errors' détecté → STOP, lire les erreurs précisément, fixer, re-push
- Si fail à étape 2 du 2-phases → \`~/Documents/Claude/RYSE/_scripts/audit-theme-references.sh shopify-theme/\` pour identifier blocks/sections référencés sans fichier"
fi

# === SHOPIFY GRAPHQL MUTATION ===
if echo "$prompt" | grep -qiE 'graphql_mutation|themeDuplicate|metafieldDefinition|metaobjectDefinition|shopify.*graphql|create.*metaobject|mutation.*shopify'; then
  inject+="

⚠️ RAPPEL GRAPHQL SHOPIFY — éviter les 4 wrong_theme errors de la session précédente :

🔥 AVANT TOUTE \`graphql_mutation\` Shopify sur un type pas familier :
   1. APPELER D'ABORD \`graphql_schema(api: 'admin', mutationName: 'NOM_MUTATION')\` pour valider le payload type
   2. Lister exactement les fields disponibles (PAS deviner 'theme', 'job', 'duplicatedTheme' qui n'existent peut-être pas)
   3. PUIS construire la mutation avec les vrais noms de fields

🚨 Erreur typique observée 2026-05-10 sur ThemeDuplicatePayload :
- Tenté : \`{ theme {} }\`, \`{ job {} }\`, \`{ duplicatedTheme {} }\` → tous rejetés
- Cause : ne pas avoir consulté le schema avant
- Coût : 4 itérations × 5 min = 20 min perdues

✅ Workflow correct :
\`\`\`
1. mcp__claude_ai_Shopify__graphql_schema(api='admin', mutationName='themeDuplicate')
2. → lire la définition retournée
3. mcp__claude_ai_Shopify__graphql_mutation(query='mutation { themeDuplicate(...) { <fields-réels> userErrors { field message } } }')
4. mcp__claude_ai_Shopify__validate_graphql_codeblocks(payload) AVANT envoi
\`\`\`"
fi

# === SECTION main-* (refacto blocks) ===
if echo "$prompt" | grep -qiE 'main-(product|collection|page|blog|article)|refacto.*template|tout en blocks|hardcode'; then
  inject+="

⚠️ RAPPEL SECTIONS main-* (avant tout code) :
1. La section ne contient QUE l'élément central (galerie + product info pour main-product)
2. TOUT le reste = blocks ajoutables/supprimables/réordonnables (astuce, onglets, FAQ, reviews, etc.)
3. Onglets accordéon = blocks répétables \`accordion_item\`, JAMAIS settings \`acc_X\`
4. Lire \`section-architecture-rules.md\` §Règle 0"
fi

# === REFACTO JSON / INTÉGRATION CONTENU LOVABLE ===
# Évite le pattern "réécriture manuelle item par item" qui prend 5-10 min sur des templates
# avec 30+ items (objection stories, includes, reviews, FAQ, etc.).
if echo "$prompt" | grep -qiE 'refacto.*(json|template)|port.*(contenu|template)|intègre.*(contenu|texte|copy)|reproduis.*lovable|hardcode.*lovable|contenu.*hardcoded|copy.*lovable.*template'; then
  inject+="

⚠️ EXTRACTION CONTENU LOVABLE — utiliser BASH BULK, pas réécriture manuelle :

🔥 ANTI-PATTERN observé (5-10 min perdues à chaque session) :
- Lire un par un les items dans TemplateX.tsx puis les retaper dans le JSON Shopify
- Coût : ~10 min sur 30+ items + risque typo

✅ PATTERN CORRECT (30 sec) :
1. Lire le composant Lovable en entier (Read TemplateX.tsx)
2. Extraire les valeurs en bulk avec python3 OU awk/grep selon structure :
   \`\`\`bash
   # Si tableau JS/TS dans Lovable (pattern habituel) :
   python3 <<'PYEOF'
   import re, json
   src = open('lovable-source/src/components/X.tsx').read()
   # Extraire le bloc array
   match = re.search(r'const items = \[(.*?)\]', src, re.DOTALL)
   # Parser les objets et générer le JSON Shopify
   ...
   PYEOF
   \`\`\`
3. Injecter le JSON généré directement dans templates/X.json (1 Edit ou Write)

🚨 Règle : si tu vois > 5 items à reproduire → STOP réécriture manuelle, écris un bash extracteur. Cible : moins de 1 min pour générer le JSON complet.

📦 Patterns d'extraction courants (à utiliser/adapter) :
- ObjectionStories items → grep '{ stop:' / parser objet
- Reviews → grep '{ name:' / parser
- IncludesItems → grep '{ name:' / parser
- FAQ → grep '{ q:' / parser

Coût manuel observé : 5-10 min. Coût bulk : 30 sec. Gain : 8-15× par template."
fi

# === SAUVEGARDE THEME ===
if echo "$prompt" | grep -qiE '^\s*sauvegarde\s*$|^\s*sauve\s*$|^\s*backup theme\s*$|^\s*save theme\s*$'; then
  inject+="

⚠️ COMMANDE SAUVEGARDE DÉTECTÉE — exécuter IMMÉDIATEMENT (pas de plan) :

\`\`\`bash
~/Documents/Claude/RYSE/_scripts/save-theme.sh
\`\`\`

Ce script (auto-détection client depuis cwd) :
1. Crée tar.gz local fixe : ~/Archives/themes/<client>/shopify-theme-LATEST.tar.gz (écrase précédent)
2. Garde aussi 5 dernières archives horodatées (rotation auto)
3. Si .save-theme-id configuré : push vers theme Shopify SAVE-LATEST (écrase)

Si pas de .save-theme-id : afficher les instructions pour le configurer (1 fois seulement par client) puis confirmer que tar.gz local est OK."
fi

# === RICHTEXT / SCHEMA ===
if echo "$prompt" | grep -qiE 'richtext|schema|setting.*text|color\s*picker'; then
  inject+="

⚠️ RAPPEL SCHEMA RYSE (hooks bloquent ces erreurs en amont, mais les anticiper) :
- type: text/textarea INTERDIT sur contenu visible (whitelist : button_label, badge, url, email, sku)
- richtext default DOIT être wrappé <p>...</p> (sinon push refusé)
- Schema name MAX 25 BYTES UTF-8
- Theme block \`_X\` (underscore) = nested-only, INTERDIT en déclaration blocks: [{type: \"_X\"}]
- limit: N invalide sur theme block en section schema
- Hex hardcodé interdit hors default: ou CSS vars Liquid"
fi

# ────────────────────────────────────────────────────────────────────────────
# MODE SUGGESTION — keywords ambigus seuls (sans path-specific accompagnant)
# Pattern senior 2026 sourcé : "Looks like you're editing X — load Y skill?"
# Si ambigu détecté MAIS aucune injection directe (pas de path-specific) → demande
# ────────────────────────────────────────────────────────────────────────────
if [ -z "$inject" ]; then
  # Vérifier les keywords ambigus seuls (déclenchent une question, pas une injection)

  # "fiche produit" sans metaobject/binding/etc déjà couvert
  if echo "$prompt" | grep -qiE '\bfiche\s+produit\b|\btemplate\s+produit\b|\btemplate\s+(meuble|kit|machine|simple|consommable|cils|dental|service|palette)\b'; then
    inject+="

⚠️ KEYWORD AMBIGU DÉTECTÉ — DEMANDER AVANT DE CODER

Tu utilises 'fiche produit' / 'template produit' qui peut désigner 3 paths techniques RYSE différents :

📍 **Path A — Metaobjects (palette/meuble-style)** : 3 metaobject definitions P1/P2/P3 + bindings closest.product.metafields + safe-push 2-phases. Lourd mais réutilisable cross-produits du même type.
   → Pour activer : tape \`/fiche-produit <type>\` OU mentionne 'metaobject' dans ta phrase

📍 **Path B — Sections classiques + settings** : un fichier section product-info.liquid avec settings éditeur exposés directement. Simple, rapide, pas de metaobject.
   → Pour activer : précise 'sections classiques' ou 'sans metaobject' dans ta phrase

📍 **Path C — Metafields directs sur Product** : metafield_definitions sur PRODUCT (sans metaobject), bindings simples. Compromis.
   → Pour activer : précise 'metafields directs' dans ta phrase

🛑 **STOP** — DEMANDER à user lequel des 3 paths AVANT toute écriture/mutation. Ne PAS supposer Path A par défaut. Une fois user a confirmé, charger les règles correspondantes."
  fi

  # "header" sans coree/minimaliste/etc
  if echo "$prompt" | grep -qiE '\bheader\b' && ! echo "$prompt" | grep -qiE 'coree|minimaliste|drawer|menu coree'; then
    inject+="

⚠️ KEYWORD AMBIGU DÉTECTÉ — header peut désigner plusieurs archis :

📍 **Path A — Coree Beauty canonique RYSE** (depuis 2026-05-10) : 13 fichiers byte-à-byte du thème live, 1 section + 4 blocks plats. Recommandé pour TOUT nouveau header RYSE.
   → Pour activer : tape \`/header\` OU mentionne 'coree' dans ta phrase

📍 **Path B — Header existant à customiser** (theme dawn ou autre déjà en place) : modifications locales sans toucher à l'archi globale.
   → Pour activer : précise 'customise le header existant' / 'header existant'

📍 **Path C — Header minimaliste/custom** (cas rare) : sans mega menu, archi custom hors doctrine.
   → Pour activer : précise 'header custom' ou 'header simple sans coree'

🛑 **STOP** — DEMANDER à user quel path AVANT de toucher au code header."
  fi

  # "page" / "template page" sans précision
  if echo "$prompt" | grep -qiE '\b(page|template\s+page)\b' && ! echo "$prompt" | grep -qiE 'product|collection|article|blog|index|home|about|contact|faq|404|cart|customer'; then
    inject+="

⚠️ KEYWORD AMBIGU 'page' — préciser quel template Shopify :
- product / collection / page / blog / article / index / 404 / cart / customers/*
🛑 DEMANDER à user quel template AVANT de coder."
  fi
fi

# Si toujours rien matché, sortir
if [ -z "$inject" ]; then
  exit 0
fi

# Injecter via additionalContext (Claude Code 2026 spec)
ADDITIONAL_CONTEXT="$inject" python3 <<'PYEOF'
import json, os
print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "UserPromptSubmit",
        "additionalContext": os.environ.get("ADDITIONAL_CONTEXT", "")
    }
}))
PYEOF

exit 0
