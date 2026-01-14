# Cloudflare Pages Functions Debugging Guide

## Current Issue: Newsletter API Returns 404

**Error:** `POST https://www.startupyeti.com/api/newsletter 404 (Not Found)`

This means Cloudflare Pages Functions are not being deployed or recognized.

---

## Why This Happens

Cloudflare Pages Functions need to be:
1. ✅ In the correct directory: `/functions/` (we have this)
2. ✅ Using correct export format: `export async function onRequestPost()` (we have this)
3. ❌ **Deployed with the site** (this might be the issue)
4. ❌ **Environment variables configured** (you haven't added these yet)

---

## How to Fix

### Step 1: Verify Functions Are Deployed

After the current deployment completes, test these URLs:

1. **Test endpoint**: https://www.startupyeti.com/test
   - Should return: `{"success": true, "message": "Cloudflare Pages Functions are working!"}`
   - If this works, Functions are deployed correctly

2. **Newsletter GET test**: https://www.startupyeti.com/api/newsletter
   - Should return: `{"success": true, "message": "Newsletter API is ready"}`
   - If this works, the newsletter endpoint is accessible

If BOTH of these return 404, then Functions aren't being deployed.

### Step 2: Check Cloudflare Dashboard

1. Go to: https://dash.cloudflare.com
2. Navigate to: **Workers & Pages** → **startup-yeti-redesign**
3. Go to: **Functions** tab
4. You should see: `/api/newsletter` and `/test` listed
5. If you don't see them, Functions aren't deploying

### Step 3: Enable Functions in Cloudflare

If Functions aren't showing up:

**Option A: Check Build Settings**
1. Go to **Settings** → **Builds & deployments**
2. Make sure **Functions** are enabled
3. Build command should be: `npm run build`
4. Build output: `dist`

**Option B: Check _routes.json (if needed)**

Some Cloudflare setups need a `_routes.json` file. Create this in `/public/`:

```json
{
  "version": 1,
  "include": [
    "/api/*",
    "/test"
  ],
  "exclude": []
}
```

### Step 4: Add Environment Variables

Even if Functions deploy, the newsletter won't work without these:

1. Go to **Settings** → **Environment variables**
2. Add these 3 variables (for Production):
   - `MAILCHIMP_API_KEY` = `[your-api-key-here]`
   - `MAILCHIMP_SERVER_PREFIX` = `[your-server-prefix]`
   - `MAILCHIMP_LIST_ID` = `[your-list-id]`
3. Redeploy after adding

---

## Testing the Fix

### Test 1: Are Functions Working?

Visit: https://www.startupyeti.com/test

**✅ Good Response:**
```json
{
  "success": true,
  "message": "Cloudflare Pages Functions are working!",
  "timestamp": "2026-01-14T..."
}
```

**❌ Bad Response:**
- 404 Not Found
- Cloudflare error page

### Test 2: Is Newsletter Endpoint Accessible?

Visit: https://www.startupyeti.com/api/newsletter

**✅ Good Response:**
```json
{
  "success": true,
  "message": "Newsletter API is ready",
  "endpoint": "/api/newsletter",
  "method": "POST"
}
```

**❌ Bad Response:**
- 404 Not Found

### Test 3: Can Newsletter Subscribe Work?

Once Tests 1 & 2 pass and you've added environment variables:

1. Go to homepage
2. Enter email in newsletter form
3. Click Subscribe
4. Should see: "Success! Check your email to confirm."

---

## Common Issues & Solutions

### Issue: Functions Return 404

**Cause:** Functions not deployed

**Fix:**
1. Check Cloudflare dashboard → Functions tab
2. If empty, Functions aren't building
3. Try adding `_routes.json` (see Step 3, Option B above)
4. Redeploy

### Issue: "Failed to subscribe" Error

**Cause:** Missing environment variables OR Mailchimp API error

**Fix:**
1. Add all 3 Mailchimp environment variables
2. Double-check API key is correct
3. Check Cloudflare Function logs for detailed error

### Issue: Test Endpoints Work But Newsletter Doesn't

**Cause:** Missing or incorrect environment variables

**Fix:**
1. Verify all 3 env vars are added in Cloudflare
2. Verify values are exact (no extra spaces)
3. Redeploy after adding vars

---

## Checking Function Logs

To see detailed errors:

1. Cloudflare Dashboard → Your Project
2. Go to **Functions** tab
3. Click **View logs** or **Real-time logs**
4. Try subscribing to newsletter
5. Check logs for errors

Common log errors:
- `MAILCHIMP_API_KEY is undefined` = Missing env var
- `401 Unauthorized` = Wrong API key
- `404 Not Found` = Wrong List ID

---

## Next Steps

**Right Now:**
1. Wait for current deployment to finish (2-3 min)
2. Test: https://www.startupyeti.com/test
3. Test: https://www.startupyeti.com/api/newsletter

**If Tests Pass:**
4. Add Mailchimp environment variables in Cloudflare
5. Redeploy
6. Test newsletter subscription

**If Tests Fail (404):**
4. Create `_routes.json` in `/public/` (see above)
5. Commit and push
6. Test again after deployment

---

## Quick Reference

**Your Mailchimp Credentials:**
- API Key: `[Your API key - see Mailchimp dashboard]`
- Server Prefix: `[Your server prefix, e.g., us18]`
- List ID: `[Your List/Audience ID]`

**Test URLs:**
- Test endpoint: `https://www.startupyeti.com/test`
- Newsletter GET: `https://www.startupyeti.com/api/newsletter`
- Newsletter POST: `https://www.startupyeti.com/api/newsletter` (with email in body)

**Cloudflare Dashboard:**
- URL: https://dash.cloudflare.com
- Project: startup-yeti-redesign
- Functions tab: Check if endpoints are listed
- Settings → Environment variables: Add Mailchimp credentials

---

## Summary

The newsletter 404 error happens because Cloudflare Pages Functions either:
1. Aren't deploying (most likely)
2. Need environment variables (also needed)

**Action Plan:**
1. ✅ Wait for deployment
2. ✅ Test `/test` endpoint
3. ✅ If 404, add `_routes.json` and redeploy
4. ✅ Once Functions work, add Mailchimp env vars
5. ✅ Test newsletter subscription

Let me know what the test URLs show after deployment!
