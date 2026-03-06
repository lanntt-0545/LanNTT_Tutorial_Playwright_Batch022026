import { Page, test as setup } from '@playwright/test';
import { Login } from '../pages/Login';
import path from 'path';
import fs from 'fs';

const authPath = 'playwright/.auth/';

function createFile(authFile: string) {
  const authDir = path.dirname(authFile);
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }
}

async function callLoginFuction(page: Page, username: string, password: string) {
  const login = new Login(page);

  await login.goto();
  await login.login(username, password);
}

setup('login for standard_user', async ({ page }) => {
  const authFile = path.join(authPath, 'standard_user.json');
  createFile(authFile);
  await callLoginFuction(page, 'standard_user', 'secret_sauce');

  // Đợi cho đến khi vào được trang Inventory
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // Lưu trạng thái vào file JSON
  await page.context().storageState({ path: authFile });
});

/* setup('login for problem_user', async ({ page }) => {
  const authFile = path.join(authPath, 'problem_user.json');
  createFile(authFile);
  await callLoginFuction(page, 'problem_user', 'secret_sauce');
  // Lưu trạng thái vào file JSON
  await page.context().storageState({ path: authFile });
});

setup('login for performance_glitch_user', async ({ page }) => {
  const authFile = path.join(authPath, 'performance_glitch_user.json');
  createFile(authFile);
  await callLoginFuction(page, 'performance_glitch_user', 'secret_sauce');
  // Lưu trạng thái vào file JSON
  await page.context().storageState({ path: authFile });
});

setup('login for error_user', async ({ page }) => {
  const authFile = path.join(authPath, 'error_user.json');
  createFile(authFile);
  await callLoginFuction(page, 'error_user', 'secret_sauce');
  // Lưu trạng thái vào file JSON
  await page.context().storageState({ path: authFile });
});

setup('login for visual_user', async ({ page }) => {
  const authFile = path.join(authPath, 'visual_user.json');
  createFile(authFile);
  await callLoginFuction(page, 'visual_user', 'secret_sauce');
  // Lưu trạng thái vào file JSON
  await page.context().storageState({ path: authFile });
});
*/