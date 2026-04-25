import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.getByRole('link', { name: 'Learn more' }).click();
  await page.getByRole('link', { name: 'Domains', exact: true }).click();
  await page.getByRole('link', { name: 'The DNS Root Zone' }).click();
});