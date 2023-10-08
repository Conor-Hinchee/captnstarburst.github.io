import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
});

test.describe('homepage accessibility.', () => {
  test('should not have any automatically detectable accessibility issues.', async ({ page }) => {

    const accessibilityScanResults = await new AxeBuilder({ page })
    .exclude('#__bs_notify__')
    .exclude('#breadcrumb')
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
  test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {

    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude('#breadcrumb')
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
