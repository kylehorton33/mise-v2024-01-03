// TODO: tests with /auth
import { expect, test } from '@playwright/test';

test('user test', async ({ page }) => {
	await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
});