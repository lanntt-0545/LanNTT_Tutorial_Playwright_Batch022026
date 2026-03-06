import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  page: Page;
  addToCartButton: Locator;
  removeToCartButton: Locator;
  cartIcon: Locator;


  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('.btn_primary.btn_inventory');
    this.removeToCartButton = page.locator('.btn_secondary.btn_inventory');
    this.cartIcon = page.locator('.shopping_cart_badge');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async addToCart(index: number) {
    await this.addToCartButton.nth(index).click();
  }

  async removeToCart(index: number) {
    await this.removeToCartButton.nth(index).click();
  }
  async getNumberProductInCart(): Promise<number> {
    if (await this.cartIcon.isVisible()) {
      const countText = await this.cartIcon.textContent();
      return countText ? parseInt(countText) : 0;
    }
    return 0;

  }
}
