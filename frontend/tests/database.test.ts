import { expect, test } from '@playwright/test';

test('expected content is visible', async ({ page }) => {
    await page.goto('/ingredients')
    await expect(page.getByRole('listitem')).toHaveCount(3);
    await page.goto('/recipes')
    await expect(page.getByRole('listitem')).toHaveCount(1);
})