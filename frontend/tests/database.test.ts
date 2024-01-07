import { expect, test } from '@playwright/test';
import dotenv from 'dotenv'
import Pocketbase from 'pocketbase'
import { clearDB } from './db';

// FIXME: Pockethost DB cannot handle rapid requests. Replace with a local PocketBase and make Pockethost
// the default DB for staging/preview environment
dotenv.config({ path: '.env.test' })
const { VITE_POCKETBASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env

const pb = new Pocketbase(VITE_POCKETBASE_URL)
await pb.admins.authWithPassword(ADMIN_EMAIL as string, ADMIN_PASSWORD as string);

test.beforeAll('start with empty DB', async () => {
    await clearDB(pb)
});

test.afterAll('end with empty DB', async () => {
    await clearDB(pb)
});

test('database is empty', async ({ page }) => {
    await page.goto('/ingredients')
    await expect(page.getByRole('listitem')).toHaveCount(0);
    await page.goto('/recipes')
    await expect(page.getByRole('listitem')).toHaveCount(0);
})

test.describe('guest credentials', () => {
    test('create ingredient not allowed', async ({ page }) => {
        await page.goto('/ingredients');
        await page.getByRole('button', { name: 'Add new ingredient' }).click();
        await expect(page.getByText('You must be logged in to add')).toBeVisible();
    });
  
    test('create recipe not allowed', async ({ page }) => {
        await page.goto('/recipes');
        await page.getByRole('button', { name: 'Add new recipe' }).click();
        await expect(page.getByText('You must be logged in to add')).toBeVisible();
    });
  });