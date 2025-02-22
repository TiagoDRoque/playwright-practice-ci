import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test('TC-001: Verify that a "Standard_user" can access the homepage', async ({ page }) => {

    await page.goto(process.env.BASE_URL as string);
    await page.fill('#user-name', process.env.STANDARD_USER as string);
    await page.fill('#password', process.env.PASSWORD as string);
    await page.click('#login-button');
    await page.waitForURL('**/inventory.html', { timeout: 10000 });
    const url = page.url();
    expect(url).toBe('***/inventory.html')
});
