# Design System — SQUARE

> Source de vérité : `lovable-source/src/index.css` + `lovable-source/tailwind.config.ts` (canon V3).
> Toute divergence avec `theme/` ou ce fichier → Lovable gagne (cf doctrine RYSE règle 4).
> Dernière sync : 2026-05-07.

## Identité de marque

- **Nom** : SQUARE
- **Secteur** : Mobilier design français haut de gamme
- **Positionnement** : design pensé pour durer, raffiné, artisanal, contemplatif
- **Cible** : B2C premium FR — clientèle adulte exigeante, sensible au design, à l'artisanat français et à la durabilité
- **Slogan** : « Every Line Matters »

## Typographie

### Polices

- **Display (titres H1-H6, font-display)** : `'ST Nova Sans'` (custom .otf, self-hosted) — fallback `'Big Shoulders Display'`, sans-serif. Weight 400.
- **Body (font-body, par défaut)** : `Poppins` (Google Fonts) — weights chargés : 300, 400, 500 + italic 300/400. Weight par défaut 300.
- **Subtitle / labels small caps (font-subtitle)** : `'ST Nova Sans'` (mêmes specs que display).

### Hébergement des fonts

- [x] **Self-hosted** (.otf dans `lovable-source/public/fonts/st_novasans.otf`) → à convertir en `.woff2` pour Shopify, déposer dans `shopify-theme/assets/st_novasans.woff2`, preload + preconnect dans `theme.liquid <head>`
- [x] **Google Fonts** (Poppins + Big Shoulders Display fallback) → preconnect `fonts.googleapis.com` + `fonts.gstatic.com` (crossorigin), URL combinée :
  ```
  https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700&family=Poppins:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap
  ```

### Hiérarchie type (à raffiner après lecture exhaustive HomeV3 + sections)

- Body : Poppins 300, 15px / line-height 1.6 (desktop) — 14px / line-height 1.6 (mobile, < 768px)
- H1 / H2 / H3 : ST Nova Sans 400 — sizes à extraire des sections .tsx au cas par cas
- Buttons / labels small caps : Poppins ou ST Nova Sans, 11px, uppercase, letter-spacing 0.2em
- Nav links : à extraire depuis `Header.tsx`

> Note V2 (sandbox, NON canon) : inversion des rôles (titres en Poppins Bold 700, sous-titres en ST Nova Sans). À ignorer pour le port — on garde V3.

## Couleurs

### Palette principale (canon V3 — `tailwind.config.ts` → `theme.extend.colors.sq`)

| Token | Hex | Rôle |
|---|---|---|
| `sq-noir` | `#000000` | Texte principal, boutons foncés, primary |
| `sq-creme` | `#EEECE5` | Background warm, boutons clairs sur dark |
| `sq-vert` | `#3D4030` | Accent secondaire (HSL `80 14% 22%`) |
| `sq-marron` | `#40221E` | Accent V1 (HSL `10 38% 19%`) — **secondary V3** |
| `sq-blanc` | `#FFFFFF` | Background neutre, surfaces |
| `sq-v3-bordeaux` | `#5C2028` | **V3 hero accent — canon home** |
| `sq-v3-vert` | `#2D3325` | **V3 secondary — canon home** |

### Color schemes Shopify (à mapper dans `config/settings_schema.json`)

| Scheme | Background | Text | Accent | Usage |
|---|---|---|---|---|
| Scheme 1 — "Crème clair" | `#EEECE5` | `#000000` | `#5C2028` | hero, sections lifestyle, storytelling |
| Scheme 2 — "Blanc pur" | `#FFFFFF` | `#000000` | `#5C2028` | sections produit, FAQ, contact |
| Scheme 3 — "Bordeaux V3" | `#5C2028` | `#EEECE5` | `#EEECE5` | CTA forts, footer optionnel |
| Scheme 4 — "Vert V3" | `#2D3325` | `#EEECE5` | `#EEECE5` | testimonials ou about background |
| Scheme 5 — "Noir" | `#000000` | `#EEECE5` | `#EEECE5` | footer principal, reassurance banner |

