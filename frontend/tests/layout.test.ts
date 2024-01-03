import { expect, test } from '@playwright/test';

test('home page is recipes', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
});

// TODO: test sidebar and footer display on different size windows

// TODO: test nav links direct to correct pages

// TODO: test routes exist