import {test} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import * as AxeHtmlReporter from 'axe-html-reporter';
import axe, {Result} from 'axe-core';

test(`Accessibility check for Custom routes`, async ({page}) => {
  const scopes: string[] = test.info().config.metadata['scopes'];
  let violations: Result[] = [];
  let countReport = 1;
  console.log(scopes);
  for (const route of scopes) {
    console.log(route);
    await page.goto(route);

    const axe = new AxeBuilder({page});
    const results = await axe.analyze();
    const reportData = {results};
    // Fail the test if violations are found
    if (results.violations.length > 0) {
      const report = AxeHtmlReporter.createHtmlReport(reportData);
      fs.writeFileSync(`./artifacts/accessibility-report-${countReport}.html`, report);
      console.log('Accessibility Violations', results.violations);
      violations.push(...results.violations);
      // throw new Error('Accessibility violations found!');
    } else {
      console.log('No accessibility violations found.');
    }
    countReport ++;
  }
  if(violations.length > 0) {
    throw new Error(`${violations.length} Accessibility violations found!`);
  }
});
