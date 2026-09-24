import { test, expect } from '@playwright/test';

test('la page affiche le titre du site', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/pilote-web/);
});

test('le compteur s\'incrémente au clic', async ({ page }) => {
  await page.goto('/');
  const bouton = page.getByRole('button');
  await expect(bouton).toContainText('compteur : 0');
  await bouton.click();
  await expect(bouton).toContainText('compteur : 1');
});