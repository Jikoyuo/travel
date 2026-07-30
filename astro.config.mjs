import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://travel-jet-nu.vercel.app',
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'dummy_id',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false, // Ensures real-time fresh data upon build
      studioBasePath: '/admin', // Embeds Sanity Studio at /admin URL
    }),
    sitemap(),
  ],
});
