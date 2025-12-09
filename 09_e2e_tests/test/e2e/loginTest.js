
// Playwright E2E teszt – belépési folyamat
const { test, expect } = require('@playwright/test');

test('Login flow', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', '1234');
    await page.click('#loginButton');
    await expect(page).toHaveURL('http://localhost:3000/dashboard');
});
