import { test as base, Page } from '@playwright/test';

type LoginFixture = {
  loggedInPage: Page;
};

export const test = base.extend<LoginFixture>({
  loggedInPage: async ({ page }, use) => {
    // Vì đã có storageState, ta chỉ cần điều hướng thẳng đến trang inventory
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Đảm bảo trang đã load xong các item
    await page.waitForSelector('.inventory_list');

    // "Trao" page cho test case
    await use(page);
  },
});

export { expect } from '@playwright/test';