import { test as setup, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    // Tạo thư mục auth nếu chưa có
    const authDir = path.dirname(authFile);
    if (!fs.existsSync(authDir)) {
        fs.mkdirSync(authDir, { recursive: true });
    }


    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    //Verify login successfully
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Swag Labs')).toBeVisible();

    //Save login state
    await page.context().storageState({ path: authFile });

}
);