// AUTO-EXTRACTED — see scripts/html-to-jsx.py

import imgCapture161352 from '@/assets/shopify-sync/Capture_16-13-52.png';
import imgCapture162134 from '@/assets/shopify-sync/Capture_16-21-34.png';
import imgCapture162146 from '@/assets/shopify-sync/Capture_16-21-46.png';
import imgCapture162157 from '@/assets/shopify-sync/Capture_16-21-57.png';
import imgCapture162206 from '@/assets/shopify-sync/Capture_16-22-06.png';
import imgLogoAlmaBlack from '@/assets/shopify-sync/logo-alma-black.png';
import imgTelechargement3 from '@/assets/shopify-sync/telechargement_3.png';

<section id={'shopify-section-template--29733033214294__main'} className={'shopify-section section-main-product-square'}>



<style dangerouslySetInnerHTML={{ __html: `
  #swym-wishlist-cta,
  #swym-atw-pdp-button,
  #swym-atw-button-container,
  [id^="swym-atw-"],
  [id^="swym-atw-pdp"],
  [class*="swym-atw-pdp"],
  [class*="swym-atw-button"],
  .swym-add-to-wishlist-view-product,
  .swym-button.swym-add-to-wishlist-view-product,
  .product-form__buttons .swym-button,
  product-form .swym-button:not(.mps__wishlist),
  form[action*="/cart/add"] + .swym-button,
  form[action*="/cart/add"] ~ .swym-button {
    display: none !important;
    visibility: hidden !important;
    width: 0 !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
  }
` }} />


