import { test, expect } from '@playwright/test';

test('la page d\'accueil correspond au snapshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('accueil.png', { fullPage: true });
});
