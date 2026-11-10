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

  // Count a visit only after a human signal: scroll, tap, click, key press,
  // mouse movement, or 10s on a visible tab. Load-and-leave bots that run JS
  // with a normal UA (most of the old "Direct" sessions, avg 3.7s) never get
  // here. gtag.js still loads, but sends nothing until config runs.
  var started = false, timer = null;
  var SIGNALS = ['scroll', 'pointerdown', 'keydown', 'touchstart', 'mousemove'];
  function start() {
    if (started) return;
    started = true;
    clearTimeout(timer);
    SIGNALS.forEach(function (t) { window.removeEventListener(t, start, true); });
    document.removeEventListener('visibilitychange', onVisibility);
    gtag('js', new Date());
    // GA4 anonymizes IPs automatically; the UA-era anonymize_ip flag is omitted.
    gtag('config', 'G-5Y6SRMMDYG', { send_page_view: true });
  }
  function onVisibility() {
    clearTimeout(timer);
    if (document.visibilityState === 'visible') timer = setTimeout(start, 10000);
  }
  SIGNALS.forEach(function (t) { window.addEventListener(t, start, { capture: true, passive: true }); });
  document.addEventListener('visibilitychange', onVisibility);
  onVisibility();

  // Custom-event helper. Callers guard with `if (window.syTrack)` so bot
  // sessions (where this is undefined) simply skip tracking. Any event implies
  // a human action, so it starts the session first if needed.
  window.syTrack = function (name, params) {
    start();
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
