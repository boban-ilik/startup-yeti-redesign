// Cloudflare Pages Function for Newsletter Signup
// This function handles newsletter subscriptions
// You can integrate with: ConvertKit, Mailchimp, Beehiiv, Loops, or any email service

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid email address'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Example: ConvertKit Integration
    // Uncomment and configure when you have your ConvertKit API key
    /*
    const CONVERTKIT_API_KEY = env.CONVERTKIT_API_KEY;
    const CONVERTKIT_FORM_ID = env.CONVERTKIT_FORM_ID;

    const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email: email
      })
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }
    */

    // Example: Mailchimp Integration
    // Uncomment and configure when you have your Mailchimp API key
    /*
    const MAILCHIMP_API_KEY = env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER_PREFIX = env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us1'
    const MAILCHIMP_LIST_ID = env.MAILCHIMP_LIST_ID;

    const response = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        })
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to subscribe');
    }
    */

    // For now, just log the email (replace with actual integration)
    console.log('Newsletter signup:', email);

    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully subscribed!'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Newsletter signup error:', error);

    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to subscribe. Please try again.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
