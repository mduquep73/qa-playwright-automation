import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page.getByRole('link', { name: 'How to install Playwright' })).toBeVisible();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();

  await expect(page.getByRole('link', { name: 'playwright.config' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'playwright.config' }).first().click();
});