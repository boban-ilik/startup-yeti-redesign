# WordPress + Astro Headless CMS Setup Guide

This guide will help you connect your WordPress site to this Astro website.

## Phase 1: WordPress Configuration

### 1. Install WPGraphQL Plugin

1. Log in to your WordPress Admin dashboard
2. Go to **Plugins** > **Add New**
3. Search for "WPGraphQL"
4. Click **Install Now** and then **Activate**

### 2. Verify GraphQL Endpoint

After installation, your GraphQL endpoint will be available at:
```
https://YOUR-WORDPRESS-SITE.com/graphql
```

You can test it by visiting:
```
https://YOUR-WORDPRESS-SITE.com/graphql
```

You should see the GraphiQL IDE interface.

### 3. Optional: Install Additional Plugins

For better functionality, consider installing:

- **WPGraphQL for Advanced Custom Fields** - If you use ACF
- **WPGraphQL for Yoast SEO** - For SEO metadata
- **WPGraphQL JWT Authentication** - If you need authentication

## Phase 2: Configure Astro

### 1. Set Up Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace with your WordPress URL:
   ```
   WORDPRESS_URL=https://your-wordpress-site.com/graphql
   ```

### 2. Test the Connection

Run the development server:
```bash
npm run dev
```

Visit these URLs to test:
- `http://localhost:4321/blog` - Blog listing page
- `http://localhost:4321/blog/your-post-slug` - Individual blog post

### 3. Build for Production

```bash
npm run build
```

## Phase 3: Deploy to Cloudflare Pages

### 1. Push to GitHub

```bash
git add .
git commit -m "Add WordPress integration"
git push origin main
```

### 2. Configure Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** > **Create Application** > **Pages**
3. Click **Connect to Git** and select your repository
4. Configure build settings:
   - **Project name**: `startup-yeti`
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Add environment variable:
   - **Variable name**: `WORDPRESS_URL`
   - **Value**: `https://your-wordpress-site.com/graphql`
6. Click **Save and Deploy**

### 3. Set Up Automatic Rebuilds (Optional)

To automatically rebuild when you publish a new post:

1. Install **WP Webhooks** plugin in WordPress
2. Go to **Settings** > **Webhooks**
3. Add a new webhook:
   - **Trigger**: Post Published
   - **URL**: Your Cloudflare Pages deploy hook URL
4. Get deploy hook from Cloudflare:
   - Go to your Pages project
   - Click **Settings** > **Builds & deployments**
   - Create a **Deploy Hook**
   - Copy the URL and paste it into WordPress

## Features Included

### Blog Listing Page (`/blog`)
- ✅ All posts with pagination support
- ✅ Category filtering
- ✅ Featured images
- ✅ Reading time calculation
- ✅ Responsive design
- ✅ Matches your site's design system

### Individual Post Page (`/blog/[slug]`)
- ✅ Full post content with WordPress blocks
- ✅ Featured image
- ✅ Author information
- ✅ Publication date
- ✅ Reading time
- ✅ Categories and tags
- ✅ Reading progress bar
- ✅ Newsletter signup CTA
- ✅ Responsive design
- ✅ Beautiful typography with Tailwind prose

## Customization

### Modify Posts Per Page

In `src/pages/blog/index.astro`, change:
```javascript
posts(first: 100, where: {orderby: {field: DATE, order: DESC}})
```

### Add Custom Fields

If you're using Advanced Custom Fields (ACF), install **WPGraphQL for ACF** and add to your query:
```graphql
acfFieldGroup {
  fieldName
}
```

### Change Typography

Edit the prose classes in `src/pages/blog/[slug].astro` to customize article styling.

## Troubleshooting

### "Cannot fetch posts"
- Check your WordPress URL is correct in `.env`
- Verify WPGraphQL is activated
- Test the GraphQL endpoint directly

### Images not loading
- Make sure featured images are set in WordPress
- Check image URLs in the GraphQL response
- Verify CORS settings if needed

### Build fails on Cloudflare
- Check environment variables are set
- Verify WordPress site is accessible
- Check build logs for specific errors

## Performance Notes

- All pages are statically generated at build time
- No runtime WordPress queries = super fast
- Images are served directly from WordPress
- Consider using Cloudflare Images for optimization

## Need Help?

- [WPGraphQL Documentation](https://www.wpgraphql.com/docs/introduction)
- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)

## Next Steps

1. ✅ Set up WordPress with WPGraphQL
2. ✅ Configure your `.env` file
3. ✅ Test locally with `npm run dev`
4. ✅ Push to GitHub
5. ✅ Deploy to Cloudflare Pages
6. ✅ Set up automatic rebuilds
7. 🎉 Start publishing content!
