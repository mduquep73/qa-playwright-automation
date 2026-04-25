import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDocsPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly installGuideLink: Locator;
  readonly configLink: Locator;
  readonly baseUrl = 'https://playwright.dev/';

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = this.page.getByRole('link', { name: 'Get started' });
    this.installGuideLink = this.page.getByRole('link', { name: 'How to install Playwright' });
    this.configLink = this.page.getByRole('link', { name: 'playwright.config' });
  }

  async open() {
    await this.page.goto(this.baseUrl, { waitUntil: 'domcontentloaded' });
    await expect(this.getStartedLink).toBeVisible();
  }

  async goToGetStarted() {
    await this.getStartedLink.click();
    await expect(this.installGuideLink).toBeVisible();
  }

  async openInstallGuide() {
    await this.installGuideLink.click();
    await expect(this.configLink.first()).toBeVisible();
  }

  async openConfigFile() {
    await this.configLink.first().click();
  }

  async expectConfigPage() {
    await expect(this.page).toHaveURL(
  "https://playwright.dev/docs/test-configuration");
  }
}