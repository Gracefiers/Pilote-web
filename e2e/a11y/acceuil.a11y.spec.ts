import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('la page d\'accueil ne viole aucune règle WCAG critique', async ({ page }) => {
  await page.goto('/');

  const résultats = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  expect(résultats.violations, JSON.stringify(résultats.violations, null, 2)).toEqual([]);
});