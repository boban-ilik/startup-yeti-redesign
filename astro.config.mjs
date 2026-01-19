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
        !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
});