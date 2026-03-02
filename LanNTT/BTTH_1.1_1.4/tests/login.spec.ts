import { test, expect } from '@playwright/test';

test('user can login successfully', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.locator('input[name="login"]').fill("UserName4");
  await page.locator('input[name="password"]').fill("PasswordTest@1");
  page.getByRole('button', { name: "Login" }).click(); 

  // Expect login successfully
  await expect(page.getByRole('link',{name: "Profile"})).toBeVisible(); 
  await expect(page.getByRole('link',{name: "Logout"})).toBeVisible();  
});

