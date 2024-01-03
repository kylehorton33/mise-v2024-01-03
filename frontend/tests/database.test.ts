// TODO: test content: connect to testing DB
import { expect, test } from '@playwright/test';

test('db test', async ({ page }) => {
	await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
});