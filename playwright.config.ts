import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Ejecutar tests en paralelo
  fullyParallel: true,

  // Evita subir test.only por error en CI
  forbidOnly: !!process.env.CI,

  // Reintentos solo en CI
  retries: process.env.CI ? 2 : 0,

  // Un solo worker en CI (más estable)
  workers: process.env.CI ? 1 : undefined,

  // Reporte visual HTML
  reporter: [['html', { open: 'never' }]],

  // 👇 CONFIGURACIÓN CLAVE (evidencias)
  use: {
    screenshot: 'only-on-failure',   // 📸 captura si falla
    video: 'retain-on-failure',      // 🎥 guarda video si falla
    trace: 'retain-on-failure',      // 🔍 guarda trace completo
  },
  // Navegadores donde correrán los tests
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});