<style dangerouslySetInnerHTML={{ __html: `#shopify-section-template--29733033214294__main { margin-top: 0px; }
@media (min-width: 990px) {
  #shopify-section-template--29733033214294__main { margin-top: 100px; }
}
#mps-template--29733033214294__main { background: #fff; }

/* ── Grid ── */
#mps-template--29733033214294__main .mps__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__grid {
    grid-template-columns: minmax(0, 55fr) minmax(0, 45fr);
  }
}

/* ── Gallery column ── */
#mps-template--29733033214294__main .mps__gallery-col {
  display: flex;
  flex-direction: column;
  background: #F5F3EE;
  min-width: 0;
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__gallery-col {
    position: sticky;
    top: 0;
    height: 90vh;
  }
}

#mps-template--29733033214294__main .mps__gallery {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
@media (max-width: 989px) {
  #mps-template--29733033214294__main .mps__gallery {
    aspect-ratio: 1 / 1;
  }
}

#mps-template--29733033214294__main .mps__gallery-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__gallery-img {
    object-fit: cover;
  }
}
#mps-template--29733033214294__main .mps__gallery-img.is-active { opacity: 1; }

/* Badge nouveauté */
#mps-template--29733033214294__main .mps__badge {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 5;
  background: #eeece5;
  color: #1A1A1A;
  padding: 6px 14px;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: italic;
}
@media (max-width: 989px) {
  #mps-template--29733033214294__main .mps__badge {
    top: 80px;
  }
}

/* Counter 1/4 */
#mps-template--29733033214294__main .mps__counter {
  display: none;
}

/* Nav arrow */
#mps-template--29733033214294__main .mps__gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  cursor: pointer;
  color: #1A1A1A;
  transition: background 0.3s ease;
  -webkit-appearance: none;
}
#mps-template--29733033214294__main .mps__gallery-nav:hover { background: rgba(255,255,255,0.9); }
#mps-template--29733033214294__main .mps__gallery-nav--prev { left: 12px; }
#mps-template--29733033214294__main .mps__gallery-nav--next { right: 12px; }
#mps-template--29733033214294__main .mps__gallery-nav svg { width: 16px; height: 16px; }
@media (max-width: 989px) {
  #mps-template--29733033214294__main .mps__gallery-nav { display: none; }
}

/* Ambiance button */
#mps-template--29733033214294__main .mps__ambiance {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: #1A1A1A;
  transition: box-shadow 0.3s ease;
  -webkit-appearance: none;
}
#mps-template--29733033214294__main .mps__ambiance:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
#mps-template--29733033214294__main .mps__ambiance svg { width: 14px; height: 14px; }

/* Thumbnails */
#mps-template--29733033214294__main .mps__thumbs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 0;
  flex-wrap: nowrap;
  max-width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;
  padding: 8px 12px;
  background: #fff;
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__thumbs {
    gap: 2px;
    padding: 0;
    background: none;
  }
}
#mps-template--29733033214294__main .mps__thumbs::-webkit-scrollbar { display: none; }

#mps-template--29733033214294__main .mps__thumb {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  padding: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0.5;
  transition: opacity 0.3s ease, border-color 0.3s ease;
  -webkit-appearance: none;
  background: none;
  scroll-snap-align: start;
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__thumb {
    height: 140px;
    width: calc((100% - 8px) / 5);
    flex: 0 0 calc((100% - 8px) / 5);
    border: none;
  }
}
#mps-template--29733033214294__main .mps__thumb.is-active { opacity: 1; border-color: #1A1A1A; }
#mps-template--29733033214294__main .mps__thumb:hover { opacity: 0.85; }
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__thumb.is-active { border-color: transparent; }
}
#mps-template--29733033214294__main .mps__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ── Info panel ── */
#mps-template--29733033214294__main .mps__info {
  padding: 24px 24px 40px;
  min-width: 0;
}
@media (min-width: 768px) {
  #mps-template--29733033214294__main .mps__info { padding: 32px 48px 48px; }
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__info { padding: 36px 56px 56px; }
}

/* Breadcrumb */
#mps-template--29733033214294__main .mps__breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 11px;
  color: rgba(26,26,26,0.35);
  margin-bottom: 20px;
}
#mps-template--29733033214294__main .mps__breadcrumb a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}
#mps-template--29733033214294__main .mps__breadcrumb a:hover { color: #1A1A1A; }
#mps-template--29733033214294__main .mps__breadcrumb-sep {
  margin: 0 6px;
  font-size: 10px;
}
#mps-template--29733033214294__main .mps__breadcrumb-current {
  color: rgba(26,26,26,0.5);
}

/* Title row */
#mps-template--29733033214294__main .mps__title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 6px;
}
#mps-template--29733033214294__main .mps__title {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 600;
  font-size: clamp(28px, 4vw, 38px);
  text-transform: uppercase;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.1;
}

/* Rating */
#mps-template--29733033214294__main .mps__rating {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  padding-top: 6px;
  text-decoration: none;
  cursor: pointer;
}
#mps-template--29733033214294__main .mps__star {
  width: 14px;
  height: 14px;
}
#mps-template--29733033214294__main .mps__star--filled { color: #1A1A1A; }
#mps-template--29733033214294__main .mps__star--empty { color: rgba(26,26,26,0.2); }
#mps-template--29733033214294__main .mps__rating-count {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: rgba(26,26,26,0.35);
  margin-left: 4px;
  text-decoration: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
}

/* Subtitle */
#mps-template--29733033214294__main .mps__subtitle {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(26,26,26,0.55);
  margin: 0 0 8px;
  line-height: 1.5;
}

/* Divider */
#mps-template--29733033214294__main .mps__divider {
  border: none;
  height: 1px;
  background: rgba(26,26,26,0.06);
  margin: 12px 0;
}

/* Dimensions */
#mps-template--29733033214294__main .mps__dimensions {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin-bottom: 20px;
  width: fit-content;
  max-width: 100%;
}
#mps-template--29733033214294__main .mps__dim-col {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 18px;
  border: none;
}
#mps-template--29733033214294__main .mps__dim-col:first-child {
  padding-left: 0;
}
#mps-template--29733033214294__main .mps__dim-col:last-child {
  padding-right: 0;
}
#mps-template--29733033214294__main .mps__dim-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}
#mps-template--29733033214294__main .mps__dim-icon {
  width: 14px;
  height: 14px;
  color: rgba(26,26,26,0.28);
  flex-shrink: 0;
}
#mps-template--29733033214294__main .mps__dim-label {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 9px;
  font-weight: 400;
  text-transform: uppercase;
  color: rgba(26,26,26,0.35);
  margin: 0;
  line-height: 1;
  white-space: nowrap;
}
#mps-template--29733033214294__main .mps__dim-value {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1;
  white-space: nowrap;
}
#mps-template--29733033214294__main .mps__dim-unit {
  font-size: 12px;
  font-weight: 400;
  color: rgba(26,26,26,0.4);
  margin-left: 2px;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__dimensions {
    margin: 0 auto 18px;
  }
  #mps-template--29733033214294__main .mps__dim-col {
    padding: 0 12px;
  }
  #mps-template--29733033214294__main .mps__dim-meta {
    gap: 4px;
    margin-bottom: 4px;
  }
  #mps-template--29733033214294__main .mps__dim-icon {
    width: 12px;
    height: 12px;
  }
  #mps-template--29733033214294__main .mps__dim-label {
    font-size: 8px;
  }
  #mps-template--29733033214294__main .mps__dim-value {
    font-size: 16px;
  }
  #mps-template--29733033214294__main .mps__dim-unit {
    font-size: 11px;
  }
}

/* ── Reassurance badges ── */
#mps-template--29733033214294__main .mps__reassurance {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgba(26,26,26,0.08);
  margin-bottom: 24px;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance {
    grid-template-columns: repeat(4, 1fr);
    margin-left: -1px;
    margin-right: -1px;
  }
}
#mps-template--29733033214294__main .mps__reassurance-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  text-align: center;
  border-right: 1px solid rgba(26,26,26,0.08);
}
#mps-template--29733033214294__main .mps__reassurance-item:last-child { border-right: none; }
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance-item {
    padding: 10px 4px;
  }
}
#mps-template--29733033214294__main .mps__reassurance-icon {
  width: 28px;
  height: 28px;
  margin-bottom: 8px;
  object-fit: contain;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 4px;
  }
}
#mps-template--29733033214294__main .mps__reassurance-title {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 400;
  font-size: 10px;
  text-transform: lowercase;
  color: #1A1A1A;
  margin-bottom: 2px;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance-title {
    font-size: 8px;
  }
}
#mps-template--29733033214294__main .mps__reassurance-sub {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: rgba(26,26,26,0.55);
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance-sub {
    font-size: 8px;
  }
}

/* ── Reassurance V2 : liste éditoriale premium ── */
#mps-template--29733033214294__main .mps__reassurance2 {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-top: 1px solid rgba(26,26,26,0.08);
  border-bottom: 1px solid rgba(26,26,26,0.08);
}
#mps-template--29733033214294__main .mps__reassurance2-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 4px;
  border-bottom: 1px solid rgba(26,26,26,0.06);
}
#mps-template--29733033214294__main .mps__reassurance2-item:last-child { border-bottom: none; }
#mps-template--29733033214294__main .mps__reassurance2-ico {
  flex: 0 0 auto;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(26,26,26,0.04);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1A1A1A;
}
#mps-template--29733033214294__main .mps__reassurance2-ico img,
#mps-template--29733033214294__main .mps__reassurance2-ico svg {
  width: 22px;
  height: 22px;
  object-fit: contain;
}
#mps-template--29733033214294__main .mps__reassurance2-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
#mps-template--29733033214294__main .mps__reassurance2-title {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: lowercase;
  letter-spacing: 0.01em;
  color: #1A1A1A;
  line-height: 1.2;
}
#mps-template--29733033214294__main .mps__reassurance2-sub {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgba(26,26,26,0.6);
  line-height: 1.4;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance2-item {
    gap: 12px;
    padding: 12px 2px;
  }
  #mps-template--29733033214294__main .mps__reassurance2-ico {
    width: 36px;
    height: 36px;
    border-radius: 8px;
  }
  #mps-template--29733033214294__main .mps__reassurance2-ico img,
  #mps-template--29733033214294__main .mps__reassurance2-ico svg {
    width: 18px;
    height: 18px;
  }
  #mps-template--29733033214294__main .mps__reassurance2-title { font-size: 13px; }
  #mps-template--29733033214294__main .mps__reassurance2-sub { font-size: 11px; }
}
/* Variante compact / 2 colonnes */
#mps-template--29733033214294__main .mps__reassurance2.is-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  border-top: none;
  border-bottom: none;
}
#mps-template--29733033214294__main .mps__reassurance2.is-grid .mps__reassurance2-item {
  border-bottom: 1px solid rgba(26,26,26,0.06);
  padding: 12px 0;
}
#mps-template--29733033214294__main .mps__reassurance2.is-grid .mps__reassurance2-item:nth-last-child(-n+2) {
  border-bottom: none;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance2.is-grid {
    grid-template-columns: 1fr;
  }
  #mps-template--29733033214294__main .mps__reassurance2.is-grid .mps__reassurance2-item:nth-last-child(-n+2) {
    border-bottom: 1px solid rgba(26,26,26,0.06);
  }
  #mps-template--29733033214294__main .mps__reassurance2.is-grid .mps__reassurance2-item:last-child {
    border-bottom: none;
  }
}

/* Variante "inline" : ligne horizontale minimaliste premium */
#mps-template--29733033214294__main .mps__reassurance2.is-inline {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: space-between;
  gap: 0;
  padding: 18px 0;
  border-top: 1px solid rgba(26,26,26,0.1);
  border-bottom: 1px solid rgba(26,26,26,0.1);
}
#mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-item {
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 4px 10px;
  border-bottom: none;
  border-right: 1px solid rgba(26,26,26,0.08);
  text-align: center;
  min-width: 0;
}
#mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-item:last-child {
  border-right: none;
}
#mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-ico {
  width: 26px;
  height: 26px;
  border-radius: 0;
  background: transparent;
  color: #1A1A1A;
  opacity: 0.85;
}
#mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-ico img,
#mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-ico svg {
  width: 24px;
  height: 24px;
}
#mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-text {
  align-items: center;
  gap: 3px;
}
#mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #1A1A1A;
  line-height: 1.25;
}
#mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-sub {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: rgba(26,26,26,0.5);
  line-height: 1.3;
  letter-spacing: 0.01em;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance2.is-inline {
    padding: 12px 0;
  }
  #mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-item {
    padding: 2px 6px;
    gap: 6px;
  }
  #mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-ico {
    width: 22px;
    height: 22px;
  }
  #mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-ico img,
  #mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-ico svg {
    width: 20px;
    height: 20px;
  }
  #mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-title {
    font-size: 9px;
    letter-spacing: 0.06em;
  }
  #mps-template--29733033214294__main .mps__reassurance2.is-inline .mps__reassurance2-sub {
    font-size: 9px;
  }
}

/* Mobile : slider horizontal (1 item visible à la fois, scroll snap) pour tous les layouts V2 */
#mps-template--29733033214294__main .mps__reassurance2-wrap {
  margin-bottom: 24px;
}
#mps-template--29733033214294__main .mps__reassurance2-dots {
  display: none;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance2-wrap {
    margin-bottom: 20px;
  }
  #mps-template--29733033214294__main .mps__reassurance2-dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 10px;
  }
  #mps-template--29733033214294__main .mps__reassurance2-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(26,26,26,0.2);
    transition: background 0.2s ease, width 0.2s ease;
    padding: 0;
    border: none;
    cursor: pointer;
    -webkit-appearance: none;
  }
  #mps-template--29733033214294__main .mps__reassurance2-dot.is-active {
    background: #1A1A1A;
    width: 16px;
    border-radius: 3px;
  }
}
/* Mobile : slider horizontal (1 item visible à la fois, scroll snap) */
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__reassurance2-wrap .mps__reassurance2 {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 0;
    padding: 14px 0;
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
    border-top: 1px solid rgba(26,26,26,0.1);
    border-bottom: 1px solid rgba(26,26,26,0.1);
    grid-template-columns: none;
  }
  #mps-template--29733033214294__main .mps__reassurance2::-webkit-scrollbar {
    display: none;
  }
  #mps-template--29733033214294__main .mps__reassurance2 .mps__reassurance2-item {
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 4px 12px;
    border: none !important;
    text-align: left;
  }
  #mps-template--29733033214294__main .mps__reassurance2 .mps__reassurance2-ico {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: rgba(26,26,26,0.04);
    flex: 0 0 34px;
  }
  #mps-template--29733033214294__main .mps__reassurance2 .mps__reassurance2-ico img,
  #mps-template--29733033214294__main .mps__reassurance2 .mps__reassurance2-ico svg {
    width: 18px;
    height: 18px;
  }
  #mps-template--29733033214294__main .mps__reassurance2 .mps__reassurance2-text {
    align-items: flex-start;
    gap: 2px;
  }
  #mps-template--29733033214294__main .mps__reassurance2 .mps__reassurance2-title {
    font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
    font-weight: 500;
    font-size: 13px;
    text-transform: lowercase;
    letter-spacing: 0.01em;
  }
  #mps-template--29733033214294__main .mps__reassurance2 .mps__reassurance2-sub {
    font-size: 11px;
  }
}

/* ── Variant overrides ── */
#mps-template--29733033214294__main .mps__variants {
  margin-bottom: 8px;
}
#mps-template--29733033214294__main .mps__variants .form__label {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.45);
  margin-bottom: 0;
  white-space: nowrap;
  float: left;
  padding: 0;
  line-height: 40px;
  margin-right: 16px;
}
#mps-template--29733033214294__main .mps__variants .form__label span[data-selected-value] {
  font-weight: 400;
}
#mps-template--29733033214294__main .mps__variants .product-form__input {
  border: none;
  padding: 0;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
#mps-template--29733033214294__main .mps__variants .product-form__input--pill label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(26,26,26,0.15);
  border-radius: 0;
  padding: 10px 20px;
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
#mps-template--29733033214294__main .mps__variants .product-form__input--pill input:checked + label {
  border-color: #1A1A1A;
  background: #1A1A1A;
  color: #fff;
}

/* Color-only pills: square swatch, no text */
#mps-template--29733033214294__main .mps__variants .product-form__input--pill.mps__color-row label {
  padding: 0;
  border: 1px solid rgba(0,0,0,0.12);
  width: 24px;
  height: 24px;
  border-radius: 0;
  overflow: hidden;
}
#mps-template--29733033214294__main .mps__variants .product-form__input--pill.mps__color-row input:checked + label {
  border-color: #1A1A1A;
  outline: 2px solid #1A1A1A;
  outline-offset: 2px;
  background: transparent;
}
#mps-template--29733033214294__main .mps__variants .product-form__input--pill.mps__color-row .mps__color-dot {
  width: 100%;
  height: 100%;
  border-radius: 0;
  border: none;
  margin: 0;
}

/* Angle icon inside pill */
#mps-template--29733033214294__main .mps__variants .mps__angle-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  vertical-align: middle;
}

/* Color dot (used inside color-only pills) */
#mps-template--29733033214294__main .mps__variants .mps__color-dot {
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 0;
  border: 1px solid rgba(0,0,0,0.12);
  flex-shrink: 0;
}

/* Variant helper text — placé sous la rangée des pillules, aligné avec la 1ère pillule */
#mps-template--29733033214294__main .mps__variant-helper {
  flex: 0 0 100%;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: italic;
  color: rgba(26,26,26,0.45);
  margin: 4px 0 0;
  padding: 0;
  line-height: 1.4;
  white-space: nowrap;
  box-sizing: border-box;
}

/* Square color swatches */
#mps-template--29733033214294__main .mps__variants .product-form__input--swatch {
  --swatch-input--size: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
#mps-template--29733033214294__main .mps__variants .product-form__input--swatch .swatch-input__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}
#mps-template--29733033214294__main .mps__variants .product-form__input--swatch .swatch-input__label {
  border-radius: 0;
}
#mps-template--29733033214294__main .mps__variants .product-form__input--swatch .swatch {
  border-radius: 0;
}
#mps-template--29733033214294__main .mps__variants .product-form__input--swatch .swatch-input__input:checked + .swatch-input__label {
  outline: 2px solid #1A1A1A;
  outline-offset: 3px;
}

/* ── Price ── */
#mps-template--29733033214294__main .mps__price-row {
  margin-bottom: 20px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px 12px;
}
/* Force installment line onto its own row, aligned left under the price */
#mps-template--29733033214294__main .mps__installment-line {
  flex-basis: 100%;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 1.3;
  color: rgba(26,26,26,0.65);
  margin-top: 4px;
}
#mps-template--29733033214294__main .mps__installment-line .mps__alma-logo {
  height: 14px;
  width: auto;
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
#mps-template--29733033214294__main .mps__price-main {
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
  position: relative;
}
#mps-template--29733033214294__main .mps__price {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #1A1A1A;
}
#mps-template--29733033214294__main .mps__compare-price {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: rgba(26,26,26,0.35);
  text-decoration: line-through;
  margin-left: 2px;
}
#mps-template--29733033214294__main .mps__discount-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background: #1A1A1A;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.02em;
  line-height: 1;
  padding: 5px 8px;
  border-radius: 4px;
  margin-left: 4px;
  white-space: nowrap;
  position: relative;
  top: -2px;
}
#mps-template--29733033214294__main .mps__installment {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: rgba(26,26,26,0.4);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
#mps-template--29733033214294__main .mps__installment img {
  width: auto;
}

/* ── Actions ── */
#mps-template--29733033214294__main .mps__actions {
  display: flex;
  align-items: stretch;
  gap: 10px;
  margin-bottom: 16px;
}

/* Quantity selector */
#mps-template--29733033214294__main .mps__qty {
  display: flex;
  align-items: center;
  border: 1px solid rgba(26,26,26,0.1);
  flex-shrink: 0;
}
#mps-template--29733033214294__main .mps__qty button {
  width: 36px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #1A1A1A;
  -webkit-appearance: none;
  transition: background 0.2s ease;
}
#mps-template--29733033214294__main .mps__qty button:hover {
  background: rgba(26,26,26,0.04);
}
#mps-template--29733033214294__main .mps__qty input {
  width: 28px;
  height: 40px;
  text-align: center;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #1A1A1A;
  background: none;
  -moz-appearance: textfield;
  -webkit-appearance: none;
}
#mps-template--29733033214294__main .mps__qty input::-webkit-inner-spin-button,
#mps-template--29733033214294__main .mps__qty input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#mps-template--29733033214294__main .mps__wishlist {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none !important;
  outline: none !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
  cursor: pointer;
  color: #1A1A1A;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0;
  margin: 0;
  border-radius: 0 !important;
}
#mps-template--29733033214294__main .mps__wishlist:hover,
#mps-template--29733033214294__main .mps__wishlist:focus,
#mps-template--29733033214294__main .mps__wishlist:focus-visible,
#mps-template--29733033214294__main .mps__wishlist:active {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
#mps-template--29733033214294__main .mps__wishlist:hover { transform: scale(1.08); }
#mps-template--29733033214294__main .mps__wishlist::before,
#mps-template--29733033214294__main .mps__wishlist::after {
  display: none !important;
  content: none !important;
}
#mps-template--29733033214294__main .mps__wishlist svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #1A1A1A;
  transition: fill 0.25s ease;
}
/* État "ajouté" (Swym) — cœur plein noir */
#mps-template--29733033214294__main .mps__wishlist.swym-added svg,
#mps-template--29733033214294__main .mps__wishlist.swym-added svg path {
  fill: #1A1A1A !important;
  stroke: #1A1A1A !important;
}

#mps-template--29733033214294__main .mps__form-wrap { flex: 1; display: flex; }
#mps-template--29733033214294__main .mps__form-wrap .form { flex: 1; display: flex; flex-direction: column; }
#mps-template--29733033214294__main .mps__atc {
  width: 100%;
  height: 40px;
  background: #1A1A1A;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-transform: lowercase;
  transition: background 0.4s ease;
  -webkit-appearance: none;
  position: relative;
}
#mps-template--29733033214294__main .mps__atc:hover { background: rgba(26,26,26,0.88); }
#mps-template--29733033214294__main .mps__atc:disabled {
  background: rgba(26,26,26,0.12);
  cursor: not-allowed;
}
#mps-template--29733033214294__main .mps__atc .loading__spinner { position: absolute; inset: 0; display: none; align-items: center; justify-content: center; }
#mps-template--29733033214294__main .mps__atc.loading .mps__atc-label { visibility: hidden; }
#mps-template--29733033214294__main .mps__atc.loading .loading__spinner { display: flex; }

/* Dynamic checkout */
#mps-template--29733033214294__main .mps__dynamic-checkout { margin-bottom: 12px; }
#mps-template--29733033214294__main .mps__dynamic-checkout .shopify-payment-button { margin-top: 8px; }
#mps-template--29733033214294__main .mps__dynamic-checkout .shopify-payment-button__button {
  border-radius: 0 !important;
  min-height: 48px;
}

/* ── Delivery ── */
#mps-template--29733033214294__main .mps__delivery {
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(26,26,26,0.8);
}
#mps-template--29733033214294__main .mps__delivery strong {
  font-weight: 600;
  color: #1A1A1A;
  text-decoration: none;
}

/* ── Accordion ── */
#mps-template--29733033214294__main .mps__accordion {
  border-top: 1px solid rgba(26,26,26,0.08);
}
#mps-template--29733033214294__main .mps__acc-item {
  border-bottom: 1px solid rgba(26,26,26,0.08);
}
#mps-template--29733033214294__main .mps__acc-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-appearance: none;
}
#mps-template--29733033214294__main .mps__acc-btn:hover .mps__acc-title { color: #1A1A1A; }
#mps-template--29733033214294__main .mps__acc-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.7);
  transition: color 0.3s ease;
}
#mps-template--29733033214294__main .mps__acc-chevron {
  width: 16px;
  height: 16px;
  color: rgba(26,26,26,0.2);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}
#mps-template--29733033214294__main .mps__acc-btn[aria-expanded="true"] .mps__acc-chevron {
  transform: rotate(180deg);
}
#mps-template--29733033214294__main .mps__acc-body {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s cubic-bezier(0.25,0.1,0,1), padding 0.4s ease;
  padding: 0;
}
#mps-template--29733033214294__main .mps__acc-body.is-open {
  max-height: 600px;
  padding: 0 0 20px;
}
#mps-template--29733033214294__main .mps__acc-content {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.9;
  color: rgba(26,26,26,0.5);
}
#mps-template--29733033214294__main .mps__acc-content p { margin: 0 0 12px; }
#mps-template--29733033214294__main .mps__acc-content p:last-child { margin-bottom: 0; }

/* ── Story ── */
#mps-template--29733033214294__main .mps__story {
  padding: 40px 20px 48px;
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__story {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 0;
  }
}
#mps-template--29733033214294__main .mps__story-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__story-text { padding: 48px 64px; }
}
#mps-template--29733033214294__main .mps__story-kicker {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 9px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.25);
  margin: 0 0 8px;
}
#mps-template--29733033214294__main .mps__story-heading {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: clamp(22px, 3vw, 36px);
  line-height: 1.15;
  color: #1A1A1A;
  margin: 0 0 16px;
}
#mps-template--29733033214294__main .mps__story-body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.85;
  color: rgba(26,26,26,0.5);
  margin: 0 0 16px;
  max-width: 400px;
}
#mps-template--29733033214294__main .mps__story-quote {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.8;
  font-style: italic;
  color: rgba(26,26,26,0.35);
  margin: 0;
  max-width: 400px;
}
#mps-template--29733033214294__main .mps__story-img { overflow: hidden; }
@media (max-width: 989px) {
  #mps-template--29733033214294__main .mps__story-img { margin-top: 24px; }
}
@media (min-width: 990px) {
  #mps-template--29733033214294__main .mps__story-img { max-height: 450px; }
}
#mps-template--29733033214294__main .mps__story-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ── Cross-sell (list layout) ── */
#mps-template--29733033214294__main .mps__cross { padding: 0; margin-top: 24px; overflow: hidden; min-width: 0; }
#mps-template--29733033214294__main .mps__cross-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin: 0 0 14px;
}
#mps-template--29733033214294__main .mps__cross-title {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: lowercase;
  color: #1A1A1A;
  margin: 0;
}
#mps-template--29733033214294__main .mps__cross-subhead {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: rgba(26,26,26,0.5);
  margin: 0;
}
#mps-template--29733033214294__main .mps__cross-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(26,26,26,0.12);
}
#mps-template--29733033214294__main .mps__cross-row {
  display: grid;
  grid-template-columns: 56px 1fr auto auto;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(26,26,26,0.08);
  text-decoration: none;
  color: inherit;
  transition: background 0.25s ease;
}
#mps-template--29733033214294__main .mps__cross-row:hover {
  background: rgba(26,26,26,0.015);
}
#mps-template--29733033214294__main .mps__cross-thumb {
  width: 56px;
  height: 56px;
  background: #F5F3EE;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}
#mps-template--29733033214294__main .mps__cross-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
#mps-template--29733033214294__main .mps__cross-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
#mps-template--29733033214294__main .mps__cross-name {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #1A1A1A;
  line-height: 1.25;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#mps-template--29733033214294__main .mps__cross-sub {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgba(26,26,26,0.5);
  line-height: 1.3;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#mps-template--29733033214294__main .mps__cross-price {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #1A1A1A;
  white-space: nowrap;
}
#mps-template--29733033214294__main .mps__cross-add {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(26,26,26,0.2);
  background: #fff;
  color: #1A1A1A;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease;
  -webkit-appearance: none;
}
#mps-template--29733033214294__main .mps__cross-add:hover {
  background: #1A1A1A;
  border-color: #1A1A1A;
  color: #fff;
}
#mps-template--29733033214294__main .mps__cross-add svg {
  width: 12px;
  height: 12px;
}
@media (max-width: 600px) {
  #mps-template--29733033214294__main .mps__cross-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  #mps-template--29733033214294__main .mps__cross-row {
    grid-template-columns: 48px 1fr auto auto;
    gap: 12px;
    padding: 12px 0;
  }
  #mps-template--29733033214294__main .mps__cross-thumb {
    width: 48px;
    height: 48px;
  }
  #mps-template--29733033214294__main .mps__cross-name { font-size: 12px; }
  #mps-template--29733033214294__main .mps__cross-sub { font-size: 11px; }
  #mps-template--29733033214294__main .mps__cross-price { font-size: 12px; }
}

/* ── Lightbox ── */
#mps-template--29733033214294__main .mps__gallery-img.is-active { cursor: zoom-in; pointer-events: auto; }
#mps-template--29733033214294__main-lightbox.no-zoom .lb__viewport,
#mps-template--29733033214294__main-lightbox.no-zoom .lb__img { cursor: default; }
@media (max-width: 749px) {
  #mps-template--29733033214294__main-lightbox.zoom-desktop-only .lb__viewport,
  #mps-template--29733033214294__main-lightbox.zoom-desktop-only .lb__img { cursor: default; }
}
#mps-template--29733033214294__main-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #000;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#mps-template--29733033214294__main-lightbox.is-open { display: flex; }
#mps-template--29733033214294__main-lightbox .lb__close {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 10;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.85);
  border: 1px solid rgba(0,0,0,0.18);
  cursor: pointer;
  color: #000;
  transition: border-color 0.25s ease, background 0.25s ease;
  -webkit-appearance: none;
}
#mps-template--29733033214294__main-lightbox .lb__close:hover {
  border-color: rgba(0,0,0,0.45);
  background: rgba(255,255,255,1);
}
#mps-template--29733033214294__main-lightbox .lb__close svg { width: 18px; height: 18px; }
#mps-template--29733033214294__main-lightbox .lb__viewport {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: grab;
}
#mps-template--29733033214294__main-lightbox .lb__viewport:active { cursor: grabbing; }
#mps-template--29733033214294__main-lightbox .lb__viewport.is-zoomed { cursor: grab; }
#mps-template--29733033214294__main-lightbox .lb__viewport.is-zoomed.is-dragging { cursor: grabbing; }
#mps-template--29733033214294__main-lightbox .lb__img {
  max-width: 90vw;
  max-height: 100vh;
  object-fit: contain;
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-drag: none;
}
#mps-template--29733033214294__main-lightbox .lb__viewport.is-zoomed .lb__img {
  max-width: none;
  max-height: none;
  transition: none;
}
#mps-template--29733033214294__main-lightbox .lb__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.85);
  border: 1px solid rgba(0,0,0,0.18);
  cursor: pointer;
  color: #000;
  transition: border-color 0.25s ease, background 0.25s ease;
  -webkit-appearance: none;
}
#mps-template--29733033214294__main-lightbox .lb__nav:hover {
  border-color: rgba(0,0,0,0.45);
  background: rgba(255,255,255,1);
}
#mps-template--29733033214294__main-lightbox .lb__nav--prev { left: 18px; }
#mps-template--29733033214294__main-lightbox .lb__nav--next { right: 18px; }
#mps-template--29733033214294__main-lightbox .lb__nav svg { width: 16px; height: 16px; }
#mps-template--29733033214294__main-lightbox .lb__counter {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: rgba(0,0,0,0.5);
}

/* Option schema: image lightbox plein ecran, sans bandes noires */
#mps-template--29733033214294__main-lightbox.is-fullscreen-image {
  background: transparent;
}
#mps-template--29733033214294__main-lightbox.is-fullscreen-image .lb__img {
  width: 100vw;
  height: 100vh;
  max-width: none;
  max-height: none;
  object-fit: cover;
}

@media (max-width: 749px) {
  #mps-template--29733033214294__main-lightbox .lb__img {
    width: auto;
    height: auto;
    max-width: 100vw;
    max-height: 100dvh;
    object-fit: contain;
  }
  #mps-template--29733033214294__main-lightbox .lb__nav {
    width: 38px;
    height: 38px;
  }
  #mps-template--29733033214294__main-lightbox .lb__nav--prev { left: 10px; }
  #mps-template--29733033214294__main-lightbox .lb__nav--next { right: 10px; }
  #mps-template--29733033214294__main-lightbox .lb__close {
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
  }
}

@media (max-width: 749px) {
  #mps-template--29733033214294__main-lightbox.is-fullscreen-image .lb__img {
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
    object-fit: cover;
  }
  /* Option : lightbox 100% activée uniquement sur desktop → revenir au comportement standard sur mobile */
  #mps-template--29733033214294__main-lightbox.is-fullscreen-image.is-fullscreen-desktop-only {
    background: rgba(0,0,0,0.92);
  }
  #mps-template--29733033214294__main-lightbox.is-fullscreen-image.is-fullscreen-desktop-only .lb__img {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    object-fit: contain;
  }
}

/* ══ Personnalisation block ══ */
#mps-template--29733033214294__main .mps__custom {
  margin: 4px 0 10px;
}
#mps-template--29733033214294__main .mps__custom-trigger {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: opacity 0.2s ease;
}
#mps-template--29733033214294__main .mps__custom-trigger:hover,
#mps-template--29733033214294__main .mps__custom-trigger:focus-visible {
  text-decoration: underline;
  text-underline-offset: 3px;
}
#mps-template--29733033214294__main .mps__custom-trigger svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Modal (placed inside section but visually overlay) */
#mps-template--29733033214294__main .mps__custom-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.25s ease;
}
#mps-template--29733033214294__main .mps__custom-modal.is-open {
  display: flex;
  opacity: 1;
}
#mps-template--29733033214294__main .mps__custom-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(20, 15, 12, 0.55);
  backdrop-filter: blur(2px);
}
#mps-template--29733033214294__main .mps__custom-dialog {
  position: relative;
  background: #fff;
  border-radius: 4px;
  max-width: 480px;
  width: 100%;
  padding: 36px 32px 32px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  transform: translateY(10px);
  transition: transform 0.25s ease;
}
#mps-template--29733033214294__main .mps__custom-modal.is-open .mps__custom-dialog {
  transform: translateY(0);
}
#mps-template--29733033214294__main .mps__custom-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #511F17;
  border-radius: 50%;
  transition: background 0.2s ease;
}
#mps-template--29733033214294__main .mps__custom-close:hover { background: rgba(0,0,0,0.06); }
#mps-template--29733033214294__main .mps__custom-close svg { width: 16px; height: 16px; }
#mps-template--29733033214294__main .mps__custom-heading {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 6px;
}
#mps-template--29733033214294__main .mps__custom-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(0,0,0,0.65);
  margin: 0 0 22px;
}
#mps-template--29733033214294__main .mps__custom-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
#mps-template--29733033214294__main .mps__custom-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
#mps-template--29733033214294__main .mps__custom-field label {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.55);
}
#mps-template--29733033214294__main .mps__custom-field input,
#mps-template--29733033214294__main .mps__custom-field textarea {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #511F17;
  background: #fafafa;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 2px;
  padding: 10px 12px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease, background 0.2s ease;
}
#mps-template--29733033214294__main .mps__custom-field input:focus,
#mps-template--29733033214294__main .mps__custom-field textarea:focus {
  outline: none;
  border-color: #511F17;
  background: #fff;
}
#mps-template--29733033214294__main .mps__custom-field textarea {
  min-height: 110px;
  resize: vertical;
}
#mps-template--29733033214294__main .mps__custom-submit {
  margin-top: 6px;
  padding: 14px 20px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
#mps-template--29733033214294__main .mps__custom-submit:hover { opacity: 0.85; }
#mps-template--29733033214294__main .mps__custom-success {
  margin-top: 10px;
  padding: 12px 14px;
  background: #f2f7f0;
  border: 1px solid #c8dcc0;
  border-radius: 2px;
  color: #2c5a1e;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
}
body.mps__custom-open { overflow: hidden; }

@media (max-width: 749px) {
  #mps-template--29733033214294__main .mps__custom-dialog { padding: 30px 22px 24px; }
  #mps-template--29733033214294__main .mps__custom-heading { font-size: 19px; }
}` }} />

