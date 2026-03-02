import { test, expect } from '@playwright/test';
import login from './login.ts'

test('User cannot login successfully_ Wrong password', async ({ page }) => {
    await login(page, "standard_user", "secret_sauce1")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("https://www.saucedemo.com/")
  await expect(page.locator('h3')).toHaveText("Epic sadface: Username and password do not match any user in this service");
});

test('User cannot login successfully_ Empty userName', async ({ page }) => {
    await login(page, "", "secret_sauce")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("https://www.saucedemo.com/")
  await expect(page.locator("h3")).toHaveText("Epic sadface: Username is required");
});

test('User cannot login successfully_ Locked user', async ({ page }) => {
    await login(page, "locked_out_user", "secret_sauce")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("https://www.saucedemo.com/")
  await expect(page.locator("h3")).toHaveText("Epic sadface: Sorry, this user has been locked out.");
});

