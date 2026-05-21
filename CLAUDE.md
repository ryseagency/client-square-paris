# Lovable → GitHub → Shopify

Méthode RYSE pour convertir un design Lovable en thème Shopify production-ready.
Spécifiques projet → `@CLIENT.md`. Erreurs apprises sur ce projet → `@lessons.md`.

## ⛔ 3 règles non-négociables (filet passif si skill `lovable-to-shopify` non invoqué)

Ces règles s'appliquent à 100% du travail RYSE sur ce client, même sans déclenchement explicite du skill. Détail dans skill `lovable-to-shopify` §Règles non-négociables.

1. **Repo discovery exhaustif** — lire **TOUS** les fichiers du repo Lovable avant d'écrire la moindre ligne. Pas de sample, pas de grep ciblé. 50% des bugs viennent de fichiers non lus.
2. **Pas d'invention de valeurs** — chaque HEX, font, weight, spacing, copy vient d'une source LUE (Lovable, design-system.md, lessons.md). Jamais "estimer", jamais paraphraser.
3. **Vérifier le rendu avant de dire "fait"** — code écrit ≠ livré. Push preview Shopify + diff Lovable + reload onglet admin avant tout claim "c'est fait".

Ces règles sont aussi enforced par les hooks `hooks/pre-edit-protect.sh` + `hooks/pre-edit-liquid-guard.sh` (richtext, hex, H1, naming).

### ⛔ Règle architecture sections `main-*`

Pour TOUTE section `main-product.liquid`, `main-collection.liquid`, `main-page.liquid`, `main-blog.liquid`, `main-article.liquid` :

- La section ne contient QUE l'élément central principal (ex: galerie + product info pour main-product)
- TOUT le reste (astuce, onglets, FAQ, reviews, related, trust badges, objection stories, etc.) = **blocks ajoutables/supprimables** depuis l'éditeur Shopify
- ZÉRO hardcode d'élément optionnel — le merchant doit pouvoir activer/désactiver/réordonner chaque bloc depuis l'admin
- Détail + exemples : skill `lovable-to-shopify` → `section-architecture-rules.md` §Règle 0

## Stack

- **Source** : Lovable (Vite + React 18 + TS + Tailwind + shadcn-ui + lucide-react + react-router-dom)
- **Versionning** : GitHub `ryseagency/{client-slug}` (clone dans `lovable-source/`)
- **Cible** : Shopify, base Dawn, theme dir local `shopify-theme/`
- **CLI** : `shopify theme dev` / `shopify theme push --only=...`

## Critères de livraison absolus

Tout port Lovable→Shopify doit satisfaire ces 4 critères. Aucun n'est optionnel. Une livraison qui en manque un n'est **pas** terminée.

1. **Pixel-perfect vs Lovable** — diff visuel via `scripts/compare-pages.mjs` (Playwright + diff par hot zones). Cible : aucune hot zone > 10% sur desktop ET mobile, sur toutes les pages portées. Si > 30% : fix obligatoire avant livraison. Comparaison à breakpoints standards (375, 768, 1024, 1440, 1920).
2. **SEO/SERP propre** — Lighthouse SEO = 100, Rich Results Test sans erreur, titles/descriptions conformes aux patterns de `@CLIENT.md`, canonical présent, OG/Twitter complets.
3. **GEO complet** (si client a un lieu physique) — JSON-LD `Organization` + `LocalBusiness` validés sur https://validator.schema.org/, NAP strictement identique partout, geo lat/lng, openingHours, aggregateRating si avis.
4. **AEO en place** — JSON-LD `FAQPage` (uniquement si Q/R visibles), `Product` sur fiches, `BreadcrumbList`, `Speakable` sur FAQ + À propos, contenu structuré pour LLM (H2 répondant à des questions, première phrase autonome).

Ces critères sont vérifiés par la checklist en bas du fichier (section *Validation avant livraison*) et par le hook `stop-verification.sh`.

## Repo Discovery — étape 0 obligatoire (avant TOUT plan)

Avant la première tâche de port et au début de chaque nouvelle session longue, lire **l'intégralité** du repo Lovable cloné dans `lovable-source/`. Règle stricte, aucune exception. Tout le repo, pas juste `src/`.

**À lire — exhaustif** :
- `src/` récursivement : TOUTES les pages (Index, FAQ, Contact, Produit, Blog, Article, 404, etc.), composants, hooks, lib, types, utils
- **`src/index.css`** (styles globaux + tokens CSS custom — souvent la vraie source des couleurs, plus que tailwind.config) + `src/App.css` + tous autres `.css`
- `public/` (assets statiques, favicons, robots.txt, fonts locales)
- `index.html` (meta SEO, fonts chargées, root)
- `tailwind.config.*`, `postcss.config.*`, `vite.config.*`, `tsconfig*.json`, `components.json` (shadcn)
- `package.json` + `package-lock.json` (deps + versions exactes)
- `.env.example`, `README.md` si présents
- Tout autre fichier non-trivial à la racine

