// Analytics with bot filtering + custom event tracking
// External file — keeps HTML lean per Google's crawl guidance.
// Cached by browser across page loads; each visit only re-executes, not re-downloads.

(function () {
  function isLikelyBot() {
    const ua = navigator.userAgent.toLowerCase();
    const botPatterns = [
      'bot', 'crawler', 'spider', 'crawling', 'headless',
      'slurp', 'mediapartners', 'googlebot', 'bingbot',
      'phantomjs', 'selenium', 'puppeteer', 'webdriver'
    ];

    // High-precision signals only. The old `navigator.plugins.length === 0` and
    // empty-`navigator.languages` heuristics flagged privacy-hardened REAL desktop
    // browsers as bots and under-counted live traffic. GA4's own server-side
    // "exclude known bots and spiders" filter (IAB/MRC list) covers the long tail.
    if (botPatterns.some(p => ua.includes(p))) return true;
    if (navigator.webdriver) return true;

    return false;
  }

  // Bots: define nothing. window.gtag and window.syTrack stay undefined, so no
  // page_view and no custom events ever fire for them.
  if (isLikelyBot()) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  // GA4 anonymizes IPs automatically; the UA-era anonymize_ip flag is omitted.
  gtag('config', 'G-5Y6SRMMDYG', { send_page_view: true });

  // Custom-event helper. Callers guard with `if (window.syTrack)` so bot
  // sessions (where this is undefined) simply skip tracking.
  window.syTrack = function (name, params) {
    window.gtag('event', name, params || {});
  };

  // Delegated CTA tracking: any element (or descendant) with a data-sy-cta
  // attribute fires a `cta_click` event labelled with the attribute's value.
  // No per-button JS — tag a new CTA by adding data-sy-cta="label".
  document.addEventListener('click', function (e) {
    const el = e.target.closest('[data-sy-cta]');
    if (el) window.syTrack('cta_click', { cta: el.getAttribute('data-sy-cta') });
  });
})();
