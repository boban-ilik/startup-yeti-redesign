import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { NOINDEX_PATHS } from './src/data/noindex.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.startupyeti.com',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/debug') &&
        !page.includes('/admin') &&
        !page.includes('/sales/') &&
        !page.includes('/trends/') &&
        !page.includes('/content-marketing/') &&
        !page.includes('/customer-experience/') &&
        !page.includes('/employment/') &&
        !page.includes('/leadership/') &&
        !page.includes('/wellbeing/') &&
        // noindexed pages must not appear in the sitemap
        !NOINDEX_PATHS.has(new URL(page).pathname.replace(/\/$/, '')),
      changefreq: 'weekly',
      priority: 0.7,
    })
  ],
});