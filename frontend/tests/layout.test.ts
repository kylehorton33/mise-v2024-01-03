import { expect, test } from '@playwright/test';

test('home page is recipes', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
});

// TODO: test sidebar and footer display on different size windows
test('sidebar renders on larger screens', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('sidebar')).toBeVisible();
	await expect(page.getByTestId('footer')).not.toBeVisible();
});

test.describe('mobile size', () => {
	test.use({ viewport: { width: 350, height: 700 } });

	test('footer renders', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByTestId('sidebar')).not.toBeVisible();
		await expect(page.getByTestId('footer')).toBeVisible();
	});
});


test('navigation links work', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Ingredients' }).click();
	await expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
	await page.getByRole('link', { name: 'Recipes' }).click();
	await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
	const githubPromise = page.waitForEvent('popup');
	await page.getByRole('link', { name: 'About' }).click();
	const githubPage = await githubPromise;
	await expect(githubPage.getByRole('link', { name: 'misebar', exact: true })).toBeVisible();
	await page.getByTestId('login-link').click();
	await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
	await page.getByRole('link', { name: 'Register' }).click();
	await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

})

test('expected routes exist', async ({ page }) => {
	await page.goto('/ingredients');
	await expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
	await page.goto('/recipes');
	await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
	await page.goto('/auth/login');
	await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
	await page.goto('/auth/register');
	await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
});