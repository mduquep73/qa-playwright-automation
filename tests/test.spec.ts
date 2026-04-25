import { test } from '@playwright/test';
import { PlaywrightDocsPage } from '../pages/playwrightDocs.page';

test.describe('Playwright Docs navigation', () => {
  test('usuario navega a configuración de Playwright desde documentación', async ({ page }) => {
    const docs = new PlaywrightDocsPage(page);

    await docs.open();
    await docs.goToGetStarted();
    await docs.openInstallGuide();
    await docs.openConfigFile();

    await docs.expectConfigPage();
  });
});