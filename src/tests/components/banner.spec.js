import { test, expect } from '@playwright/test';

test.describe('banner component', () => {
    test.beforeEach(async ({ page }) => {
        await page.addInitScript(() => {
            window.localStorage.setItem('theme', 'dark');
        })
        await page.goto('http://127.0.0.1:3000');
    });


    test.describe('theme', () => {
        test('If the theme in local storage === "light", it should display the dark icon', async ({ page }) => {
            expect(await page.evaluate(() => document.querySelector('#darkModeItem').classList.contains('hidden'))).toBe(true);
            expect(await page.evaluate(() => document.querySelector('#lightModeItem').classList.contains('flex'))).toBe(true);
        });
    });
});