// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vologis.com',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => page.includes('/pl/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
    },
  }
});
