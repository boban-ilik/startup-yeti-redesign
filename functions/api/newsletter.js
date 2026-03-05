// Cloudflare Pages Function — Newsletter Signup
// Proxies email submissions to Mailchimp, keeping the API key server-side.
//
// Required environment variables (set in Cloudflare Pages → Settings → Environment variables):
//   MAILCHIMP_API_KEY   — e.g. "abc123def456...–us21"  (include the server prefix at the end)
//   MAILCHIMP_LIST_ID   — e.g. "a1b2c3d4e5"

export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    // ── Parse body ────────────────────────────────────────────────────────────
    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ success: false, error: 'Invalid request body' }, 400);
    }

    const email = (body.email || '').trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return jsonResponse({ success: false, error: 'Please enter a valid email address.' }, 400);
    }

    // ── Mailchimp credentials ─────────────────────────────────────────────────
    const apiKey = env.MAILCHIMP_API_KEY;
    const listId = env.MAILCHIMP_LIST_ID;

    if (!apiKey || !listId) {
      // Not configured — log for dev, return success so the UX isn't broken
      console.warn('Mailchimp not configured. Set MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID.');
      return jsonResponse({ success: true, message: 'Subscribed! (dev mode)' });
    }

    // Use explicit env var if set, otherwise extract from API key suffix (e.g. "abc123-us18" → "us18")
    const serverPrefix = env.MAILCHIMP_SERVER_PREFIX || apiKey.split('-').pop();

    // ── Call Mailchimp API ────────────────────────────────────────────────────
    // Basic auth: username = any string, password = API key (Mailchimp standard)
    const auth = btoa(`startupyeti:${apiKey}`);

    const mcRes = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',   // 'pending' enables double opt-in (GDPR recommended)
          tags: ['website-newsletter'],
        }),
      }
    );

    const mcData = await mcRes.json();

    // ── Handle response ───────────────────────────────────────────────────────
    if (mcRes.ok) {
      return jsonResponse({ success: true, message: 'Successfully subscribed!' });
    }

    // Already subscribed — treat as success
    if (mcData.title === 'Member Exists') {
      return jsonResponse({ success: true, message: "You're already subscribed!" });
    }

    // Compliance / GDPR — previously unsubscribed
    if (mcData.title === 'Forgotten Email Not Subscribed') {
      return jsonResponse({
        success: false,
        error: "We couldn't re-subscribe this email. Please contact us directly.",
      }, 400);
    }

    // Any other Mailchimp error
    console.error('Mailchimp error:', mcData);
    return jsonResponse({
      success: false,
      error: mcData.detail || mcData.title || 'Subscription failed. Please try again.',
    }, 400);

  } catch (err) {
    console.error('Newsletter function error:', err);
    return jsonResponse({ success: false, error: 'Something went wrong. Please try again.' }, 500);
  }
}

// ── GET — quick health check ──────────────────────────────────────────────────
export async function onRequestGet() {
  return jsonResponse({ status: 'ok', endpoint: 'POST /api/newsletter' });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