**Inventaire des assets** :
```bash
find lovable-source/public lovable-source/src -type f \
  \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \
  -o -name "*.svg" -o -name "*.mp4" -o -name "*.woff*" -o -name "*.ttf" \) | sort
```

**Méthode** : `tree -L 4 -I 'node_modules|dist|.git'` → configs racine → `index.css` (tokens réels) → `index.html` → `App.tsx` (routes) → chaque page de `src/pages/` → composants partagés → assets.

**Récap au user** après lecture (5-10 lignes) : pages détectées, patterns Lovable, composants réutilisables, tokens CSS réels (souvent ≠ tailwind.config), assets à uploader, alertes éventuelles.

**Trade-off** : ~40-60k tokens = 20-30% du context. Qualité > économie. Si session > 120k tokens : `/clear` + dump progress + restart fresh.

**Pourquoi obligatoire** : Lovable utilise des composants partagés, imports croisés, et met souvent les tokens dans `index.css` (pas dans tailwind.config). Pages annexes (blog, produit, 404) partagent du markup avec les pages principales. Sans vue d'ensemble = code dupliqué, dépendances manquantes, incohérence design.

## Workflow projet (boucle 7 étapes — Boris Cherny pattern + Repo Discovery)

Pour chaque section/page à porter :

0. **Repo Discovery** — lire `lovable-source/` intégralement (cf section ci-dessus) si pas déjà fait dans cette session
1. **Plan First** — écrire le plan dans `tasks/{section-name}.md` avant tout code
2. **Verify Plan** — me confirmer le plan avant de commencer
3. **Track Progress** — cocher les items au fur et à mesure dans le fichier
4. **Explain Changes** — résumé haut niveau à chaque étape
5. **Document Results** — section "review" en bas du `tasks/{section-name}.md` à la fin
6. **Capture Lessons** — après toute correction, ajouter une ligne à `lessons.md`

## Inventaire à produire au démarrage

À écrire dans `@CLIENT.md` avant de coder :
1. Mapping pages Lovable → templates Shopify
2. Liste sections homepage dans l'ordre
3. Liste theme blocks nested
4. Liste drawers
5. Inventaire assets requis

## Naming convention

- ⛔ Jamais de prefix client (`mc-`, `eleganza-`) sur fichiers, vars CSS, classes
- ✅ Sections : noms fonctionnels (`header-main.liquid`, `hero.liquid`)
- ✅ Theme blocks : préfixés `_` (`_megamenu-card.liquid`)
- ✅ CSS vars : `--color-ink`, jamais `--mc-ink`
- ✅ Classes CSS : préfixes fonctionnels courts par section (`mm-`, `bs-`, `cs-`…)

## Conventions techniques Liquid (RYSE validées)

1. **px partout, jamais rem** sur sections custom (override Dawn)
2. **CSS scopée par section** : `.section-{{ section.id }}` ou `#section-{{ section.id }}`
3. **Resets CSS** → `:where(...)` pour spec 0
4. **`{% content_for "blocks" %}` sur grid parent** → `.parent > .shopify-block { display: contents; }`
5. **`<div></div>` décoratifs** → `<span style="display:block">`
6. **Image fallback** : `{% else %}<img src="{{ '{client}-fallback.jpg' | asset_url }}">{% endif %}`
7. **Fonts** : preconnect + preload `.woff2` direct dans `theme.liquid <head>`, jamais `@import`
8. **Push** : `cd "<theme-dir>" && shopify theme push --only=...` dans la même commande

## Schema validation checklist

- `name` section/block ≤ 25 caractères
- `range` : `default` exactement sur un step (`min + n × step`)
- `range` : ≤ 101 steps (`(max−min)/step ≤ 100`)
- `text`/`textarea`/`richtext`/`inline_richtext` : pas de `"default": ""`
- Section : un `presets` présent (sauf header/footer/announcement-bar)

## Code propre — règles non négociables

- **Zéro hardcode visible côté code** : tout texte/lien/image/produit/collection passe par `{{ section.settings.* }}`, `{{ block.settings.* }}`, `{{ 'key' | t }}`, ou `routes.*_url`
- **Settings = exposés à l'éditeur, defaults = data Lovable**
- **Aucun commentaire IA** (cf global)
- **Ordre fixe par section `.liquid`** :
  1. Commentaire 1 ligne (optionnel)
  2. `<style>` scopé `.section-{{ section.id }}`
  3. Markup
  4. `{% schema %}` à la fin
- **Pas de `style="..."` inline** sauf valeurs dynamiques venant de settings
- **Pas de chaînage > 4 filtres** Liquid → variable intermédiaire

Ces règles sont aussi enforcées par les hooks dans `.claude/hooks/` (cf section Hooks).

## Éditabilité éditeur de thème

Critère : le client doit pouvoir modifier 100% du contenu visible et 90% du style depuis l'éditeur sans toucher au code.

