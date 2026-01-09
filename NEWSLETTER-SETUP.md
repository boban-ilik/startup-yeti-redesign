# Newsletter Setup Guide

Your site now has working newsletter signup functionality! Here's how to configure it:

## How It Works

1. **Client-side**: JavaScript in `/public/js/newsletter.js` handles form submissions
2. **Server-side**: Cloudflare Pages Function at `/functions/api/newsletter.js` processes signups
3. **Integration**: Connect to your preferred email service provider

## Quick Start (Development)

Currently, the newsletter function logs emails to the console. To test locally:

```bash
npm run dev
```

Fill out any newsletter form and check your browser console for the submitted email.

## Production Setup

### Option 1: ConvertKit (Recommended)

1. Sign up at [ConvertKit](https://convertkit.com)
2. Create a form and get your:
   - API Key
   - Form ID
3. In Cloudflare Pages dashboard, add environment variables:
   ```
   CONVERTKIT_API_KEY=your_api_key
   CONVERTKIT_FORM_ID=your_form_id
   ```
4. Uncomment the ConvertKit section in `/functions/api/newsletter.js`

### Option 2: Mailchimp

1. Sign up at [Mailchimp](https://mailchimp.com)
2. Get your:
   - API Key
   - Server Prefix (e.g., "us1")
   - List ID
3. In Cloudflare Pages dashboard, add environment variables:
   ```
   MAILCHIMP_API_KEY=your_api_key
   MAILCHIMP_SERVER_PREFIX=us1
   MAILCHIMP_LIST_ID=your_list_id
   ```
4. Uncomment the Mailchimp section in `/functions/api/newsletter.js`

### Option 3: Beehiiv / Loops / Other Services

Similar process:
1. Get API credentials from your provider
2. Add environment variables in Cloudflare
3. Update `/functions/api/newsletter.js` with the appropriate API calls

## Newsletter Forms

The site has **4 newsletter signup forms**:

1. **Hero Section** (Homepage) - Main CTA
2. **Newsletter Modal** (Popup after 10 seconds)
3. **Sticky CTA Bar** (Appears after 50% scroll)
4. **Footer** (Bottom of every page)

All forms use the same handler and will work automatically once you configure your email service.

## Testing

1. **Local Development**:
   ```bash
   npm run dev
   ```
   Forms will work, but API calls go to your local server

2. **Cloudflare Pages**:
   Deploy to Cloudflare Pages and the `/api/newsletter` endpoint will work automatically

## Features

- ✅ Email validation
- ✅ Loading states ("Subscribing...")
- ✅ Success notifications
- ✅ Error handling
- ✅ Prevents double submissions
- ✅ Beautiful toast notifications

## Customization

Edit `/public/js/newsletter.js` to customize:
- Success/error messages
- Notification styling
- Form behavior
- Validation rules

## Troubleshooting

**Forms not submitting?**
- Check browser console for errors
- Verify `/public/js/newsletter.js` is loaded
- Confirm forms have `data-newsletter-form` attribute

**API errors?**
- Check Cloudflare Pages Function logs
- Verify environment variables are set
- Test API endpoints in Cloudflare dashboard

**Need help?**
- ConvertKit docs: https://developers.convertkit.com
- Mailchimp docs: https://mailchimp.com/developer
- Cloudflare Pages docs: https://developers.cloudflare.com/pages
