import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  page: Page;
  continueShopping: Locator;
  checkOut: Locator;
  ItemListName: Locator;
  removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueShopping = page.locator('#continue-shopping');
    this.checkOut = page.locator('#checkout');
    this.ItemListName = page.locator('.inventory_item_name')
    this.removeButton = page.locator('.cart_button')
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }

  async goToInventoryPage() {
    await this.continueShopping.click();
  }

  async goToCheckoutPage() {
    await this.checkOut.click();
  }

  async removeItemFromCart(index: number) {
    await this.removeButton.nth(index).click();
  }

}
