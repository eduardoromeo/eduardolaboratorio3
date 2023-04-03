import { test, expect } from '@playwright/test';

test('test radiobutton', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    const SO1 = 'Windows';
    const SO2 = 'Macos';
    const SO3 = 'Linux';
    const eleccion = SO3;
    await page.locator(`//input[@id='${eleccion}']`).check();
});