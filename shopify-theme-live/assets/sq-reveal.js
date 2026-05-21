/* ============================================
   SQ Reveal — Unified scroll-triggered animations
   Mirrors Lovable: RevealText, RevealParagraph, RevealImage
   + Lenis smooth scroll (desktop only)
   ============================================ */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Prepare word-by-word elements ── */
  document.querySelectorAll('[data-reveal="words"]').forEach(function (el) {
    // Skip if already processed
    if (el.querySelector('.sq-word')) return;
    // Get text from all child nodes (handles <p>, <span>, etc.)
    var textEl = el.querySelector('p, span, h1, h2, h3, h4') || el;
    var text = textEl.textContent.trim();
    if (!text) return;
    var words = text.split(/\s+/);
    var stagger = parseFloat(el.dataset.revealStagger) || 0.06;
    var html = words.map(function (word, i) {
      var delay = (i * stagger).toFixed(3);
      return '<span class="sq-word"><span class="sq-word-inner" style="transition-delay:' + delay + 's">' + word + '</span></span>';
    }).join(' ');
    textEl.innerHTML = html;
  });

  /* ── 2. IntersectionObserver for all [data-reveal] ── */
  if ('IntersectionObserver' in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          // Apply cascade delay if specified
          var delay = el.dataset.revealDelay;
          if (delay) {
            el.style.transitionDelay = delay + 's';
          }
          // Apply final opacity if specified (for elements that shouldn't go to 1)
          var finalOpacity = el.dataset.revealOpacity;
          if (finalOpacity) {
            // Override the revealed state opacity
            el.addEventListener('transitionend', function handler() {
              el.style.opacity = finalOpacity;
              el.removeEventListener('transitionend', handler);
            }, { once: true });
          }
          el.classList.add('is-revealed');
          io.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.15
    });

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Fallback: reveal everything immediately
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  /* ── 3. Legacy is-visible sections ── */
  // Also handle existing sections that use the old .is-visible pattern
  if ('IntersectionObserver' in window && !reducedMotion) {
    document.querySelectorAll('[data-sq-reveal-section]').forEach(function (section) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            section.classList.add('is-visible');
            io2.disconnect();
          }
        });
      }, { threshold: 0.15 });
      io2.observe(section);
    });
  } else {
    document.querySelectorAll('[data-sq-reveal-section]').forEach(function (section) {
      section.classList.add('is-visible');
    });
  }

  /* ── 4. Lenis smooth scroll (desktop only, ≥768px) ── */
  function initLenis() {
    if (window.innerWidth < 768 || reducedMotion) return;
    if (typeof Lenis === 'undefined') return;

    var lenis = new Lenis({
      lerp: 0.08,
      touchMultiplier: 0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Expose for potential external use
    window.__sqLenis = lenis;
  }

  // Try to init Lenis after script loads
  if (typeof Lenis !== 'undefined') {
    initLenis();
  } else {
    // Lenis script might load later
    window.addEventListener('load', initLenis);
  }

  /* ── 5. Re-init on Shopify section events ── */
  if (typeof Shopify !== 'undefined' && Shopify.designMode) {
    document.addEventListener('shopify:section:load', function (event) {
      var root = event.target;
      // Process new word elements
      root.querySelectorAll('[data-reveal="words"]').forEach(function (el) {
        if (el.querySelector('.sq-word')) return;
        var textEl = el.querySelector('p, span, h1, h2, h3, h4') || el;
        var text = textEl.textContent.trim();
        if (!text) return;
        var words = text.split(/\s+/);
        var stagger = parseFloat(el.dataset.revealStagger) || 0.06;
        var html = words.map(function (word, i) {
          var delay = (i * stagger).toFixed(3);
          return '<span class="sq-word"><span class="sq-word-inner" style="transition-delay:' + delay + 's">' + word + '</span></span>';
        }).join(' ');
        textEl.innerHTML = html;
      });
      // Reveal all in design mode
      root.querySelectorAll('[data-reveal]').forEach(function (el) {
        el.classList.add('is-revealed');
      });
      root.querySelectorAll('[data-sq-reveal-section]').forEach(function (el) {
        el.classList.add('is-visible');
      });
    });
  }
})();
