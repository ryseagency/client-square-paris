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
if echo "$prompt" | grep -qiE 'metaobject|meta\s*objet|fiche\s+(produit|palette|service)|metafield|dynamic\s*source|binding'; then
  inject+="

⚠️ RAPPEL CRITIQUE METAOBJECTS (avant tout code) :
1. Lire OBLIGATOIREMENT le compagnon \`metaobjects-shopify.md\` du skill lovable-to-shopify
2. Dynamic source dans templates *.json : TOUJOURS \`{{ closest.product.metafields.X }}\`, JAMAIS \`{{ product.metafields.X }}\` (sinon Shopify hardcode silencieusement les valeurs au save)
3. metafield_definition : access.storefront: PUBLIC_READ obligatoire pour visibility éditeur
4. rich_text rendu : \`{{ X | metafield_tag }}\` obligatoire (sinon JSON ProseMirror brut)
5. Limite 40 fields par metaobject definition → splitter en P1/P2/P3
6. Schema name MAX 25 BYTES UTF-8 (accents = 2 bytes)
7. Workflow OBLIGATOIRE en 6 étapes : plan exhaustif → batch creation → metafield definitions PUBLIC_READ → entries → liaison product → bindings dans TOUTES sections (pas juste section info) → vérification VISUELLE éditeur (icône 🔗 verte)"
fi

# === HEADER / NAV / MEGA MENU ===
if echo "$prompt" | grep -qiE 'header|menu|nav\b|megamenu|mega\s*menu|coree|drawer'; then
  inject+="

⚠️ RAPPEL HEADER (avant tout code) :
1. Doctrine RYSE depuis 2026-05-10 : structure CANONIQUE Coree Beauty
2. 13 fichiers byte-à-byte au thème live dans \`reference/header-coree-canonical/\` à COPIER + adapter
3. Architecture : 1 section \`header.liquid\` + 4 blocks plats (mega_menu, mega_menu_brands, mobile_menu, mobile_nav_badge)
4. JAMAIS de hardcode liens nav, JAMAIS de blocks nested 6-niveaux (archi MDE legacy dépréciée)
5. Lire compagnon \`megamenu-architecture.md\` AVANT d'écrire"
fi

# === PUSH SHOPIFY ===
if echo "$prompt" | grep -qiE 'theme\s+push|shopify\s+push|deploy.*theme'; then
  inject+="

⚠️ RAPPEL PUSH SHOPIFY (avant exécution) :
1. \`shopify theme push --only \"fileA\",\"fileB\"\` (multiple) FAILS SILENTLY → push UN fichier à la fois OU push complet sans --only
2. TOUJOURS \`--theme <id>\` explicite (jamais sur le live)
3. Après push : \`pull --only X\` + diff pour confirmer le contenu uploadé. 80% des saves Shopify sont silencieux."
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

# Si rien matché, sortir (n'injecte rien)
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
