import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

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
        !page.includes('/wellbeing/'),
      changefreq: 'weekly',
      priority: 0.7,
    })
  ],
});