<product-info id={'mps-template--29733033214294__main'} data-section={'template--29733033214294__main'} data-product-id={'10329395134806'} data-update-url={'true'} data-url={'/products/yoko'}>
  <section className={'mps__grid'}><div className={'mps__gallery-col'}>
      <div className={'mps__gallery'} data-mps-gallery={''}><span className={'mps__badge'}>Nouveauté</span><img src={imgTelechargement3} srcSet={'//udjskw-up.myshopify.com/cdn/shop/files/telechargement_3.png?v=1776179046&width=600 600w, //udjskw-up.myshopify.com/cdn/shop/files/telechargement_3.png?v=1776179046&width=1000 1000w, //udjskw-up.myshopify.com/cdn/shop/files/telechargement_3.png?v=1776179046&width=1400 1400w, //udjskw-up.myshopify.com/cdn/shop/files/telechargement_3.png?v=1776179046&width=1800 1800w'} sizes={'(min-width: 990px) 55vw, 100vw'} alt={'Yoko'} width={'800'} height={'800'} className={'mps__gallery-img is-active'} loading={'eager'} data-mps-slide={'0'} style={{objectPosition: '50.0% 50.0%'} as React.CSSProperties} /><img src={imgCapture161352} srcSet={'//udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.13.52.png?v=1776179649&width=600 600w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.13.52.png?v=1776179649&width=1000 1000w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.13.52.png?v=1776179649&width=1400 1400w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.13.52.png?v=1776179649&width=1800 1800w'} sizes={'(min-width: 990px) 55vw, 100vw'} alt={'Yoko'} width={'86'} height={'66'} className={'mps__gallery-img'} loading={'lazy'} data-mps-slide={'1'} style={{objectPosition: '50.0% 50.0%'} as React.CSSProperties} /><img src={imgCapture162134} srcSet={'//udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.34.png?v=1776180150&width=600 600w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.34.png?v=1776180150&width=1000 1000w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.34.png?v=1776180150&width=1400 1400w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.34.png?v=1776180150&width=1800 1800w'} sizes={'(min-width: 990px) 55vw, 100vw'} alt={'Yoko'} width={'74'} height={'122'} className={'mps__gallery-img'} loading={'lazy'} data-mps-slide={'2'} style={{objectPosition: '50.0% 50.0%'} as React.CSSProperties} /><img src={imgCapture162157} srcSet={'//udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.57_be0127ad-d5e0-419f-b9f7-a61f2f963ed7.png?v=1776180186&width=600 600w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.57_be0127ad-d5e0-419f-b9f7-a61f2f963ed7.png?v=1776180186&width=1000 1000w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.57_be0127ad-d5e0-419f-b9f7-a61f2f963ed7.png?v=1776180186&width=1400 1400w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.57_be0127ad-d5e0-419f-b9f7-a61f2f963ed7.png?v=1776180186&width=1800 1800w'} sizes={'(min-width: 990px) 55vw, 100vw'} alt={'Yoko'} width={'72'} height={'84'} className={'mps__gallery-img'} loading={'lazy'} data-mps-slide={'3'} style={{objectPosition: '50.0% 50.0%'} as React.CSSProperties} /><img src={imgCapture162146} srcSet={'//udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.46_8164487f-b7d8-4e8b-9bdf-f8de6cc7e438.png?v=1776180213&width=600 600w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.46_8164487f-b7d8-4e8b-9bdf-f8de6cc7e438.png?v=1776180213&width=1000 1000w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.46_8164487f-b7d8-4e8b-9bdf-f8de6cc7e438.png?v=1776180213&width=1400 1400w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.21.46_8164487f-b7d8-4e8b-9bdf-f8de6cc7e438.png?v=1776180213&width=1800 1800w'} sizes={'(min-width: 990px) 55vw, 100vw'} alt={'Yoko'} width={'86'} height={'96'} className={'mps__gallery-img'} loading={'lazy'} data-mps-slide={'4'} style={{objectPosition: '50.0% 50.0%'} as React.CSSProperties} /><img src={imgCapture162206} srcSet={'//udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.22.06_11e6f68c-d1a6-4478-a685-8cb3e524bb01.png?v=1776180215&width=600 600w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.22.06_11e6f68c-d1a6-4478-a685-8cb3e524bb01.png?v=1776180215&width=1000 1000w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.22.06_11e6f68c-d1a6-4478-a685-8cb3e524bb01.png?v=1776180215&width=1400 1400w, //udjskw-up.myshopify.com/cdn/shop/files/Capture_d_ecran_2026-04-14_a_16.22.06_11e6f68c-d1a6-4478-a685-8cb3e524bb01.png?v=1776180215&width=1800 1800w'} sizes={'(min-width: 990px) 55vw, 100vw'} alt={'Yoko'} width={'74'} height={'94'} className={'mps__gallery-img'} loading={'lazy'} data-mps-slide={'5'} style={{objectPosition: '50.0% 50.0%'} as React.CSSProperties} /><span className={'mps__counter'} data-mps-counter={''}>1 / 6</span>

          <button className={'mps__gallery-nav mps__gallery-nav--prev'} data-mps-prev={''} aria-label={'Image précédente'}>
            <svg viewBox={'0 0 20 20'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><path d={'M12.5 15l-5-5 5-5'}></path></svg>
          </button>
          <button className={'mps__gallery-nav mps__gallery-nav--next'} data-mps-next={''} aria-label={'Image suivante'}>
            <svg viewBox={'0 0 20 20'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><path d={'M7.5 5l5 5-5 5'}></path></svg>
          </button></div><div className={'mps__thumbs'} data-mps-thumbs={''}><button className={'mps__thumb is-active'} data-mps-thumb={'0'} aria-label={'Image 1'}>
                <img src={imgTelechargement3} alt={'Yoko'} width={'200'} height={'160'} loading={'lazy'} />
              </button><button className={'mps__thumb'} data-mps-thumb={'1'} aria-label={'Image 2'}>
                <img src={imgCapture161352} alt={'Yoko'} width={'200'} height={'160'} loading={'lazy'} />
              </button><button className={'mps__thumb'} data-mps-thumb={'2'} aria-label={'Image 3'}>
                <img src={imgCapture162134} alt={'Yoko'} width={'200'} height={'160'} loading={'lazy'} />
              </button><button className={'mps__thumb'} data-mps-thumb={'3'} aria-label={'Image 4'}>
                <img src={imgCapture162157} alt={'Yoko'} width={'200'} height={'160'} loading={'lazy'} />
              </button><button className={'mps__thumb'} data-mps-thumb={'4'} aria-label={'Image 5'}>
                <img src={imgCapture162146} alt={'Yoko'} width={'200'} height={'160'} loading={'lazy'} />
              </button><button className={'mps__thumb'} data-mps-thumb={'5'} aria-label={'Image 6'}>
                <img src={imgCapture162206} alt={'Yoko'} width={'200'} height={'160'} loading={'lazy'} />
              </button></div></div><div id={'mps-template--29733033214294__main-lightbox'} className={' zoom-desktop-only'} data-lb-zoom-level={'2'} aria-hidden={'true'}>
      <button className={'lb__close'} data-lb-close={''} aria-label={'Fermer'}>
        <svg viewBox={'0 0 20 20'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'}><path d={'M5 5l10 10M15 5L5 15'}></path></svg>
      </button>
      <div className={'lb__viewport'} data-lb-viewport={''}>
        <img className={'lb__img'} data-lb-img={''} src={'//udjskw-up.myshopify.com/cdn/shop/t/3/assets/icon-zoom.svg?v=63724475352854777321776245232'} alt={'Yoko'} width={'800'} height={'800'} />
      </div><button className={'lb__nav lb__nav--prev'} data-lb-prev={''} aria-label={'Image précédente'}>
          <svg viewBox={'0 0 20 20'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><path d={'M12.5 15l-5-5 5-5'}></path></svg>
        </button>
        <button className={'lb__nav lb__nav--next'} data-lb-next={''} aria-label={'Image suivante'}>
          <svg viewBox={'0 0 20 20'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><path d={'M7.5 5l5 5-5 5'}></path></svg>
        </button>
        <span className={'lb__counter'} data-lb-counter={''}></span></div><div className={'mps__info'} id={'ProductInfo-template--29733033214294__main'}><div>
              <nav className={'mps__breadcrumb'} aria-label={'Fil d\'Ariane'}>
                <a href={'/'}>Accueil</a><span className={'mps__breadcrumb-sep'}>›</span>
                  <a href={'/collections/essentiels'}>Essentiels</a><span className={'mps__breadcrumb-sep'}>›</span>
                <span className={'mps__breadcrumb-current'}>Yoko</span>
              </nav>

              <div className={'mps__title-row'}>
                <h1 className={'mps__title'}>Yoko</h1><a href={'#product-reviews'} className={'mps__rating'} data-scroll-to-reviews={''}><svg className={'mps__star mps__star--filled'} viewBox={'0 0 16 16'}><path d={'M8 0l2.47 5.01L16 5.81l-4 3.9.94 5.49L8 12.49 3.06 15.2 4 9.71 0 5.81l5.53-.8z'} fill={'currentColor'}></path></svg><svg className={'mps__star mps__star--filled'} viewBox={'0 0 16 16'}><path d={'M8 0l2.47 5.01L16 5.81l-4 3.9.94 5.49L8 12.49 3.06 15.2 4 9.71 0 5.81l5.53-.8z'} fill={'currentColor'}></path></svg><svg className={'mps__star mps__star--filled'} viewBox={'0 0 16 16'}><path d={'M8 0l2.47 5.01L16 5.81l-4 3.9.94 5.49L8 12.49 3.06 15.2 4 9.71 0 5.81l5.53-.8z'} fill={'currentColor'}></path></svg><svg className={'mps__star mps__star--filled'} viewBox={'0 0 16 16'}><path d={'M8 0l2.47 5.01L16 5.81l-4 3.9.94 5.49L8 12.49 3.06 15.2 4 9.71 0 5.81l5.53-.8z'} fill={'currentColor'}></path></svg><svg className={'mps__star mps__star--empty'} viewBox={'0 0 16 16'}><path d={'M8 0l2.47 5.01L16 5.81l-4 3.9.94 5.49L8 12.49 3.06 15.2 4 9.71 0 5.81l5.53-.8z'} fill={'none'} stroke={'currentColor'} strokeWidth={'1'}></path></svg><span className={'mps__rating-count'}>2 Avis</span>
                  </a></div></div><p className={'mps__subtitle mps__subtitle--subtitle_HwdP7t'}>Canapé 3 places</p>
              <style dangerouslySetInnerHTML={{ __html: `
                #mps-template--29733033214294__main .mps__subtitle--subtitle_HwdP7t {
                  font-size: 12px;
                }
                @media (min-width: 990px) {
                  #mps-template--29733033214294__main .mps__subtitle--subtitle_HwdP7t {
                    font-size: 12px;
                  }
                }
              ` }} /><div className={'mps__price-row'} id={'price-template--29733033214294__main'}>
              <span className={'mps__price-main'}>
                <span className={'mps__price'}>1899 €</span>
              </span><span className={'mps__installment-line'}>
                  <span className={'mps__installment-text'}>3x 633 € sans frais avec</span><img src={imgLogoAlmaBlack} alt={'Alma'} width={'300'} height={'100'} loading={'lazy'} className={'mps__alma-logo'} /></span></div>
            <style dangerouslySetInnerHTML={{ __html: `
              #price-template--29733033214294__main .mps__alma-logo {
                height: 13px;
              }
              #price-template--29733033214294__main .mps__price {
                font-size: 24px;
                font-weight: 500;
              }
              @media (min-width: 990px) {
                #price-template--29733033214294__main .mps__alma-logo {
                  height: 11px;
                }
                #price-template--29733033214294__main .mps__price {
                  font-size: 22px;
                  font-weight: 400;
                }
              }
            ` }} /><hr className={'mps__divider'} /><div className={'mps__dimensions'}><div className={'mps__dim-col'}>
                    <div className={'mps__dim-meta'}>
                      <svg className={'mps__dim-icon'} viewBox={'0 0 14 14'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.1'} strokeLinecap={'round'} strokeLinejoin={'round'} aria-hidden={'true'}><path d={'M2 7h10'}></path><path d={'M4.2 4.8 2 7l2.2 2.2'}></path><path d={'M9.8 4.8 12 7l-2.2 2.2'}></path></svg>
                      <span className={'mps__dim-label'}>Largeur</span>
                    </div>
                    <span className={'mps__dim-value'}>279<span className={'mps__dim-unit'}>cm</span></span>
                  </div><div className={'mps__dim-col'}>
                    <div className={'mps__dim-meta'}>
                      <svg className={'mps__dim-icon'} viewBox={'0 0 14 14'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.1'} strokeLinecap={'round'} strokeLinejoin={'round'} aria-hidden={'true'}><path d={'M2 10V4h8'}></path><path d={'M7.8 1.8 10 4 7.8 6.2'}></path><path d={'M4.2 7.8 2 10l2.2 2.2'}></path></svg>
                      <span className={'mps__dim-label'}>Profondeur</span>
                    </div>
                    <span className={'mps__dim-value'}>247<span className={'mps__dim-unit'}>cm</span></span>
                  </div><div className={'mps__dim-col'}>
                    <div className={'mps__dim-meta'}>
                      <svg className={'mps__dim-icon'} viewBox={'0 0 14 14'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.1'} strokeLinecap={'round'} strokeLinejoin={'round'} aria-hidden={'true'}><path d={'M7 2v10'}></path><path d={'M4.8 4.2 7 2l2.2 2.2'}></path><path d={'M4.8 9.8 7 12l2.2-2.2'}></path></svg>
                      <span className={'mps__dim-label'}>Hauteur</span>
                    </div>
                    <span className={'mps__dim-value'}>75<span className={'mps__dim-unit'}>cm</span></span>
                  </div></div><div className={'mps__variants'} data-mps-helper={'Orientation vue de face'} data-mps-colors={'Vert=#3d3f30\nRouge=#40221e\nBlanc=#eeece5\nNoir=#000000\nJaune=#c4a35a\nCrème=#eeede6\nMarron=#40231f\nDoré=#c4a25a'}>
<variant-selects id={'variant-selects-template--29733033214294__main'} data-section={'template--29733033214294__main'}><fieldset className={'js product-form__input product-form__input--pill mps__color-row'}>
          <legend className={'form__label'}>Couleur</legend>
          

<input type={'radio'} id={'template--29733033214294__main-1-0'} name={'Couleur-1\n'} defaultValue={'Crème'} form={'product-form-template--29733033214294__main'} defaultChecked data-product-url={''} data-option-value-id={'8948810580310'} />
    <label htmlFor={'template--29733033214294__main-1-0'}><span className={'mps__color-dot'} style={{background: 'rgb(238, 237, 230)'} as React.CSSProperties}></span></label>
<input type={'radio'} id={'template--29733033214294__main-1-1'} name={'Couleur-1\n'} defaultValue={'Vert'} form={'product-form-template--29733033214294__main'} data-product-url={''} data-option-value-id={'8948849312086'} />
    <label htmlFor={'template--29733033214294__main-1-1'}><span className={'mps__color-dot'} style={{background: 'rgb(61, 63, 48)'} as React.CSSProperties}></span></label>
<input type={'radio'} id={'template--29733033214294__main-1-2'} name={'Couleur-1\n'} defaultValue={'Noir'} form={'product-form-template--29733033214294__main'} data-product-url={''} data-option-value-id={'8948810547542'} />
    <label htmlFor={'template--29733033214294__main-1-2'}><span className={'mps__color-dot'} style={{background: 'rgb(0, 0, 0)'} as React.CSSProperties}></span></label>
<input type={'radio'} id={'template--29733033214294__main-1-3'} name={'Couleur-1\n'} defaultValue={'Marron'} form={'product-form-template--29733033214294__main'} data-product-url={''} data-option-value-id={'8948810613078'} />
    <label htmlFor={'template--29733033214294__main-1-3'}><span className={'mps__color-dot'} style={{background: 'rgb(64, 35, 31)'} as React.CSSProperties}></span></label>
<input type={'radio'} id={'template--29733033214294__main-1-4'} name={'Couleur-1\n'} defaultValue={'Doré'} form={'product-form-template--29733033214294__main'} data-product-url={''} data-option-value-id={'8948849344854'} />
    <label htmlFor={'template--29733033214294__main-1-4'}><span className={'mps__color-dot'} style={{background: 'rgb(196, 162, 90)'} as React.CSSProperties}></span></label>
        </fieldset>
  </variant-selects></div>
            <style dangerouslySetInnerHTML={{ __html: `
              #mps-template--29733033214294__main .mps__variants { margin-top: 0px; margin-bottom: 0px; }
              #mps-template--29733033214294__main .mps__variants .product-form__input { margin-bottom: 16px; }
              #mps-template--29733033214294__main .mps__variants .product-form__input:last-child { margin-bottom: -40px; }
              #mps-template--29733033214294__main .mps__variants .product-form__input--pill.mps__color-row { gap: 4px; }
              @media (min-width: 990px) {
                #mps-template--29733033214294__main .mps__variants { margin-top: 20px; margin-bottom: 18px; }
                #mps-template--29733033214294__main .mps__variants .product-form__input:last-child { margin-bottom: 8px; }
              }
            ` }} /><div>
              <div className={'mps__actions'}>
                <div className={'mps__qty'}>
                  <button type={'button'} aria-label={'Diminuer'} data-mps-qty-minus={''}>−</button>
                  <input type={'number'} name={'quantity'} defaultValue={'1'} min={'1'} aria-label={'Quantité'} data-mps-qty-input={''} />
                  <button type={'button'} aria-label={'Augmenter'} data-mps-qty-plus={''}>+</button>
                </div>
            <style dangerouslySetInnerHTML={{ __html: `
              #mps-template--29733033214294__main .mps__actions { margin-top: 0px; margin-bottom: 16px; }
              @media (min-width: 990px) {
                #mps-template--29733033214294__main .mps__actions { margin-top: 0px; margin-bottom: 20px; }
              }
            ` }} />

                <product-form className={'mps__form-wrap'} data-section-id={'template--29733033214294__main'}>
                  <div className={'product-form__error-message-wrapper'} role={'alert'} hidden>
                    <span className={'product-form__error-message'}></span>
                  </div><form method={'post'} action={'/cart/add'} id={'product-form-template--29733033214294__main'} acceptCharset={'UTF-8'} className={'form'} encType={'multipart/form-data'} noValidate={'novalidate'} data-type={'add-to-cart-form'}><input type={'hidden'} name={'form_type'} defaultValue={'product'} /><input type={'hidden'} name={'utf8'} defaultValue={'✓'} /><input type={'hidden'} name={'id'} defaultValue={'53114336969046'} className={'product-variant-id'} />
                    <input type={'hidden'} name={'quantity'} defaultValue={'1'} className={'mps__qty-hidden'} />
                    <button type={'submit'} name={'add'} id={'ProductSubmitButton-template--29733033214294__main'} className={'mps__atc'} aria-haspopup={'dialog'}>
                      <span className={'mps__atc-label'}>ajouter au panier</span>

<div className={'loading__spinner hidden'}>
  <svg xmlns={'http://www.w3.org/2000/svg'} className={'spinner'} viewBox={'0 0 66 66'}><circle strokeWidth={'6'} cx={'33'} cy={'33'} r={'30'} fill={'none'} className={'path'}></circle></svg>

</div>
</button><input type={'hidden'} name={'product-id'} defaultValue={'10329395134806'} /><input type={'hidden'} name={'section-id'} defaultValue={'template--29733033214294__main'} /></form></product-form><button className={'mps__wishlist swym-button swym-add-to-wishlist'} type={'button'} aria-label={'Ajouter aux favoris'} data-with-epi={'true'} data-swaction={'addToWishlist'} data-product-id={'10329395134806'} data-variant-id={'53114336969046'} data-product-url={'https://udjskw-up.myshopify.com/products/yoko'}>
                    <svg viewBox={'0 0 20 20'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><path d={'M10 17.5s-7-4.5-7-9a3.5 3.5 0 0 1 6.5-1.8L10 8l.5-1.3A3.5 3.5 0 0 1 17 8.5c0 4.5-7 9-7 9z'}></path></svg>
                  </button></div>
            </div><div className={'mps__delivery'} id={'delivery-delivery'}>
                <strong>Chez vous sous  semaines</strong>
              </div><style dangerouslySetInnerHTML={{ __html: `
              #delivery-delivery.mps__delivery {
                font-size: 11px;
              }
              #delivery-delivery.mps__delivery strong {
                font-size: 11px;
                font-weight: 600;
              }
              @media (min-width: 990px) {
                #delivery-delivery.mps__delivery {
                  font-size: 11px;
                }
                #delivery-delivery.mps__delivery strong {
                  font-size: 11px;
                }
              }
            ` }} /><div className={'mps__reassurance'}><div className={'mps__reassurance-item'}><span className={'mps__reassurance-title'}>oeko-tex®</span><span className={'mps__reassurance-sub'}>Tissu certifié</span></div><div className={'mps__reassurance-item'}><span className={'mps__reassurance-title'}>made in europe</span><span className={'mps__reassurance-sub'}>Atelier toscan</span></div><div className={'mps__reassurance-item'}><span className={'mps__reassurance-title'}>modulable</span><span className={'mps__reassurance-sub'}>Configurations libres</span></div><div className={'mps__reassurance-item'}><span className={'mps__reassurance-title'}>montage facile</span><span className={'mps__reassurance-sub'}>Assemblage discret</span></div></div></div>
  </section></product-info>




</section>

<div id={'shopify-section-template--29733033214294__product_tabs_fNcDGq'} className={'shopify-section product-tabs-section'}><style dangerouslySetInnerHTML={{ __html: `/* ── Section margins ── */
#shopify-section-template--29733033214294__product_tabs_fNcDGq {
  margin-top: 0px;
  margin-bottom: -14px;
}
@media (min-width: 990px) {
  #shopify-section-template--29733033214294__product_tabs_fNcDGq {
    margin-top: 34px;
    margin-bottom: -52px;
  }
}

/* ── Tabs wrapper ── */
#ptabs-template--29733033214294__product_tabs_fNcDGq {
  width: 100%;
  overflow: hidden;
}

/* ── Tab bar ── */
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__bar {
  display: flex;
  border-top: 1px solid rgba(26,26,26,0.08);
  border-bottom: 1px solid rgba(26,26,26,0.08);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__bar::-webkit-scrollbar {
  height: 3px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__bar::-webkit-scrollbar-track {
  background: rgba(26,26,26,0.04);
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__bar::-webkit-scrollbar-thumb {
  background: #1A1A1A;
  border-radius: 2px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__btn {
  flex: 0 0 auto;
  padding: 20px 20px;
  white-space: nowrap;
  background: none;
  border: none;
  border-right: 1px solid rgba(26,26,26,0.08);
  cursor: pointer;
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.3);
  transition: background 0.25s ease, color 0.25s ease;
  text-align: center;
  -webkit-appearance: none;
  position: relative;
}
@media (min-width: 768px) {
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__bar {
    overflow-x: visible;
  }
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__bar::-webkit-scrollbar { display: none; }
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__btn {
    flex: 1;
  }
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__btn:last-child {
  border-right: none;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__btn:hover {
  background: #F5F3EE;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__btn.is-active {
  background: transparent;
  color: #1A1A1A;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #1A1A1A;
  z-index: 1;
}

/* ── Tab panels ── */
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__panel {
  display: none;
  padding: 48px 20px;
  overflow-x: hidden;
}
@media (min-width: 768px) {
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__panel { padding: 48px 64px; }
}
@media (min-width: 1200px) {
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__panel { padding: 48px 80px; }
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__panel.is-active {
  display: block;
}

#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel {
  width: 100%;
  overflow: hidden;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel--desktop {
  display: none;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel-track::-webkit-scrollbar {
  display: none;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel-slide {
  flex: 0 0 100%;
  min-width: 100%;
  scroll-snap-align: start;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: rgba(26,26,26,0.15);
  cursor: pointer;
  transition: background 0.25s ease;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel-dot.is-active {
  background: #1A1A1A;
}
@media (min-width: 768px) {
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel--mobile {
    display: none;
  }
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__carousel--desktop {
    display: block;
  }
}

/* ── Tab 1 — Caractéristiques ── */
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__specs {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}
@media (min-width: 768px) {
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__specs {
    grid-template-columns: 1fr 1fr;
    gap: 0 64px;
  }
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__spec-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 14px 0;
  border-bottom: 1px solid rgba(26,26,26,0.06);
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__spec-label {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.35);
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__spec-value {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #1A1A1A;
  text-align: right;
}

/* ── Tab 2 — Dimensions ── */
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-notice {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 22px;
  background: #F5F3EE;
  border-left: 3px solid rgba(26,26,26,0.15);
  margin-bottom: 36px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-notice svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 1px;
  color: rgba(26,26,26,0.4);
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-notice p {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: rgba(26,26,26,0.55);
  line-height: 1.7;
  margin: 0;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}
@media (min-width: 768px) {
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-list {
    grid-template-columns: 1fr 1fr;
    gap: 0 64px;
  }
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 14px 0;
  border-bottom: 1px solid rgba(26,26,26,0.06);
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-label {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.35);
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-right {
  text-align: right;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-value {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #1A1A1A;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__dim-detail {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: rgba(26,26,26,0.4);
  margin-top: 2px;
}

/* ── Tab 3 — Livraison ── */
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px) {
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-card {
  padding: 0;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-name {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  color: #1A1A1A;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-badge {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 9px;
  font-weight: 400;
  text-transform: uppercase;
  background: #1A1A1A;
  color: #fff;
  padding: 3px 8px;
  border-radius: 2px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-price {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 12px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-desc {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: rgba(26,26,26,0.5);
  line-height: 1.6;
  margin-bottom: 12px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-delay {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: rgba(26,26,26,0.35);
  font-style: italic;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__shipping-note {
  margin-top: 40px;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: rgba(26,26,26,0.35);
  font-style: italic;
}

/* ── Tab 4 — Description ── */
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__description p {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  line-height: 1.8;
  color: #1A1A1A;
  margin: 0 0 16px;
}

/* ── Tab 5 — Installation ── */
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 40px;
}
@media (min-width: 768px) {
  #ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-step-num {
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: 300;
  color: rgba(26,26,26,0.08);
  line-height: 1;
  margin-bottom: 12px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-step-title {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  color: #1A1A1A;
  margin-bottom: 8px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-step-text {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: rgba(26,26,26,0.5);
  line-height: 1.6;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-download {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
  background: none;
  text-decoration: none;
  color: #1A1A1A;
  transition: opacity 0.25s ease;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-download:hover { opacity: 0.8; }
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-download-icon {
  width: 40px;
  height: 40px;
  border-radius: 0;
  background: #F5F3EE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-download-icon svg {
  width: 18px;
  height: 18px;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-download-title {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
}
#ptabs-template--29733033214294__product_tabs_fNcDGq .ptabs__install-download-meta {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: rgba(26,26,26,0.4);
  margin-top: 2px;
}` }} />

<div id={'ptabs-template--29733033214294__product_tabs_fNcDGq'}><div className={'ptabs__bar'} role={'tablist'}><button className={'ptabs__btn is-active'} role={'tab'} aria-selected={'true'} aria-controls={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-0'} data-ptab-btn={'0'}>
        caractéristiques
      </button><button className={'ptabs__btn'} role={'tab'} aria-selected={'false'} aria-controls={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-1'} data-ptab-btn={'1'}>
        dimensions
      </button><button className={'ptabs__btn'} role={'tab'} aria-selected={'false'} aria-controls={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-2'} data-ptab-btn={'2'}>
        livraison
      </button><button className={'ptabs__btn'} role={'tab'} aria-selected={'false'} aria-controls={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-3'} data-ptab-btn={'3'}>
        description
      </button><button className={'ptabs__btn'} role={'tab'} aria-selected={'false'} aria-controls={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-4'} data-ptab-btn={'4'}>
        installation
      </button></div><div className={'ptabs__panel is-active'} id={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-0'} role={'tabpanel'} data-ptab-panel={'0'}><div className={'ptabs__carousel ptabs__carousel--mobile'} data-ptabs-carousel={''}>
              <div className={'ptabs__carousel-track'} data-ptabs-track={''}><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 01</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 01</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 02</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 02</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 03</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 03</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 04</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 04</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 05</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 05</span>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 06</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 06</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 07</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 07</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 08</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 08</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 09</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 09</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 10</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 10</span>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 11</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 11</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 12</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 12</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 13</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 13</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 14</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 14</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 15</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 15</span>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 16</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 16</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 17</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 17</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 18</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 18</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 19</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 19</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 20</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 20</span>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 21</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 21</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 22</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 22</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 23</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 23</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 24</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 24</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 25</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 25</span>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 26</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 26</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 27</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 27</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 28</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 28</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 29</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 29</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 30</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 30</span>
                            </div></div>
                  </div></div><div className={'ptabs__carousel-dots'}><button className={'ptabs__carousel-dot is-active'} type={'button'} data-ptabs-dot={'0'} aria-label={'Page 1'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'1'} aria-label={'Page 2'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'2'} aria-label={'Page 3'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'3'} aria-label={'Page 4'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'4'} aria-label={'Page 5'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'5'} aria-label={'Page 6'}></button></div></div>

            <div className={'ptabs__carousel ptabs__carousel--desktop'} data-ptabs-carousel={''}>
              <div className={'ptabs__carousel-track'} data-ptabs-track={''}><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 01</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 01</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 02</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 02</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 03</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 03</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 04</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 04</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 05</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 05</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 06</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 06</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 07</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 07</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 08</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 08</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 09</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 09</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 10</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 10</span>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 11</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 11</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 12</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 12</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 13</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 13</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 14</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 14</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 15</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 15</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 16</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 16</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 17</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 17</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 18</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 18</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 19</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 19</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 20</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 20</span>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__specs'}><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 21</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 21</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 22</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 22</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 23</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 23</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 24</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 24</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 25</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 25</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 26</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 26</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 27</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 27</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 28</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 28</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 29</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 29</span>
                            </div><div className={'ptabs__spec-row'}>
                              <span className={'ptabs__spec-label'}>Caractéristique 30</span>
                              <span className={'ptabs__spec-value'}>Valeur mock 30</span>
                            </div></div>
                  </div></div><div className={'ptabs__carousel-dots'}><button className={'ptabs__carousel-dot is-active'} type={'button'} data-ptabs-dot={'0'} aria-label={'Page 1'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'1'} aria-label={'Page 2'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'2'} aria-label={'Page 3'}></button></div></div></div><div className={'ptabs__panel'} id={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-1'} role={'tabpanel'} data-ptab-panel={'1'}><div className={'ptabs__dim-notice'}>
              <svg viewBox={'0 0 20 20'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><circle cx={'10'} cy={'10'} r={'8'}></circle><path d={'M10 9v4'}></path><circle cx={'10'} cy={'6.5'} r={'0.5'} fill={'currentColor'} stroke={'none'}></circle></svg>
              <p>Assurez-vous que les dimensions correspondent à l'espace prévu. Mesurez l'emplacement et les accès (portes, couloirs, escaliers) avant de commander.</p>
            </div><div className={'ptabs__carousel ptabs__carousel--mobile'} data-ptabs-carousel={''}>
              <div className={'ptabs__carousel-track'} data-ptabs-track={''}><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 01</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>87 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 01</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 02</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>94 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 02</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 03</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>101 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 03</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 04</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>108 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 04</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 05</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>115 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 05</div>
                              </div>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 06</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>122 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 06</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 07</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>129 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 07</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 08</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>136 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 08</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 09</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>143 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 09</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 10</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>150 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 10</div>
                              </div>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 11</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>157 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 11</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 12</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>164 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 12</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 13</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>171 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 13</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 14</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>178 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 14</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 15</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>185 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 15</div>
                              </div>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 16</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>192 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 16</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 17</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>199 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 17</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 18</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>206 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 18</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 19</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>213 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 19</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 20</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>220 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 20</div>
                              </div>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 21</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>227 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 21</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 22</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>234 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 22</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 23</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>241 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 23</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 24</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>248 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 24</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 25</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>255 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 25</div>
                              </div>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 26</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>262 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 26</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 27</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>269 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 27</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 28</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>276 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 28</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 29</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>283 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 29</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 30</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>290 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 30</div>
                              </div>
                            </div></div>
                  </div></div><div className={'ptabs__carousel-dots'}><button className={'ptabs__carousel-dot is-active'} type={'button'} data-ptabs-dot={'0'} aria-label={'Page 1'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'1'} aria-label={'Page 2'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'2'} aria-label={'Page 3'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'3'} aria-label={'Page 4'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'4'} aria-label={'Page 5'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'5'} aria-label={'Page 6'}></button></div></div>

            <div className={'ptabs__carousel ptabs__carousel--desktop'} data-ptabs-carousel={''}>
              <div className={'ptabs__carousel-track'} data-ptabs-track={''}><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 01</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>87 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 01</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 02</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>94 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 02</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 03</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>101 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 03</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 04</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>108 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 04</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 05</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>115 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 05</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 06</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>122 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 06</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 07</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>129 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 07</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 08</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>136 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 08</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 09</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>143 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 09</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 10</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>150 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 10</div>
                              </div>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 11</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>157 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 11</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 12</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>164 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 12</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 13</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>171 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 13</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 14</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>178 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 14</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 15</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>185 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 15</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 16</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>192 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 16</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 17</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>199 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 17</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 18</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>206 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 18</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 19</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>213 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 19</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 20</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>220 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 20</div>
                              </div>
                            </div></div>
                  </div><div className={'ptabs__carousel-slide'}>
                    <div className={'ptabs__dim-list'}><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 21</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>227 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 21</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 22</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>234 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 22</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 23</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>241 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 23</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 24</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>248 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 24</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 25</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>255 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 25</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 26</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>262 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 26</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 27</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>269 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 27</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 28</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>276 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 28</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 29</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>283 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 29</div>
                              </div>
                            </div><div className={'ptabs__dim-row'}>
                              <span className={'ptabs__dim-label'}>Dimension 30</span>
                              <div className={'ptabs__dim-right'}>
                                <div className={'ptabs__dim-value'}>290 cm</div>
                                <div className={'ptabs__dim-detail'}>Détail mock 30</div>
                              </div>
                            </div></div>
                  </div></div><div className={'ptabs__carousel-dots'}><button className={'ptabs__carousel-dot is-active'} type={'button'} data-ptabs-dot={'0'} aria-label={'Page 1'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'1'} aria-label={'Page 2'}></button><button className={'ptabs__carousel-dot'} type={'button'} data-ptabs-dot={'2'} aria-label={'Page 3'}></button></div></div></div><div className={'ptabs__panel'} id={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-2'} role={'tabpanel'} data-ptab-panel={'2'}><div className={'ptabs__shipping-grid'}><div className={'ptabs__shipping-card'}>
                  <div className={'ptabs__shipping-name'}>
                    standard
</div><div className={'ptabs__shipping-price'}>59,90 €</div><div className={'ptabs__shipping-desc'}>Au pied de l'immeuble, sur rendez-vous.</div><div className={'ptabs__shipping-delay'}>Délai : 4-6 semaines</div></div><div className={'ptabs__shipping-card'}>
                  <div className={'ptabs__shipping-name'}>
                    confort
<span className={'ptabs__shipping-badge'}>populaire</span></div><div className={'ptabs__shipping-price'}>99,90 €</div><div className={'ptabs__shipping-desc'}>Dans la pièce de votre choix. Déballage et reprise des emballages.</div><div className={'ptabs__shipping-delay'}>Délai : 4-6 semaines</div></div><div className={'ptabs__shipping-card'}>
                  <div className={'ptabs__shipping-name'}>
                    premium
</div><div className={'ptabs__shipping-price'}>149,90 €</div><div className={'ptabs__shipping-desc'}>Installation complète et reprise de votre ancien canapé.</div><div className={'ptabs__shipping-delay'}>Délai : 4-6 semaines</div></div></div><div className={'ptabs__shipping-note'}>Livraison offerte en France métropolitaine à partir de 3 000 € d'achat.</div></div><div className={'ptabs__panel'} id={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-3'} role={'tabpanel'} data-ptab-panel={'3'}><div className={'ptabs__description'}>
            
          </div></div><div className={'ptabs__panel'} id={'ptab-panel-template--29733033214294__product_tabs_fNcDGq-4'} role={'tabpanel'} data-ptab-panel={'4'}><div className={'ptabs__install-grid'}><div className={'ptabs__install-step'}>
                  <div className={'ptabs__install-step-num'}>01</div>
                  <div className={'ptabs__install-step-title'}>déballez</div><div className={'ptabs__install-step-text'}>Ouvrez les colis et disposez les modules dans la pièce selon votre configuration.</div></div><div className={'ptabs__install-step'}>
                  <div className={'ptabs__install-step-num'}>02</div>
                  <div className={'ptabs__install-step-title'}>assemblez</div><div className={'ptabs__install-step-text'}>Fixez les modules entre eux grâce aux clips intégrés. Aucun outil nécessaire.</div></div><div className={'ptabs__install-step'}>
                  <div className={'ptabs__install-step-num'}>03</div>
                  <div className={'ptabs__install-step-title'}>profitez</div><div className={'ptabs__install-step-text'}>Ajustez la position et installez-vous. L'ensemble est prêt en moins de 15 minutes.</div></div></div><a href={'#'} className={'ptabs__install-download'} target={'_blank'} rel={'noopener'}>
              <div className={'ptabs__install-download-icon'}>
                <svg viewBox={'0 0 20 20'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><path d={'M10 3v10M6 9l4 4 4-4'}></path><path d={'M3 15v2h14v-2'}></path></svg>
              </div>
              <div>
                <div className={'ptabs__install-download-title'}>télécharger la notice de montage</div><div className={'ptabs__install-download-meta'}>PDF — 2,4 Mo</div></div>
            </a></div></div>




</div>

<section id={'shopify-section-template--29733033214294__croquis_v2_xhLkyW'} className={'shopify-section section-croquis-v2'}>
</section>

<div id={'shopify-section-template--29733033214294__complementary_products_pwaV6A'} className={'shopify-section complementary-products-section'}>
</div>

<div id={'shopify-section-template--29733033214294__temoignages_Cqz4i3'} className={'shopify-section temoignages-section'}><style dangerouslySetInnerHTML={{ __html: `/* ── Margins ── */
#shopify-section-template--29733033214294__temoignages_Cqz4i3 {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0 !important;
}
@media (min-width: 990px) {
  #shopify-section-template--29733033214294__temoignages_Cqz4i3 {
    margin-top: 100px;
    margin-bottom: 0px;
    padding-bottom: 0 !important;
  }
}

/* ── Container ── */
#temo-template--29733033214294__temoignages_Cqz4i3 {
  width: 100%;
  padding: 0 20px;
}
@media (min-width: 768px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 { padding: 0 64px; }
}
@media (min-width: 1200px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 { padding: 0 80px; }
}

/* ── Header ── */
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__header {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
}
@media (min-width: 768px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 .temo__header {
    flex-wrap: nowrap;
    align-items: flex-end;
    gap: 48px;
    margin-bottom: 30px;
  }
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__header-left {
  flex-shrink: 0;
  width: 100%;
}
@media (min-width: 768px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 .temo__header-left {
    width: auto;
    flex: 1;
  }
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__subtitle {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.35);
  margin-bottom: 12px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__title {
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}
@media (min-width: 768px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 .temo__title {
    font-size: 36px;
  }
}

/* ── Rating summary ── */
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__rating-summary {
  display: flex;
  align-items: center;
  gap: 12px;
}
@media (min-width: 768px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 .temo__rating-summary {
    margin-left: 0;
    flex-shrink: 0;
  }
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__rating-score {
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 300;
  color: rgba(26,26,26,0.2);
  line-height: 1;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__rating-detail {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__stars {
  display: flex;
  gap: 2px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__star {
  width: 14px;
  height: 14px;
  color: #1A1A1A;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__star--empty {
  color: rgba(26,26,26,0.15);
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__rating-count {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  color: rgba(26,26,26,0.35);
}

/* ── CTA button ── */
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__cta {
  display: inline-block;
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.5);
  border: 1px solid rgba(26,26,26,0.15);
  background: none;
  padding: 12px 24px;
  text-decoration: none;
  transition: color 0.25s ease, border-color 0.25s ease;
  cursor: pointer;
  white-space: nowrap;
  margin-left: auto;
  align-self: flex-end;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__cta:hover {
  color: #1A1A1A;
  border-color: #1A1A1A;
}

/* ── Grid / Slider ── */
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__grid {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 12px;
  scrollbar-width: none;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__grid::-webkit-scrollbar { display: none; }
@media (min-width: 768px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 .temo__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    overflow: visible;
  }
}

/* ── Card ── */
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card {
  background: #fff;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 calc(100vw - 52px);
  min-width: calc(100vw - 52px);
  scroll-snap-align: start;
}
@media (min-width: 768px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 .temo__card {
    flex: unset;
    min-width: unset;
  }
}

/* ── Dots ── */
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}
@media (min-width: 768px) {
  #temo-template--29733033214294__temoignages_Cqz4i3 .temo__dots { display: none; }
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(26,26,26,0.15);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.25s ease;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__dot.is-active {
  background: #1A1A1A;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-quote {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 48px;
  line-height: 1;
  color: rgba(26,26,26,0.08);
  margin-bottom: 8px;
  user-select: none;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-text {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 300;
  font-style: italic;
  line-height: 1.9;
  color: rgba(26,26,26,0.55);
  margin-bottom: 28px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-text p {
  margin: 0;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(26,26,26,0.06);
  padding-top: 20px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-avatar {
  width: 36px;
  height: 36px;
  border-radius: 0;
  background: rgba(26,26,26,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #1A1A1A;
  flex-shrink: 0;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-name {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #1A1A1A;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-location {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  color: rgba(26,26,26,0.35);
  margin-top: 2px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-stars {
  display: flex;
  gap: 2px;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-star {
  width: 12px;
  height: 12px;
  color: #1A1A1A;
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-star--empty {
  color: rgba(26,26,26,0.15);
}
#temo-template--29733033214294__temoignages_Cqz4i3 .temo__card-date {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  color: rgba(26,26,26,0.3);
}` }} /><div id={'product-reviews'} style={{position: 'relative'} as React.CSSProperties}></div>
<div id={'temo-template--29733033214294__temoignages_Cqz4i3'}><div className={'temo__header'}>
    <div className={'temo__header-left'}><div className={'temo__subtitle'}>témoignages</div><h2 className={'temo__title'}>La parole<br />
à nos clients.</h2></div><div className={'temo__rating-summary'}>
        <span className={'temo__rating-score'}>4.5</span>
        <div className={'temo__rating-detail'}>
          <div className={'temo__stars'}><span className={'temo__star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span></div><span className={'temo__rating-count'}>2 avis vérifiés</span></div>
      </div><span className={'temo__cta'}>écrire un avis</span></div><div className={'temo__grid'}><div className={'temo__card'}>
          <div>
            <div className={'temo__card-quote'}>"</div><div className={'temo__card-text'}>"Le YOKO est exactement ce qu'on cherchait pour notre salon de 25m². La modularité est un vrai plus — on change la configuration selon les soirées. Le tissu est doux et résistant, même avec notre chat."</div></div>
          <div className={'temo__card-footer'}>
            <div className={'temo__card-author'}>
              <div className={'temo__card-avatar'}>S</div>
              <div>
                <div className={'temo__card-name'}>Sophie M.</div><div className={'temo__card-location'}>Paris 11e</div></div>
            </div>
            <div className={'temo__card-meta'}>
              <div className={'temo__card-stars'}><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span></div><span className={'temo__card-date'}>Mars 2026</span></div>
          </div>
        </div><div className={'temo__card'}>
          <div>
            <div className={'temo__card-quote'}>"</div><div className={'temo__card-text'}>"Très beau canapé, confortable dès la livraison. On a pris le coloris Mousse de Boulogne, magnifique en lumière naturelle. Seul bémol : le délai de livraison un peu long, mais ça vaut l'attente."</div></div>
          <div className={'temo__card-footer'}>
            <div className={'temo__card-author'}>
              <div className={'temo__card-avatar'}>T</div>
              <div>
                <div className={'temo__card-name'}>Thomas &amp; Léa</div><div className={'temo__card-location'}>Lyon 6e</div></div>
            </div>
            <div className={'temo__card-meta'}>
              <div className={'temo__card-stars'}><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__card-star'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span><span className={'temo__card-star temo__card-star--empty'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}><path d={'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'}></path></svg></span></div><span className={'temo__card-date'}>Février 2026</span></div>
          </div>
        </div></div><div className={'temo__dots'}><button className={'temo__dot is-active'} data-temo-dot={'0'} aria-label={'Avis 1'}></button><button className={'temo__dot'} data-temo-dot={'1'} aria-label={'Avis 2'}></button></div></div>




</div>

<div id={'shopify-section-template--29733033214294__faq_zKdwnW'} className={'shopify-section faq-section'}><style dangerouslySetInnerHTML={{ __html: `/* ── Margins ── */
#shopify-section-template--29733033214294__faq_zKdwnW {
  margin-top: 0px;
  margin-bottom: 0px;
}
@media (min-width: 990px) {
  #shopify-section-template--29733033214294__faq_zKdwnW {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

/* ── Container ── */
#faq-template--29733033214294__faq_zKdwnW {
  width: 100%;
  background: #ffffff;
  padding: 48px 20px 60px;
}
@media (min-width: 768px) {
  #faq-template--29733033214294__faq_zKdwnW { padding: 68px 64px 68px; }
}
@media (min-width: 1200px) {
  #faq-template--29733033214294__faq_zKdwnW { padding: 68px 80px 68px; }
}

/* ── Layout ── */
#faq-template--29733033214294__faq_zKdwnW .faq__layout {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
@media (min-width: 990px) {
  #faq-template--29733033214294__faq_zKdwnW .faq__layout {
    flex-direction: row;
    gap: 80px;
  }
}

/* ── Left column ── */
#faq-template--29733033214294__faq_zKdwnW .faq__left {
  flex-shrink: 0;
}
@media (min-width: 990px) {
  #faq-template--29733033214294__faq_zKdwnW .faq__left {
    width: 280px;
  }
}
#faq-template--29733033214294__faq_zKdwnW .faq__subtitle {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(26,26,26,0.35);
  margin-bottom: 12px;
}
#faq-template--29733033214294__faq_zKdwnW .faq__title {
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0 0 16px;
  line-height: 1.2;
}
@media (min-width: 768px) {
  #faq-template--29733033214294__faq_zKdwnW .faq__title {
    font-size: 32px;
  }
}
#faq-template--29733033214294__faq_zKdwnW .faq__description {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(26,26,26,0.4);
  margin: 0;
}

/* ── Right column (accordion) ── */
#faq-template--29733033214294__faq_zKdwnW .faq__right {
  flex: 1;
}
#faq-template--29733033214294__faq_zKdwnW .faq__item {
  border-top: 1px solid rgba(26,26,26,0.08);
}
#faq-template--29733033214294__faq_zKdwnW .faq__item:last-child {
  border-bottom: 1px solid rgba(26,26,26,0.08);
}
#faq-template--29733033214294__faq_zKdwnW .faq__question {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 16px;
  -webkit-appearance: none;
}
#faq-template--29733033214294__faq_zKdwnW .faq__number {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  color: rgba(26,26,26,0.2);
  flex-shrink: 0;
  min-width: 20px;
}
#faq-template--29733033214294__faq_zKdwnW .faq__question-text {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #1A1A1A;
  flex: 1;
}
#faq-template--29733033214294__faq_zKdwnW .faq__icon {
  flex-shrink: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: rgba(26,26,26,0.3);
  transition: transform 0.3s ease;
  line-height: 1;
}
#faq-template--29733033214294__faq_zKdwnW .faq__item.is-open .faq__icon {
  transform: rotate(45deg);
}
#faq-template--29733033214294__faq_zKdwnW .faq__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}
#faq-template--29733033214294__faq_zKdwnW .faq__answer-inner {
  padding: 0 0 24px 0;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(26,26,26,0.6);
}
#faq-template--29733033214294__faq_zKdwnW .faq__answer-inner p {
  margin: 0;
}` }} />

<div id={'faq-template--29733033214294__faq_zKdwnW'}>
  <div className={'faq__layout'}><div className={'faq__left'}><div className={'faq__subtitle'}>faq</div><h2 className={'faq__title'}>Vos questions,<br />
nos réponses.</h2><p className={'faq__description'}>Tout ce que vous devez savoir avant de choisir votre YOKO.</p></div><div className={'faq__right'}><div className={'faq__item'}>
            <button className={'faq__question'} aria-expanded={'false'} data-faq-toggle={''}>
              <span className={'faq__question-text'}>Puis-je commander un seul module séparément ?</span>
              <span className={'faq__icon'}>+</span>
            </button>
            <div className={'faq__answer'}>
              <div className={'faq__answer-inner'}><p>Absolument. Chaque chauffeuse du YOKO est disponible individuellement, ce qui vous permet de composer votre configuration exacte ou d'agrandir votre canapé plus tard.</p></div>
            </div>
          </div><div className={'faq__item'}>
            <button className={'faq__question'} aria-expanded={'false'} data-faq-toggle={''}>
              <span className={'faq__question-text'}>Comment entretenir le tissu au quotidien ?</span>
              <span className={'faq__icon'}>+</span>
            </button>
            <div className={'faq__answer'}>
              <div className={'faq__answer-inner'}><p>Le tissu polyester certifié OEKO-TEX® se nettoie simplement avec un chiffon humide. Pour un nettoyage plus profond, les housses sont déhoussables et lavables à 30°C.</p></div>
            </div>
          </div><div className={'faq__item'}>
            <button className={'faq__question'} aria-expanded={'false'} data-faq-toggle={''}>
              <span className={'faq__question-text'}>Quelle est la politique de retour pour un canapé sur mesure ?</span>
              <span className={'faq__icon'}>+</span>
            </button>
            <div className={'faq__answer'}>
              <div className={'faq__answer-inner'}><p>Vous disposez de 14 jours après réception pour nous retourner votre canapé. Les frais de retour sont à notre charge.</p></div>
            </div>
          </div></div></div>
</div>




</div>

<div id={'shopify-section-template--29733033214294__cta_contact_w9G9yn'} className={'shopify-section cta-contact-section'}><style dangerouslySetInnerHTML={{ __html: `/* ── Margins ── */
#shopify-section-template--29733033214294__cta_contact_w9G9yn {
  margin-top: 0px;
  margin-bottom: 0px;
}
@media (min-width: 990px) {
  #shopify-section-template--29733033214294__cta_contact_w9G9yn {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

/* ── Container ── */
#ctac-template--29733033214294__cta_contact_w9G9yn {
  width: 100%;
  background: #3d3f30;
  padding: 48px 20px;
}
@media (min-width: 768px) {
  #ctac-template--29733033214294__cta_contact_w9G9yn { padding: 56px 64px; }
}
@media (min-width: 1200px) {
  #ctac-template--29733033214294__cta_contact_w9G9yn { padding: 56px 80px; }
}

/* ── Layout ── */
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__layout {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
@media (min-width: 990px) {
  #ctac-template--29733033214294__cta_contact_w9G9yn .ctac__layout {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
  }
}

/* ── Left column ── */
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__left {
  flex-shrink: 0;
}
@media (min-width: 990px) {
  #ctac-template--29733033214294__cta_contact_w9G9yn .ctac__left {
    max-width: 320px;
  }
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__subtitle {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(245,243,238,0.35);
  margin-bottom: 12px;
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__title {
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #F5F3EE;
  margin: 0 0 16px;
  line-height: 1.2;
}
@media (min-width: 768px) {
  #ctac-template--29733033214294__cta_contact_w9G9yn .ctac__title {
    font-size: 32px;
  }
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__description {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(245,243,238,0.4);
  margin: 0;
}

/* ── Right column — cards ── */
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (min-width: 600px) {
  #ctac-template--29733033214294__cta_contact_w9G9yn .ctac__cards {
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__cards-divider {
  display: none;
}
@media (min-width: 600px) {
  #ctac-template--29733033214294__cta_contact_w9G9yn .ctac__cards-divider {
    display: block;
    width: 1px;
    height: 36px;
    background: rgba(245,243,238,0.15);
    flex-shrink: 0;
  }
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid rgba(245,243,238,0.15);
  border-radius: 0;
  padding: 20px 24px;
  text-decoration: none;
  transition: border-color 0.25s ease;
  min-width: 0;
}
@media (min-width: 600px) {
  #ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card {
    min-width: 260px;
  }
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card:hover {
  border-color: rgba(245,243,238,0.35);
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(245,243,238,0.5);
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card-icon svg {
  width: 20px;
  height: 20px;
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card-body {
  flex: 1;
  min-width: 0;
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card-label {
  font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(245,243,238,0.4);
  margin-bottom: 4px;
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card-value {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #F5F3EE;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card-arrow {
  flex-shrink: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: rgba(245,243,238,0.3);
  transition: transform 0.25s ease;
}
#ctac-template--29733033214294__cta_contact_w9G9yn .ctac__card:hover .ctac__card-arrow {
  transform: translateX(3px);
}` }} /><div id={'ctac-template--29733033214294__cta_contact_w9G9yn'}>
  <div className={'ctac__layout'}><div className={'ctac__left'}><div className={'ctac__subtitle'}>service client</div><h2 className={'ctac__title'}>Une question ?<br />
Parlons-en.</h2><p className={'ctac__description'}>Beytulah répond personnellement sous 2h,
du lundi au samedi.</p></div><div className={'ctac__cards'}><a href={'tel:+33612345678'} className={'ctac__card'}>
          <div className={'ctac__card-icon'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><path d={'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'}></path></svg></div>
          <div className={'ctac__card-body'}>
            <div className={'ctac__card-label'}>téléphone</div>
            <div className={'ctac__card-value'}>+33 6 12 34 56 78</div>
          </div>
          <span className={'ctac__card-arrow'}>→</span>
        </a><div className={'ctac__cards-divider'}></div><a href={'mailto:contact@square-paris.fr'} className={'ctac__card'}>
          <div className={'ctac__card-icon'}><svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.5'} strokeLinecap={'round'} strokeLinejoin={'round'}><rect x={'2'} y={'4'} width={'20'} height={'16'} rx={'2'}></rect><path d={'m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'}></path></svg></div>
          <div className={'ctac__card-body'}>
            <div className={'ctac__card-label'}>email</div>
            <div className={'ctac__card-value'}>contact@square-paris.fr</div>
          </div>
          <span className={'ctac__card-arrow'}>→</span>
        </a></div>

  </div>
</div>


</div>

<section id={'shopify-section-template--29733033214294__newsletter_eihETy'} className={'shopify-section section-newsletter'}><style dangerouslySetInnerHTML={{ __html: `/* py-10 md:py-14 px-4 md:px-6 xl:px-8 */
  #newsletter-template--29733033214294__newsletter_eihETy {
    background-color: #ffffff;
    padding: 40px 16px;
    margin-top: 0;
  }
  @media (min-width: 768px) {
    #newsletter-template--29733033214294__newsletter_eihETy { padding: 56px 24px; }
  }
  @media (min-width: 1280px) {
    #newsletter-template--29733033214294__newsletter_eihETy { padding-left: 32px; padding-right: 32px; }
  }

  #newsletter-template--29733033214294__newsletter_eihETy .nl__inner {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
  }

  /* Eyebrow : Poppins 400 10px tracking 0.25em noir/40 mb-4 */
  #newsletter-template--29733033214294__newsletter_eihETy .nl__eyebrow {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 10px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 16px;
    line-height: 1;
  }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__eyebrow * { margin: 0; color: inherit; font-family: inherit; }

  /* Titre : ST Nova Sans leading-none clamp(28,4vw,44) mb-4 */
  #newsletter-template--29733033214294__newsletter_eihETy .nl__heading {
    font-family: 'ST Nova Sans', 'Big Shoulders Display', sans-serif;
    font-weight: 400;
    line-height: 1;
    color: #000000;
    font-size: clamp(28px, 4vw, 44px);
    text-align: center;
    margin: 0 0 16px 0;
  }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__heading * { font-family: inherit; font-weight: inherit; color: inherit; margin: 0; }

  /* Sous-titre : Poppins 300 14px noir/50 max-w-md mb-8 */
  #newsletter-template--29733033214294__newsletter_eihETy .nl__sub {
    font-family: var(--font-body-family);
    font-weight: var(--font-weight-body);
    font-size: var(--fs-body-mobile);
    line-height: var(--lh-body);
    letter-spacing: var(--ls-body);
    color: #000000;
    max-width: 28rem;
    margin: 0 auto 32px auto;
  }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__sub * { margin: 0; color: inherit; font-family: inherit; }

  /* Form wrapper */
  #newsletter-template--29733033214294__newsletter_eihETy .nl__form-wrap {}

  #newsletter-template--29733033214294__newsletter_eihETy .nl__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
  @media (min-width: 768px) {
    #newsletter-template--29733033214294__newsletter_eihETy .nl__form {
      flex-direction: row;
      gap: 0;
      align-items: stretch;
    }
  }

  /* Input : bordure bottom, transparent, Poppins 300 14px */
  #newsletter-template--29733033214294__newsletter_eihETy .nl__input {
    flex: 1;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    color: #000000;
    font-family: var(--font-body-family);
    font-weight: var(--font-weight-body);
    font-size: var(--fs-body-mobile);
    letter-spacing: var(--ls-body);
    padding: 12px 0;
    outline: none;
    transition: border-color 0.3s ease;
    border-radius: 0;
    -webkit-appearance: none;
    appearance: none;
  }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__input::placeholder {
    color: #000000;
    opacity: 0.25;
  }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__input:focus,
  #newsletter-template--29733033214294__newsletter_eihETy .nl__input:focus-visible {
    border-bottom-color: rgba(0,0,0,0.4);
  }

  /* Bouton : Poppins 400 11px tracking 0.2em uppercase */
  #newsletter-template--29733033214294__newsletter_eihETy .nl__btn {
    flex-shrink: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 11px;
    text-transform: uppercase;
    color: #000000;
    background: transparent;
    border: 1px solid rgba(0,0,0,0.25);
    padding: 14px 32px;
    cursor: pointer;
    transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    white-space: nowrap;
  }
  @media (min-width: 768px) {
    #newsletter-template--29733033214294__newsletter_eihETy .nl__btn { margin-left: 16px; }
  }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__btn:hover,
  #newsletter-template--29733033214294__newsletter_eihETy .nl__btn:focus-visible {
    border-color: #000000;
    background-color: #000000;
    color: #ffffff;
  }

  /* Legal : Poppins 400 10px noir/20 mt-3 */
  #newsletter-template--29733033214294__newsletter_eihETy .nl__legal {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 10px;
    color: #000000;
    opacity: 0.2;
    margin: 12px 0 0 0;
    line-height: 1.5;
  }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__legal * { margin: 0; color: inherit; font-family: inherit; }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__legal a {
    color: inherit;
    text-decoration: underline;
  }

  /* Success / error messages */
  #newsletter-template--29733033214294__newsletter_eihETy .nl__message {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    margin-top: 16px;
    text-align: center;
  }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__message--success { color: #000000; opacity: 0.7; }
  #newsletter-template--29733033214294__newsletter_eihETy .nl__message--error { color: #C0392B; }` }} />

<link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
<link rel={'preconnect'} href={'https://fonts.gstatic.com'} crossOrigin={''} />


<section id={'newsletter-template--29733033214294__newsletter_eihETy'} className={'nl'} aria-labelledby={'newsletter-template--29733033214294__newsletter_eihETy-heading'}>
  <div className={'nl__inner'}><span className={'nl__eyebrow is-revealed'} data-reveal={'fade-up'} data-reveal-delay={'0.1'} data-reveal-opacity={'0.4'} style={{transitionDelay: '0.1s', opacity: '0.4'} as React.CSSProperties}><p>Restons en contact</p></span><h2 id={'newsletter-template--29733033214294__newsletter_eihETy-heading'} className={'nl__heading is-revealed'} data-reveal={'words'} data-reveal-stagger={'0.06'}><p><span className={'sq-word'}><span className={'sq-word-inner'} style={{transitionDelay: '0.000s'} as React.CSSProperties}>Rejoignez</span></span> <span className={'sq-word'}><span className={'sq-word-inner'} style={{transitionDelay: '0.060s'} as React.CSSProperties}>l'art</span></span> <span className={'sq-word'}><span className={'sq-word-inner'} style={{transitionDelay: '0.120s'} as React.CSSProperties}>de</span></span> <span className={'sq-word'}><span className={'sq-word-inner'} style={{transitionDelay: '0.180s'} as React.CSSProperties}>vivre</span></span> <span className={'sq-word'}><span className={'sq-word-inner'} style={{transitionDelay: '0.240s'} as React.CSSProperties}>Square.</span></span></p></h2><div className={'nl__sub is-revealed'} data-reveal={'fade-up'} data-reveal-delay={'0.3'} data-reveal-opacity={'0.5'} style={{transitionDelay: '0.3s', opacity: '0.5'} as React.CSSProperties}><p>Inscrivez-vous et bénéficiez de -10% sur votre première commande.</p></div><div className={'nl__form-wrap is-revealed'} data-reveal={'fade-up'} data-reveal-delay={'0.45'} style={{transitionDelay: '0.45s'} as React.CSSProperties}><form method={'post'} action={'/contact#contact_form'} id={'contact_form'} acceptCharset={'UTF-8'} className={'nl__form'}><input type={'hidden'} name={'form_type'} defaultValue={'customer'} /><input type={'hidden'} name={'utf8'} defaultValue={'✓'} /><input type={'hidden'} name={'contact[tags]'} defaultValue={'newsletter'} />
        <label htmlFor={'NewsletterEmail--template--29733033214294__newsletter_eihETy'} className={'visually-hidden'} style={{position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: '0'} as React.CSSProperties}>Email</label>
        <input id={'NewsletterEmail--template--29733033214294__newsletter_eihETy'} type={'email'} name={'contact[email]'} className={'nl__input'} defaultValue={''} placeholder={'Votre adresse e-mail'} autoComplete={'email'} autoCorrect={'off'} autoCapitalize={'off'} spellCheck={'false'} required />
        <button type={'submit'} className={'nl__btn'} aria-label={'S\'inscrire'}>
          S'inscrire
        </button></form><div className={'nl__legal'}><p>En vous inscrivant, vous acceptez notre politique de confidentialité.</p></div></div>
  </div>
</section>
</section>