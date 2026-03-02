import { test, expect } from '@playwright/test';
import login from './login.ts'

test('User can buy product successfully', async ({ page }) => {
    await login(page, "standard_user", "secret_sauce")
    
    page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText("1");
   
    page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText("2");

});

