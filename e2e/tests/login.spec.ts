import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('TC-001:Verify that a "Standard_user" can access the homepage', async ({ page }) => {
    await page.goto(process.env.BASE_URL as string);
    await page.fill('input[name="user-name"]', process.env.STANDARD_USER as string);
    await page.fill('input[name="password"]', process.env.PASSWORD as string);
    await page.click('input[type="submit"]');
    const url = page.url();
    expect(url).toBe('https://www.saucedemo.com/inventory.html');
});