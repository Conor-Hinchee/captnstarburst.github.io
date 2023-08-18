import { test, expect } from '@playwright/test';

test.describe('On initial load and light mode.', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:3000');
    });
    test('no theme set, it should set theme to "light" and not contain the dark class.', async ({ page }) => {
        expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('light');
        expect(await page.evaluate(() => document.documentElement.classList.contains('dark'))).toBe(false);
    });
});

test.describe('On initial load and dark mode.', () => {
    test.beforeEach(async ({ page }) => {
        await page.addInitScript(() => {
            window.localStorage.setItem('theme', 'dark');
        });
        await page.goto('http://127.0.0.1:3000');
    });
    test('theme ="dark", it should set the dark class.', async ({ page }) => {
        expect(await page.evaluate(() => document.documentElement.classList.contains('dark'))).toBe(true);
    });
});
