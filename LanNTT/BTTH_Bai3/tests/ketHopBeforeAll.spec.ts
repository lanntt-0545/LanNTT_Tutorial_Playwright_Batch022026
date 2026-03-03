import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeAll(async () => {
    console.log('Bat dau chay nhom test')
  });
  

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto(); 
    await loginPage.login('standard_user', 'secret_sauce');
  });

    test.afterAll(async () => {
    console.log('Ket thuc nhom test')
  });

   test.afterEach(async ({ page }, testInfo) => {
    if(testInfo.status !== testInfo.expectedStatus){
        console.log('Chụp screenshot nếu test fail');
        await page.screenshot();
        await loginPage.logout();
    }
  });

   test('Login successfully_Check first product price', async ({ page }) => {
    const product = page.locator('.inventory_item_price').first();
    await expect(product).toHaveText('$29.99');
  });

    test('Login successfully_Check first product image', async ({ page }) => {
    const product = page.locator('.inventory_item_img img').first();
    await expect(product).toHaveAttribute('src','/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg');
  });
});
