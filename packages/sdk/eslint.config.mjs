import { defineConfig } from 'eslint/config';
import sharedConfig from '../../apps/web/eslint.config.mjs';

export default defineConfig([
  ...sharedConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
]);
