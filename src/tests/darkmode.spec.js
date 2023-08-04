import { test, expect } from '@playwright/test';

test.describe('light mode', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:3000');
    });
    test('initial load no OS preference, ', async ({ page }) => {
        expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('light');
    });
});

test.describe('dark mode', () => {
    test.beforeEach(async ({ page }) => {
        await page.addInitScript(() => {
            window.localStorage.setItem('theme', 'dark');
        });
        await page.goto('http://127.0.0.1:3000');
    });
    test('initial load dark mode preference ', async ({ page }) => {
        expect(await page.evaluate(() => document.documentElement.classList.contains('dark'))).toBe(true);
    });
});
