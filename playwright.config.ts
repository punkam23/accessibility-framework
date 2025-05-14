import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

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
});
