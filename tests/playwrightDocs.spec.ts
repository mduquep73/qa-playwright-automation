import { Page } from '@playwright/test';

export class PlaywrightDocsPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://playwright.dev/');
  }

  async goToGetStarted() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
  }

  async openInstallGuide() {
    await this.page.getByRole('link', { name: 'How to install Playwright' }).click();
  }

  async openConfigFile() {
    await this.page.getByRole('link', { name: 'playwright.config' }).first().click();
  }
}