# Cloudflare Pages Deployment Setup

## Environment Variable Configuration

Your WordPress GraphQL endpoint needs to be configured as an environment variable for the blog posts to appear.

### Steps to Add Environment Variable:

1. **Go to Cloudflare Dashboard**
   - Navigate to Workers & Pages → startup-yeti-redesign

2. **Access Settings**
   - Click on the "Settings" tab at the top
   - Scroll down to "Environment variables"
   - OR look for "Build configuration" section

3. **Add the Variable**
   - Click "Add variable" or "Edit variables"
   - Variable name: `WORDPRESS_URL`
   - Value: `https://www.startupyeti.com/graphql`
   - Environment: Select both "Production" and "Preview"

4. **Trigger Redeploy**
   - Go to "Deployments" tab
   - Click "..." menu on latest deployment
   - Select "Retry deployment"
   - OR push a new commit to GitHub to trigger auto-deploy

### Verification

After redeployment with the environment variable:
- Homepage should show 3 recent blog posts
- `/blog` page should list all blog posts
- Individual blog post pages should be accessible at `/blog/[slug]`

### Current WordPress Posts

You have 23+ blog posts ready to display:
- "The Anatomy of Startup Apps"
- "Startup Smarts: The Books Every Founder Should Read"
- "Startup Financing Made Simple"
- And 20+ more...

### Troubleshooting

**If blog posts still don't appear:**
1. Check that WORDPRESS_URL is set in the dashboard
2. Verify the build logs show "generating static routes" for blog posts
3. Ensure the deployment completed successfully
4. Check browser console for any errors

**Build logs should show:**
```
generating static routes
▶ src/pages/blog/[slug].astro
  ├─ /blog/the-anatomy-of-startup-apps/index.html
  ├─ /blog/startup-financing/index.html
  ... (all blog posts)
```

Instead of:
```
WordPress URL not configured. Blog pages will not be generated.
```
