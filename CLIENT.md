# SQUARE — Spécifications projet

> Ce fichier contient toutes les données spécifiques au client.
> Le `CLAUDE.md` du projet l'importe via `@CLIENT.md`.
> Données extraites du repo Lovable `square-home-essence-3b7f2723` au 2026-05-07. Compléter manuellement les champs marqués `{TODO}` avec brief client.

## Brand

- **Nom commercial** : SQUARE
- **Activité** : Mobilier design français haut de gamme (canapés, chambres, meubles, tapis)
- **Slogan / positionnement** : « Every Line Matters » — Le design pensé pour durer
- **Fondateur·ice·s** : {TODO — à confirmer avec brief}
- **Valeurs / différenciants** : design français, haut de gamme, durabilité, artisanat, contrôle qualité, matériaux nobles
- **Téléphone** : {TODO}
- **Email contact** : {TODO}
- **Note moyenne / nombre d'avis** : {TODO si applicable}

### Lieu physique (à confirmer — la page Contact existe mais aucun NAP visible dans le repo Lovable)

- **Adresse** : {TODO}
- **Ville / CP** : {TODO}
- **Région** : {TODO}
- **Pays** : FR
- **Coordonnées GPS** : {TODO}
- **Horaires** : {TODO}
- **Catégorie Google Business Profile** : {TODO — ex. Magasin de meubles}

> Si SQUARE est 100% e-commerce sans showroom : supprimer cette section et garder uniquement `Organization` dans le JSON-LD (cf doctrine RYSE GEO).

### Réseaux sociaux

- Instagram : {TODO}
- Facebook : {TODO}
- Pinterest : {TODO}
- TikTok : {TODO}

## Source Lovable

- **Repo GitHub** : `https://github.com/ryseagency/square-home-essence-3b7f2723`
- **Clone local** : `lovable-source/`
- **Stack** : Vite 5 + React 18 + TS + Tailwind 3 + shadcn-ui + lucide-react + react-router-dom 6 + react-query + framer-motion + lenis (smooth scroll) + react-hook-form + zod
- **Particularité** : 3 variantes coexistent (V1, V2, V3). La home canon est `HomeV3.tsx`. Routes V1/V2 (`/produit/:slug`, `/produit-v2/:slug`) sont des sandboxes — **seule la V3 est à porter** sauf décision contraire de Nolwenn.

## Cible Shopify

- **Store** : `udjskw-up.myshopify.com`
- **Admin URL** : `https://admin.shopify.com/store/udjskw-up`
- **Theme dir local** : `shopify-theme/` (à créer via `shopify theme init` ou clone Dawn)
- **Dev theme ID** : {à récupérer via `shopify theme list` une fois auth faite}
- **Theme de preview** : à nommer "Refonte 2026-05" (cf doctrine — push sur preview, jamais sur live)

## Design tokens (extrait de `lovable-source/src/index.css` + `tailwind.config.ts`)

```css
/* Couleurs SQUARE — palette canonique tailwind.config.ts -> theme.extend.colors.sq */
--color-noir:           #000000;       /* primary text + buttons dark */
--color-creme:          #EEECE5;       /* background warm + light buttons */
--color-vert:           #3D4030;       /* secondary accent (HSL: 80 14% 22%) */
--color-marron:         #40221E;       /* accent V1 (HSL: 10 38% 19%) */
--color-blanc:          #FFFFFF;       /* pure background */
--color-v3-bordeaux:    #5C2028;       /* V3 hero accent — canon home V3 */
--color-v3-vert:        #2D3325;       /* V3 secondary — canon home V3 */

/* États dérivés */
--color-border:         rgba(0,0,0,0.06);
--color-border-strong:  rgba(0,0,0,0.10);
--color-muted:          hsl(40 10% 94%);
--color-muted-foreground: hsl(0 0% 40%);
```

**Fonts** :
- Display (titres H1-H6) : `'ST Nova Sans'` (custom .otf hosted dans `/public/fonts/st_novasans.otf`), fallback `'Big Shoulders Display'`, sans-serif. Weight 400.
- Body : `Poppins` (Google Fonts, weights 300/400/500 + italic 300/400). Default weight 300, font-size 15px desktop / 14px mobile, line-height 1.6.
- Subtitle/labels (small caps) : `'ST Nova Sans'` également.
- **V3 (canon)** : titres en ST Nova Sans w400, body en Poppins w300. Pas d'inversion (≠ V2).

