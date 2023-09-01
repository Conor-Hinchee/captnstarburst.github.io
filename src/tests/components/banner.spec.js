import { test, expect } from '@playwright/test';

test.describe('banner component', () => {

    test.describe('If the theme in local storage === "light",', () => {
        test.beforeEach(async ({ page }) => {
            await page.addInitScript(() => {
                window.localStorage.setItem('theme', 'light');
            });
            await page.goto('http://127.0.0.1:3000');
        });

        test('It should display the dark icon', async ({ page }) => {
            expect(await page.isVisible('#darkModeItem')).toBe(true);
            expect(await page.isVisible('#lightModeItem')).toBe(false);
        });

        // test('It should change the theme to dark when clicking the dark-mode button', async({page}) => {
        //     await page.isVisible('#darkModeItem');
        //     // page.getBy.click()
        //     page.getByRole('button', { name: 'Switch site to dark-mode' }).click();

        // });
    });

    test.describe('If the theme in local storage === "dark",', () => {
        test.beforeEach(async ({ page }) => {
            await page.addInitScript(() => {
                window.localStorage.setItem('theme', 'dark');
            });
            await page.goto('http://127.0.0.1:3000');
        });

        test('It should display the light icon', async ({ page }) => {
            expect(await page.isVisible('#darkModeItem')).toBe(false);
            expect(await page.isVisible('#lightModeItem')).toBe(true);
        });
    });
});