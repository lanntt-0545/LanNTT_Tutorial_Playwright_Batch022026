import { test, expect } from '@playwright/test';
import login from './login.ts'

test('User can logout successfully', async ({ page }) => {
    await login(page, "standard_user", "secret_sauce")
    await page.locator('.bm-burger-button').click();
    await page.locator('#logout_sidebar_link').click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});

