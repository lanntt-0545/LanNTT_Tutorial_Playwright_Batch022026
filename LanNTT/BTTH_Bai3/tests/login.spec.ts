import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto(); 
    await loginPage.login('standard_user', 'secret_sauce');
  });
   test.afterEach(async ({ page }, testInfo) => {
    if(testInfo.status !== testInfo.expectedStatus){
        console.log('Chụp screenshot nếu test fail');
        await page.screenshot();
        await loginPage.logout();
    }
  });

   test('Login successfully_Check URL', async ({ page }) => {
    await expect(page).toHaveURL(/.*inventory/);
  });

  test('Login successfully_Check first product name ', async ({ page }) => {
    const firstProduct = page.locator('.inventory_item_name').first();
    await expect(firstProduct).toHaveText('Sauce Labs Backpack')
  });
});
