import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Jogja Discovery Backoffice',

  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'swt686hz',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
