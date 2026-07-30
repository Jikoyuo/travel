import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  site: 'https://travel-jet-nu.vercel.app',
  integrations: [
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || 'swt686hz',
      dataset: env.PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
    }),
    react(),
    sitemap(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['styled-components'],
    },
  },
});
