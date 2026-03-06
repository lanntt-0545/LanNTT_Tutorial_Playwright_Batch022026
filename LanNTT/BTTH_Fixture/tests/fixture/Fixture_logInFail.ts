import { test as base, expect } from '@playwright/test';
import { Login } from '../pages/Login';

type LoginFailFixtures = {
  wrongPassMessage: string;
  lockedUserMessage: string;
};

export const test = base.extend<LoginFailFixtures>({
  // Xóa bỏ storageState cho tất cả các fixture trong file này
  storageState: { cookies: [], origins: [] },

  wrongPassMessage: async ({ page }, use) => {
    const loginPage = new Login(page);
    await loginPage.goto();
    await loginPage.login('standard_user', '123456'); 
    const message = await loginPage.erroMessage.innerText(); 
    await use(message);
  },

  lockedUserMessage: async ({ page }, use) => {
    const loginPage = new Login(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    const message = await loginPage.erroMessage.innerText();
    await use(message);
  },
});

export { expect };