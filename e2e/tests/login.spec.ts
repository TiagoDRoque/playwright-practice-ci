import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test('TC-001: Verify that a "Standard_user" can access the homepage', async ({ page }) => {
    await page.goto(process.env.BASE_URL as string);
    await page.fill('#user-name', process.env.STANDARD_USER as string);
    await page.fill('#password', process.env.PASSWORD as string);
    await page.click('#login-button');
    await page.waitForURL('https://www.saucedemo.com/inventory.html', { timeout: 10000 });
    const url = page.url();
    expect(url).toBe('https://www.saucedemo.com/inventory.html')
});

test('TC-002: Verify that a "Locked_out_user" cannot access the homepage', async ({ page }) => {
    await page.goto(process.env.BASE_URL as string);
    await page.fill('#user-name', process.env.LOCKED_OUT_USER as string);
    await page.fill('#password', process.env.PASSWORD as string);
    await page.click('#login-button');
    await page.waitForSelector('.error-button', { timeout: 10000 });
    const errorButton = await page.isVisible('.error-button');
    expect(errorButton).toBeTruthy();
});
test('TC-003: Verify that a "Problem_user" can access the homepage', async ({ page }) => {
    await page.goto(process.env.BASE_URL as string);
    await page.fill('#user-name', process.env.PROBLEM_USER as string);
    await page.fill('#password', process.env.PASSWORD as string);
    await page.click('#login-button');
    await page.waitForURL('https://www.saucedemo.com/inventory.html', { timeout: 10000 });
    const url = page.url();
    expect(url).toBe('https://www.saucedemo.com/inventory.html')
});
test('TC-004: Verify that a "Performance_glitch_user" can access the homepage', async ({ page }) => {
    await page.goto(process.env.BASE_URL as string);
    await page.fill('#user-name', process.env.PERFORMANCE_GLITCH_USER as string);
    await page.fill('#password', process.env.PASSWORD as string);
    await page.click('#login-button');
    await page.waitForURL('https://www.saucedemo.com/inventory.html', { timeout: 10000 });
    const url = page.url();
    expect(url).toBe('https://www.saucedemo.com/inventory.html')
});