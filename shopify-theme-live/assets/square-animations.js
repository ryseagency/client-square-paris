/**
 * ============================================
 * SQUARE ANIMATIONS
 * - Lenis smooth scroll (desktop uniquement)
 * - Reveal text / image / paragraph (IntersectionObserver)
 * - Magnetic buttons (desktop uniquement)
 * - Respect prefers-reduced-motion
 * ============================================
 */

(function() {
  'use strict';

  // Détection capabilities
  var isMobile = window.innerWidth < 768;
  var isTouch = 'ontouchstart' in window;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Classe "js" sur <html> pour activer les animations en CSS
  document.documentElement.classList.add('js');

  // Si reduced motion, on affiche tout direct et on arrête là pour les animations
  if (prefersReducedMotion) {
    document.documentElement.classList.add('no-animations');
    return;
  }

  /* ============================================
     1. LENIS SMOOTH SCROLL (desktop uniquement)
     ============================================ */
  function initLenis() {
    if (isMobile || isTouch) return;
    if (typeof Lenis === 'undefined') return;

    var lenis = new Lenis({
      lerp: 0.08,
      touchMultiplier: 0,
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Expose pour pause/resume (utile pour les drawers)
    window.squareLenis = lenis;

    // Pause Lenis quand drawer ouvert (scroll lock)
    document.addEventListener('drawer:open', function() {
      lenis.stop();
    });
    document.addEventListener('drawer:close', function() {
      lenis.start();
    });
  }

  /* ============================================
     2. REVEAL TEXT (stagger mot par mot)
     ============================================ */
  function initRevealText() {
    var elements = document.querySelectorAll('.reveal-text');
    if (!elements.length) return;

    elements.forEach(function(el) {
      // Split en mots enveloppés
      var text = el.textContent.trim();
      var words = text.split(/\s+/);

      el.innerHTML = '';
      el.classList.add('reveal-text--ready');

      words.forEach(function(word, i) {
        var wrapper = document.createElement('span');
        wrapper.className = 'reveal-text__word-wrap';

        var inner = document.createElement('span');
        inner.className = 'reveal-text__word';
        inner.style.transitionDelay = (i * 60) + 'ms';
        inner.textContent = word;

        wrapper.appendChild(inner);
        el.appendChild(wrapper);
        if (i < words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
      });
    });

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-100px 0px', threshold: 0 });

    elements.forEach(function(el) { observer.observe(el); });
  }

  /* ============================================
     3. REVEAL IMAGE (clip-path rideau)
     ============================================ */
  function initRevealImage() {
    var elements = document.querySelectorAll('.reveal-image');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-50px 0px', threshold: 0 });

    elements.forEach(function(el) { observer.observe(el); });
  }

  /* ============================================
     4. REVEAL PARAGRAPH (simple fade-up)
     ============================================ */
  function initRevealParagraph() {
    var elements = document.querySelectorAll('.reveal-paragraph, .reveal-fade');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-50px 0px', threshold: 0 });

    elements.forEach(function(el) { observer.observe(el); });
  }

  /* ============================================
     5. MAGNETIC BUTTONS (desktop uniquement)
     ============================================ */
  function initMagneticButtons() {
    if (isMobile || isTouch || window.innerWidth < 1024) return;

    var buttons = document.querySelectorAll('.magnetic');
    if (!buttons.length) return;

    buttons.forEach(function(btn) {
      var rect;

      btn.addEventListener('mouseenter', function() {
        rect = btn.getBoundingClientRect();
      });

      btn.addEventListener('mousemove', function(e) {
        if (!rect) rect = btn.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          btn.style.transform = 'translate3d(' + (dx * 0.3) + 'px, ' + (dy * 0.3) + 'px, 0)';
        }
      });

      btn.addEventListener('mouseleave', function() {
        btn.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    initLenis();
    initRevealText();
    initRevealImage();
    initRevealParagraph();
    initMagneticButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init sur les rechargements section dans l'éditeur Shopify
  document.addEventListener('shopify:section:load', function() {
    initRevealText();
    initRevealImage();
    initRevealParagraph();
    initMagneticButtons();
  });

})();