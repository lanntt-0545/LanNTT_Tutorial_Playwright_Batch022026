import { test, expect, Page } from '@playwright/test';

async function login (page: Page, userName: string, password: string):Promise<void>{
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill(userName);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();
}

export default login;