**Border-radius** : `--radius: 0.25rem` (4px) global. **V3 spécifique** : images `border-radius: 12px`. Boutons : pas de radius (border-bottom only).

**Container** : `max-width: 1760px`, `padding: 2rem` (Tailwind `container.padding: "2rem"`).

## Inventaire pages → templates Shopify (canon V3)

| Lovable page | Shopify template | Note |
|---|---|---|
| `/` (`HomeV3.tsx`) | `templates/index.json` | Home V3 — sections : Header, Hero, Categories, FeaturedProducts, Lifestyle, AboutSquare, Engagements, Storytelling, Testimonials, Newsletter, ReassuranceBanner, Footer |
| `/collection` + `/collection/:slug` (`Collection.tsx`) | `templates/collection.json` | Collection list + détail |
| `/produit-v3/:slug` (`ProductPageV3.tsx`) | `templates/product.json` | **Canon — V3**. Composants : ProductGallery, ColorSwatches, DimensionsAllInOne (+ DimensionsSVG), CraftsmanshipBlock, RoomGuide, ProductTabs, ProductFAQ, ProductReviews, SquareInteriors, VendorContact |
| `/produit/:slug` (`ProductPage.tsx` V1) | — | Sandbox V1, à NE PAS porter (sauf décision Nolwenn) |
| `/produit-v2/:slug` (`ProductPageV2.tsx`) | — | Sandbox V2, à NE PAS porter |
| `/contact` (`Contact.tsx`) | `templates/page.contact.json` | template_suffix `contact` |
| `/faq` (`FAQ.tsx`) | `templates/page.faq.json` | template_suffix `faq` — JSON-LD FAQPage si Q/R visibles |
| `/recherche` | `templates/search.json` | natif Shopify (à styler) |
| `/404` | `templates/404.json` | porter `NotFound.tsx` |

## Sections homepage (ordre, source `HomeV3.tsx`)

À confirmer en relisant `HomeV3.tsx`. Ordre probable :

1. `header-main` (Header.tsx)
2. `hero` (Hero.tsx) — inclut LoadingScreen au mount
3. `categories` (Categories.tsx) — 4 catégories : canapés, chambres, meubles, tapis
4. `featured-products` (FeaturedProducts.tsx) — sofas Eva, Mona, Sora, Yoko
5. `lifestyle` (Lifestyle.tsx) — 6 photos interior Paris
6. `about-square` (AboutSquare.tsx)
7. `engagements` (Engagements.tsx)
8. `storytelling` (Storytelling.tsx) — 3 visuels : artisanal, contrôle, matériaux
9. `testimonials` (Testimonials.tsx)
10. `newsletter` (Newsletter.tsx)
11. `reassurance-banner` (ReassuranceBanner.tsx) — marquee
12. `footer` (Footer.tsx)

## Theme blocks nested (à concevoir lors du port)

- `_megamenu` (variants : Lifestyle vs catégories — cf `menu-lifestyle.jpg` dans assets)
  - `_megamenu-column`
  - `_megamenu-link`
  - `_megamenu-feature`
- `_category-card` (Categories section)
- `_lifestyle-tile` (Lifestyle section)
- `_storytelling-card` (Storytelling section)

## Drawers

- `cart-drawer` (CartDrawer.tsx → existe déjà côté Lovable, store via React Context `cart.tsx`)
- `mobile-menu` (à concevoir)
- `search-drawer` (à concevoir)

## Assets requis (à uploader dans `shopify-theme/assets/`)

**Logos** :
- `square-logo-creme.svg`
- `square-logo-dark.svg` (+ .png fallback si nécessaire)
- `square-logo-light.png`
- `square-logo-white.svg`

**Fonts** :
- `st_novasans.woff2` (à convertir depuis `.otf` source — utiliser fonttools ou cloudconvert)

**Images sections (hero/about/lifestyle/storytelling)** : 6 lifestyle Paris + 3 storytelling + 1 about univers-square + 1 menu-lifestyle. Total ~11 visuels marketing.

**Images catégories** : canapes, chambres, meubles, tapis (4 visuels — pour la section Categories).

**Images produits sofa** : Eva, Mona, Sora, Yoko (4 sofas × ~4 angles = ~16 visuels). À migrer dans Shopify catalogue produits, pas dans `assets/`.

