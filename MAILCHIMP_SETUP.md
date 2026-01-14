# Mailchimp Newsletter Setup Guide

Your newsletter is configured to work with Mailchimp! Follow these steps to complete the setup.

## Step 1: Get Your Mailchimp Credentials

### 1.1 Sign Up or Log In to Mailchimp
- Go to: https://mailchimp.com
- Sign up for a free account (up to 500 subscribers)
- Or log in to your existing account

### 1.2 Get Your API Key

1. Click your profile icon (bottom left)
2. Go to **Account → Extras → API keys**
3. Click **Create A Key**
4. Copy your API key (looks like: `abc123def456ghi789-us1`)
5. Save it somewhere safe!

### 1.3 Get Your Server Prefix

Your server prefix is in your API key after the last dash.

Example: If your API key is `abc123def456ghi789-us1`, your server prefix is `us1`

Common prefixes: `us1`, `us2`, `us3`, `us19`, etc.

### 1.4 Get Your List ID (Audience ID)

1. Go to **Audience → Audience dashboard**
2. Click **Manage Audience → Settings**
3. Scroll down to find **Audience ID** (looks like: `a1b2c3d4e5`)
4. Copy this ID

---

## Step 2: Add Environment Variables to Cloudflare Pages

1. **Go to Cloudflare Dashboard**: https://dash.cloudflare.com
2. Navigate to **Workers & Pages**
3. Click on your project: **startup-yeti-redesign**
4. Go to **Settings** tab
5. Scroll to **Environment variables**
6. Click **Add variable** (do this 3 times for each variable below)

### Add These Variables:

**Variable 1:**
```
Name: MAILCHIMP_API_KEY
Value: [Your API key from step 1.2]
Environment: Production (check both Production and Preview)
```

**Variable 2:**
```
Name: MAILCHIMP_SERVER_PREFIX
Value: [Your server prefix from step 1.3, e.g., "us1"]
Environment: Production (check both Production and Preview)
```

**Variable 3:**
```
Name: MAILCHIMP_LIST_ID
Value: [Your audience/list ID from step 1.4]
Environment: Production (check both Production and Preview)
```

7. Click **Save** after adding each variable

---

## Step 3: Trigger a New Deployment

After adding environment variables, you need to redeploy:

**Option A: Push a commit (easiest)**
```bash
git commit --allow-empty -m "Trigger redeploy for Mailchimp env vars"
git push origin main
```

**Option B: Manual redeploy in Cloudflare**
1. Go to **Deployments** tab
2. Click **...** on latest deployment
3. Select **Retry deployment**

---

## Step 4: Test Your Newsletter

Wait 2-3 minutes for deployment to complete, then:

1. Visit your site: https://startupyeti.com
2. Scroll down to the newsletter signup form
3. Enter a test email (use your real email to receive confirmation)
4. Click **Subscribe**
5. You should see: **"Success! Check your email to confirm."**

### Verify in Mailchimp:

1. Go to Mailchimp dashboard
2. Click **Audience → All contacts**
3. Your test email should appear there!
4. Mailchimp will send a confirmation email to the subscriber

---

## What Happens When Someone Subscribes?

1. **User enters email** on your site
2. **Our function validates** the email format
3. **Cloudflare sends** the email to Mailchimp API
4. **Mailchimp adds** the subscriber to your audience
5. **Mailchimp sends** a confirmation email (double opt-in)
6. **User confirms** by clicking link in email
7. **They're subscribed!** ✅

---

## Newsletter Signup Forms on Your Site

You have **4 different newsletter forms** that all work with this setup:

1. **Homepage Hero** - Main call-to-action
2. **Modal Popup** - Appears after 10 seconds on homepage
3. **Sticky CTA Bar** - Shows after scrolling 50% down
4. **Footer** - On every page

All forms use the same Mailchimp integration automatically!

---

## Troubleshooting

### "Failed to subscribe" error

**Check:**
- ✅ Environment variables are set correctly in Cloudflare
- ✅ API key is valid (try creating a new one)
- ✅ Server prefix matches your API key
- ✅ List/Audience ID is correct
- ✅ You've redeployed after adding env vars

### Check Cloudflare Logs

1. Go to Cloudflare dashboard
2. Click your project
3. Go to **Functions** tab
4. Click **View logs** to see errors

### "Member Exists" - Already Subscribed

This is handled automatically! If someone tries to subscribe twice, they'll see "You are already subscribed!" instead of an error.

### Mailchimp API Rate Limits

Free accounts have limits:
- Up to 500 subscribers
- 1,000 API calls per month (plenty for newsletter signups)

---

## Mailchimp Dashboard Tips

### Create a Welcome Email

1. In Mailchimp, go to **Campaigns → Email → Automated**
2. Choose **Welcome new subscribers**
3. Design your welcome email
4. This sends automatically when someone subscribes!

### View Your Subscribers

- Go to **Audience → All contacts**
- Export list anytime as CSV
- See signup date, location, engagement

### Send a Campaign

When you're ready to send to your list:
1. Go to **Campaigns → Create campaign**
2. Choose **Regular email**
3. Design your newsletter
4. Send to your entire list!

---

## Next Steps

After setup is complete:

1. ✅ Test subscription with your email
2. ✅ Check Mailchimp to confirm subscriber appears
3. ✅ Set up a welcome email automation
4. ✅ Customize your Mailchimp templates
5. ✅ Plan your first newsletter campaign!

---

## Cost

**Mailchimp Free Plan:**
- Up to 500 subscribers: **FREE**
- 1,000 emails per month: **FREE**
- Basic templates and reports: **FREE**

**Mailchimp Essentials Plan** ($13/month):
- Up to 500 subscribers
- 5,000 emails per month
- Advanced automations
- A/B testing
- Custom branding

---

## Security Notes

- ✅ API keys are stored in Cloudflare environment variables (secure)
- ✅ Not exposed to client-side code
- ✅ All requests go through Cloudflare Pages Function
- ✅ Email validation prevents spam
- ✅ Mailchimp handles double opt-in confirmation

---

## Support Resources

- **Mailchimp Help**: https://mailchimp.com/help/
- **API Documentation**: https://mailchimp.com/developer/marketing/api/
- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/

---

## Summary Checklist

- [ ] Created/logged into Mailchimp account
- [ ] Got API key from Mailchimp
- [ ] Got server prefix (from API key)
- [ ] Got List/Audience ID
- [ ] Added 3 environment variables to Cloudflare Pages
- [ ] Redeployed site (pushed commit or manual redeploy)
- [ ] Tested newsletter signup
- [ ] Verified subscriber in Mailchimp dashboard
- [ ] Set up welcome email (optional but recommended)

Once all checked, your newsletter is **LIVE**! 🎉

---

Need help? Check the troubleshooting section or Mailchimp support.
