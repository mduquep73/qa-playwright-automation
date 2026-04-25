import { test, expect } from '@playwright/test';

test('login exitoso', async ({ page }) => {
  // Navega a la página de login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Rellena el campo de usuario/email
  await page.fill('input[name="username"]', 'student');

  // Rellena el campo de contraseña
  await page.fill('input[name="password"]', 'Password123');

  // Hace clic en el botón de login
  await page.click('button#submit');

  // Espera a que cargue la página después del login
  await page.waitForURL('**/logged-in-successfully/');

  //await page.pause();

  // Verifica que aparece el mensaje de login exitoso
  await expect(page.locator('strong')).toContainText('Congratulations');
});

test('login fallido con credenciales incorrectas', async ({ page }) => {
  // Navega a la página de login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Rellena con credenciales incorrectas
  await page.fill('input[name="username"]', 'student');
  await page.fill('input[name="password"]', 'PasswordIncorrecto');

  // Hace clic en el botón de login
  await page.click('button#submit');

  // Verifica que aparece el mensaje de error
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
});
