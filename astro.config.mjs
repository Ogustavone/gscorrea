// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.gscorrea.com.br',
  vite: {
    server: {
      allowedHosts: true, // TODO: remover em prod
    },
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()]
});