**Fallback obligatoire** : `square-fallback.jpg` (image générique pour `{% else %}` en cas d'absence d'image).

**Vidéos** : aucune détectée pour le moment dans `lovable-source/public/`.

## Canonical values (à valider en relisant les sections .tsx)

- **Nav links** : à extraire depuis `Header.tsx` (font-size, weight, tracking, color)
- **Buttons** : `sq-btn-light` et `sq-btn-dark` (cf `index.css`) — text 11px uppercase tracking 0.2em padding 28px/12px, border-bottom 1px (light: rgba(238,236,229,0.4) / dark: rgba(0,0,0,0.2))
- **Container** : `max-width: 1760px; padding: 2rem`
- **Resets** : `:where(...)` obligatoire (cf doctrine + `_shared/blocks-architecture-rules.md`)

## SEO patterns par template

### Title (50-60 chars)

| Template | Pattern |
|---|---|
| `index` | `SQUARE — Mobilier design français · Every Line Matters` |
| `product` | `{{ product.title }} — {Catégorie} · SQUARE` |
| `collection` | `{{ collection.title }} · SQUARE — Mobilier design français` |
| `page.contact` | `Contact — SQUARE` |
| `page.faq` | `FAQ — SQUARE` |
| `article` | `{{ article.title }} — Journal · SQUARE` |

### Description (140-160 chars)

- **Home** : `SQUARE — Mobilier design français haut de gamme. Canapés, meubles, tapis pensés pour durer. Every Line Matters.`
- **Product** : auto via product description (155 chars max)
- **Collection** : custom via metafield, fallback `Découvrez {{ collection.title }} — SQUARE, mobilier design français haut de gamme.`

### Mots-clés cibles principaux (à valider/affiner avec brief)

1. mobilier design français haut de gamme
2. canapé design français
3. mobilier durable artisanat français
4. {TODO autres mots-clés selon stratégie SEO du brief}

## Tone of voice

- **Tutoiement / vouvoiement** : {TODO — vouvoiement par défaut RYSE pour B2C premium, à confirmer}
- **Auteur affiché** : SQUARE
- **Mots à éviter** : {TODO — à définir avec brief}
- **Style éditorial** : design contemplatif, sobriété, mise en avant des matériaux et de l'artisanat. Pas de "luxe" criard, plutôt "raffiné" et "durable".

## Spécificités techniques projet

- **Framer Motion** + **Lenis (smooth scroll)** côté Lovable → à transposer en Shopify : Lenis OK via CDN, framer-motion à remplacer par CSS animations + Intersection Observer pour le port
- **react-hook-form + zod** côté Lovable (formulaires Contact + Newsletter) → côté Shopify : utiliser les forms natifs Shopify (`{% form 'contact' %}` / `customer.* %}`) ou intégrer un form builder (Shopify Forms ou metaobjects)
- **CartDrawer** : Lovable a un store cart React Context (`store/cart.tsx`) → côté Shopify, utiliser le cart natif `/cart.js` AJAX API
- **Custom font ST Nova Sans** : .otf → convertir en .woff2 + preload dans `theme.liquid <head>` (cf doctrine)
- **Système d'avis** : `ProductReviews.tsx` détecté → décider Judge.me / Loox / metafield natif
- **Apps Shopify à installer** : {TODO — Klaviyo si flows email, Searchanise/Boost si search avancé, etc.}
- **Multi-locale** : aucun signal mono FR pour l'instant, à confirmer
- **Backlink dofollow** vers ryse-agency.fr dans footer (standard RYSE)

## Notes / décisions / blockers

- 2026-05-07 — Création du dossier client + clone du repo Lovable. Repo Discovery initial fait. Reste à : (1) compléter brief client (NAP, contacts, réseaux sociaux), (2) lire `HomeV3.tsx` + composants `sections/` exhaustivement, (3) Component Map (composants partagés vs uniques selon doctrine §5 DRY), (4) clone Dawn dans `shopify-theme/` quand brief validé.
- 2026-05-07 — Variantes V1/V2/V3 dans le repo : décision = porter UNIQUEMENT V3 (HomeV3 + ProductPageV3) sauf instruction contraire de Nolwenn.
- 2026-05-07 — Store Shopify : `udjskw-up.myshopify.com`. Theme à créer.
