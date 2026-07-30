import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes/index.js';

export default defineConfig({
  name: 'default',
  title: 'Jogja Discovery Backoffice',

  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'dummyid123',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
