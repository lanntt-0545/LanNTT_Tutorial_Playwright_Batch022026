import { test, expect } from '@playwright/test';
import login from './login.ts'

test('User can login successfully', async ({ page }) => {
    await login(page, "standard_user", "secret_sauce")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

