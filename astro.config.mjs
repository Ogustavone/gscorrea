// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'http://127.0.0.1/',
  vite: {
    server: {
      allowedHosts: true, // TODO: remover em prod
    },
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()]
});