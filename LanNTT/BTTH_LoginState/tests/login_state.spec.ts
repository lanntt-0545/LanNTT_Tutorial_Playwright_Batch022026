import { expect, test } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Truy cập dashboard sau khi login sẵn', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page.getByText('Swag Labs')).toBeVisible();

});