### États interactifs

- **Hover boutons** : transition all 500ms — `border-color` passe de `rgba(...,0.2/0.4)` (idle) à color full
- **Focus** : outline natif Shopify Dawn (à overrider avec couleur SQUARE — bordeaux V3 par exemple)
- **Disabled** : opacity 0.4, cursor not-allowed
- **Border default** : `rgba(0,0,0,0.06)`
- **Border strong** : `rgba(0,0,0,0.10)` (input, divider)

## Layout

### Border-radius

- **Global** : `--radius: 0.25rem` = **4px**
- **Tailwind dérivés** : `lg = 4px`, `md = 2px`, `sm = 0px`
- **V3 spécifique** : images `border-radius: 12px` (cf `.v3-rounded img` dans index.css)
- **Boutons SQUARE** : pas de radius — utilisent `border-bottom: 1px` uniquement (style minimal "ligne")
- **Cards / inputs** : suivre 4px par défaut sauf override section

### Units

- **Préférence RYSE** : px partout sur sections custom (override Dawn). Pas de rem hors variables CSS racine. Cf doctrine `_shared/blocks-architecture-rules.md`.

### Spacing scale (Tailwind par défaut, scale 0.25rem = 4px)

- xs : 4px (gap-1)
- sm : 8px (gap-2)
- md : 16px (gap-4)
- lg : 24px (gap-6)
- xl : 40px (gap-10)
- 2xl : 64px (gap-16)
- 3xl : 96px (gap-24)

### Container widths

- **Container max** : `1760px` (`maxWidth.container` Tailwind, breakpoint `2xl`)
- **Padding container** : `2rem` (32px) horizontal
- **Pas de variantes narrow/medium/wide** dans le config Lovable — un seul container 1760px. Si besoin de containers plus étroits dans certaines sections (ex. FAQ centré 720px), à scoper section par section côté Liquid.

## Composants visuels signatures

### Boutons (système unifié `sq-btn-*`, défini dans `index.css`)

```css
.sq-btn-light {
  font-family: Poppins;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 12px 28px;
  color: #EEECE5;            /* sq-creme */
  background: transparent;
  border-bottom: 1px solid rgba(238, 236, 229, 0.4);
  transition: all 500ms;
}
.sq-btn-light:hover { border-bottom-color: #EEECE5; }

.sq-btn-dark {
  /* mêmes specs */
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.sq-btn-dark:hover { border-bottom-color: #000000; }
```

> **Particularité** : pas de bouton "rectangle". Tous les boutons SQUARE sont des liens stylés avec border-bottom uniquement. Donne un look "magazine" épuré.

### Cards / blocs produit

- Style général : pas de bordure, pas d'ombre. L'image porte tout le visuel.
- **Image ratio** : à extraire des sections Categories/FeaturedProducts (à priori ratios variés selon visuels — 4:5 portrait pour produits, 16:9 ou 4:3 paysage pour lifestyle)
- **V3 rounded** : images avec `border-radius: 12px`

### Formulaires

- Inputs : `border-bottom: 1px` minimal (à confirmer en lisant Newsletter.tsx + Contact.tsx)
- Labels : uppercase 11px tracking 0.2em (cohérence avec boutons)
- Pas de `border` complète sur les inputs — design minimal "magazine"

## Iconographie

- **Style** : outline minimal (Lucide React installé)
- **Source** : `lucide-react` (462+ icons)
- **Taille standard** : 20-24px selon contexte
- **Couleur** : currentColor (hérité du parent), pas de fill par défaut

## Photographie / imagerie

- **Style direction** : lifestyle Paris, intérieurs raffinés, ambiance contemplative
- **Traitement** : pas de filtre saturé, lumière naturelle, légèrement désaturé
- **Ratios standards** :
  - Hero : 16:9 ou full-bleed
  - Produit packshot : 4:5 (portrait)
  - Lifestyle / catégorie : 4:3 ou 1:1
  - Storytelling (artisanal/contrôle/matériaux) : 1:1 ou 4:5
- **V3 rounded** : ajout d'un radius 12px sur toutes les `<img>`

