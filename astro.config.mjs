import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// Vite plugin to fix missing moduleType for virtual module objects in Vite 6 / Astro 5
function sanityModuleTypeFix() {
  return {
    name: 'sanity-module-type-fix',
    enforce: 'pre',
    transform(code, id) {
      if (typeof id === 'object' && id !== null) {
        return {
          code: typeof code === 'string' ? code : '',
          map: null,
          moduleType: 'js',
        };
      }
    },
  };
}

export default defineConfig({
  site: 'https://travel-jet-nu.vercel.app',
  integrations: [
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || 'swt686hz',
      dataset: env.PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react({
      include: ['**/*.{jsx,tsx}'],
    }),
    sitemap(),
  ],
  vite: {
    plugins: [sanityModuleTypeFix()],
    optimizeDeps: {
      exclude: ['styled-components'],
    },
  },
});
