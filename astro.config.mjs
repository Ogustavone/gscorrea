// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.gscorrea.com.br',
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()]
});