import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes/index.js';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || (typeof process !== 'undefined' ? process.env.PUBLIC_SANITY_PROJECT_ID : '') || 'swt686hz';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || (typeof process !== 'undefined' ? process.env.PUBLIC_SANITY_DATASET : '') || 'production';

export default defineConfig({
  name: 'default',
  title: 'Jogja Discovery Backoffice',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
