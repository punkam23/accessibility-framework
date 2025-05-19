import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

import minimist from 'minimist';

const doubleDashIndex = process.argv.indexOf('--');
const extraArgs = doubleDashIndex >= 0 ? process.argv.slice(doubleDashIndex + 1) : [];
const argv = minimist(extraArgs, { string: ['scope'] });

const scopes = (argv['scope'] ?? '').split(',');

console.log(scopes);

dotenv.config();

const baseUrl = process.env['BASE_URL'] || 'http://localhost:4200';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: baseUrl,
    browserName: 'chromium',
    headless: true,
  },
  metadata: {
    scopes
  }
});
