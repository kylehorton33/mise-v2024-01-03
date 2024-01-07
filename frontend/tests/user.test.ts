import { expect, test } from '@playwright/test';

test('test login works', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('login-link').click();
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').fill('user@example.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByTestId('account-link').click();
    await expect(page.getByText('Email: user@example.com')).toBeVisible();
  });