// Analytics with bot filtering
// External file — keeps HTML lean per Google's 2MB crawl guidance.
// Cached by browser across page loads; each visit only re-executes, not re-downloads.

(function () {
  function isLikelyBot() {
    const ua = navigator.userAgent.toLowerCase();
    const botPatterns = [
      'bot', 'crawler', 'spider', 'crawling', 'headless',
      'slurp', 'mediapartners', 'googlebot', 'bingbot',
      'phantomjs', 'selenium', 'puppeteer', 'webdriver'
    ];

    if (botPatterns.some(p => ua.includes(p))) return true;
    if (navigator.webdriver) return true;
    if (!navigator.languages || navigator.languages.length === 0) return true;
    if (navigator.plugins.length === 0 && !ua.includes('mobile')) return true;

    return false;
  }

  if (!isLikelyBot()) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    // GA4 anonymizes IPs automatically — the old UA-era `anonymize_ip` flag is
    // ignored, so it's removed. `send_page_view` is GA4's default; kept explicit.
    gtag('config', 'G-5Y6SRMMDYG', {
      send_page_view: true
    });
  }
})();
