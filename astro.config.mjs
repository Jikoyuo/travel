import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://travel-jet-nu.vercel.app',
  integrations: [
    sitemap(),
  ],
});