- Texte → `text` / `textarea` / `richtext` / `inline_richtext`
- Liens → `url`
- Images → `image_picker`
- Vidéos → `video` ou `video_url`
- Produits/collections → `product` / `collection` / `*_list`
- Toggles → `checkbox` / `range` / `select`
- Éléments répétables → `block` avec ses propres `settings`
- Settings groupés par `header` (`Contenu`, `Apparence`, `Espacement`, `SEO`)
- Chaque section : `padding_top_desktop`, `padding_bottom_desktop`, `padding_top_mobile`, `padding_bottom_mobile`

## SEO transverse (theme.liquid)

Ordre obligatoire dans `<head>` : meta charset/viewport (auto Shopify) → `<title>` → meta description → canonical → `{{ content_for_header }}` → preconnect/preload fonts → CSS global → JSON-LD → OpenGraph + Twitter → favicon.

OpenGraph minimum : `og:type`, `og:title`, `og:description`, `og:url`, `og:site_name`, `og:image` (1200px), `twitter:card="summary_large_image"`.

Hreflang : slot prêt même mono-locale (via `shop.published_locales`).

Robots : ne JAMAIS toucher `<meta robots>` côté code — passer par Search & Discovery ou `robots.txt.liquid`.

Performance : LCP image (hero) avec `loading="eager" fetchpriority="high"` + srcset 400/800/1200/1600/2400. Autres images `loading="lazy" decoding="async"`. Polices Google avec `display=swap` + preload `.woff2` direct.

## GEO — Local SEO (si client a un point physique)

JSON-LD double dans `theme.liquid` (conditionné `template == 'index'` ou page contact) :
- `Organization` (logo, founders, foundingDate, sameAs réseaux sociaux)
- `LocalBusiness` ou `Store` (PostalAddress complète, geo lat/lng, telephone, openingHoursSpecification, aggregateRating si avis)

NAP strictement identique partout : footer, contact, JSON-LD, Google Business Profile.

Si 100% e-commerce sans lieu physique : skip `LocalBusiness`, garder `Organization`.

## AEO — Answer Engine Optimization

- **FAQ schema** (`FAQPage`) UNIQUEMENT dans la section affichant les Q/R visibles (sinon pénalité Google)
- **Speakable** sur FAQ + À propos avec sélecteur `[data-speakable]`
- **Product schema** : name, image[], description, sku, brand, offers, aggregateRating si avis
- **BreadcrumbList** sur collection + product + page (snippet réutilisable)
- **Contenu structuré pour LLM** : H2 clairs, première phrase de section autonome, données factuelles dans `<dl>` ou tableaux

## SERP

- Title 50-60 chars, description 140-160 chars
- Patterns par template définis dans `@CLIENT.md`
- Sitelinks Search Box : JSON-LD `WebSite` + `SearchAction` (homepage uniquement)
- Navigation : `<nav aria-label="Menu principal">` + `role="menubar"` + `role="menuitem"`
- ⛔ Pas de `itemtype="SiteNavigationElement"` (deprecated)

## Validation avant livraison (Boris Cherny rule)

```bash
cd shopify-theme && shopify theme check --severity error
```
Cible : **0 error, 0 warning**.

Question avant de marquer "fini" : *« un staff engineer Shopify validerait-il ça ? »*

Checklist complète : voir `@CHECKLIST.md` (regroupée par les 4 critères absolus + Theme Store-friendly + code propre).

## Hooks (.claude/hooks/)

Le projet a 3 hooks installés qui enforcent les règles ci-dessus à 100% (au lieu de ~70% via instructions seules) :

- **`pre-edit-protect.sh`** (PreToolUse) : bloque tout Edit qui contiendrait `claude|lovable|generated by|TODO|FIXME` dans `new_str`
- **`post-edit-quality.sh`** (PostToolUse) : lance Theme Check sur le fichier édité après chaque write
- **`stop-verification.sh`** (Stop) : avant de me rendre la main, vérifie que la checklist Boris est passée

Si un hook bloque une action légitime → l'ajuster dans `.claude/hooks/`, pas le contourner.

## Subagents pour port parallèle

Pour port multi-sections : utiliser des subagents (un par section) plutôt que tout faire dans le main context. Chaque subagent a son context propre, moins de pollution. Boris Cherny lance 10-15 sessions parallèles via git worktrees.

## Scripts QA

- `scripts/compare-pages.mjs` (Playwright + diff visuel)
- `scripts/check-clean-code.mjs` (grep `TODO|FIXME|claude|lovable|generated by`)
- `scripts/check-jsonld.mjs` (extract + validate via schema.org API)
- `scripts/compare-styles.mjs` (computed styles diff)

## Pour aller plus loin

- Spécifications projet : `@CLIENT.md`
- Checklist livraison : `@CHECKLIST.md`
- Erreurs apprises sur ce projet : `@lessons.md`