## Animations

- **Easing standard** : à extraire des composants framer-motion + lenis (probablement `cubic-bezier(0.4, 0, 0.2, 1)` ou easing custom)
- **Durée standard** :
  - Hover boutons : 500ms (`transition all 500ms` dans `sq-btn-*`)
  - Reveal on scroll : ~600-800ms (cf `RevealOnScroll.tsx`)
  - Marquee banner : 80s linear infinite (cf tailwind keyframes `marquee-banner`)
  - Marquee normal : 30s linear infinite (cf `marquee`)
  - Scroll line indicator : 2s ease-in-out infinite (cf `scroll-line`)
- **Reduce-motion** : respecter `prefers-reduced-motion: reduce` (à enforcer côté Liquid avec `@media (prefers-reduced-motion: reduce)` qui désactive les transforms)
- **Smooth scroll** : `lenis` côté Lovable. Côté Shopify : intégrer Lenis CDN dans `theme.liquid` ou utiliser `scroll-behavior: smooth` natif si suffisant.

## Conventions Shopify spécifiques au client

- **Theme de base** : Dawn (à cloner via `shopify theme init` ou `git clone https://github.com/Shopify/dawn.git shopify-theme`)
- **Sections personnalisées** (à porter depuis `lovable-source/src/components/sections/` + `components/product/`) :
  - Header, Hero, Categories, FeaturedProducts, Lifestyle, AboutSquare, Engagements, Storytelling, Testimonials, Newsletter, ReassuranceBanner, Footer
  - Page produit V3 : ProductGallery, ColorSwatches, DimensionsAllInOne (+ DimensionsSVG), CraftsmanshipBlock, RoomGuide, ProductTabs, ProductFAQ, ProductReviews, SquareInteriors, VendorContact
- **Snippets RYSE utilisés** : `breadcrumb`, `jsonld-organization`, `jsonld-localbusiness` (si lieu physique), `jsonld-product`, `jsonld-faqpage` (si Q/R), `jsonld-website-search`, `image-fallback`
- **Particularités** :
  - Custom font `ST Nova Sans` à convertir en `.woff2` puis preload dans `<head>`
  - `lenis` smooth scroll à intégrer (CDN ou snippet)
  - `framer-motion` côté Lovable → remplacer par CSS animations + IntersectionObserver pour le port (pas de framework JS lourd dans le theme)
  - Cart drawer React Context → cart Shopify natif `/cart.js` AJAX

## Anti-patterns spécifiques à ce client

- **Ne JAMAIS** utiliser de border-radius > 4px sur boutons/cards (sauf images V3 = 12px). SQUARE = look minimal "magazine", pas "soft mobile app".
- **Ne JAMAIS** utiliser de bouton plein (background color) — toujours border-bottom only (`sq-btn-light`/`sq-btn-dark`).
- **Ne JAMAIS** porter le contenu V1 ou V2 (`ProductPage.tsx` / `ProductPageV2.tsx`) — uniquement V3 (`HomeV3.tsx` / `ProductPageV3.tsx`).
- **Ne JAMAIS** prefixer `sq-` sur les fichiers Liquid / vars CSS Shopify (cf doctrine RYSE — préfixe `sq-` est OK uniquement comme namespace tailwind dans Lovable, mais côté Shopify on utilise `--color-noir`, pas `--sq-noir`).
- **Ne JAMAIS** importer la font ST Nova Sans via `@import` ou `@font-face` dans une section. Toujours preload dans `theme.liquid <head>`.

## Sources de vérité visuelle

- **Charte graphique PDF** : {TODO si fournie par client}
- **Lovable repo** : `https://github.com/ryseagency/square-home-essence-3b7f2723` (cloné dans `lovable-source/`)
- **Lovable preview live** : {TODO — URL preview Lovable si dispo}
- **Site live** : aucun pour l'instant (refonte from scratch sur store `udjskw-up.myshopify.com`)
- **Maquettes initiales** : repo Lovable = source unique

---

*Dernière mise à jour : 2026-05-07 par Nolwenn (auto-extraction depuis lovable-source/ par Claude)*
