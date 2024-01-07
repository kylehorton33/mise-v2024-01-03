// TODO: test content: connect to testing DB
import { expect, test } from '@playwright/test';

test('page test', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
    await expect(page.getByRole('listitem')).toHaveCount(1);
})