import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Nhom A', () => {
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

  test('Login successfully_Check number of displayed product', async ({ page }) => {
    const product = page.locator('.inventory_item_name');
    await expect(product).toHaveCount(6);
  });

    test('Login successfully_Check last product name', async ({ page }) => {
    const product = page.locator('.inventory_item_name').last();
    await expect(product).toHaveText('Test.allTheThings() T-Shirt (Red)');
  });
});

test.describe('Nhom B', () => {
  let loginPage: LoginPage;
  let inventoryPage : InventoryPage;
  let numberProductInCart: number;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto(); 
    await loginPage.login('standard_user', 'secret_sauce');
    inventoryPage = new InventoryPage(page);
    numberProductInCart = await inventoryPage.getNumberProductInCart();
    await inventoryPage.addToCart(1);
  });
   test.afterEach(async ({ page }, testInfo) => {
    if(testInfo.status !== testInfo.expectedStatus){
        console.log('🔹 Sau mỗi test: chụp screenshot nếu test fail');
        await page.screenshot();
        await loginPage.logout();
    }
  });

   test('check number in icon cart', async ({ page }) => {
    const newNumberProductInCart = await inventoryPage.getNumberProductInCart();
    await expect(newNumberProductInCart).toBe(numberProductInCart+1);
  });

  test('Login successfully_Check number of button remove to cart', async ({ page }) => {
    await expect(inventoryPage.removeToCartButton).toHaveCount(numberProductInCart+1);
  });
});