import { Page } from "@playwright/test";

async function register(page: Page, username: string, firstname: string, lastname: string, password: string): Promise <void>{
  await page.goto('https://buggy.justtestit.org/register');
  await page.locator('#username').fill(username);
  await page.locator('#firstName').fill(firstname);
  await page.locator('#lastName').fill(lastname);
  await page.locator('#password').fill(password);
  await page.locator('#confirmPassword').fill(password);
  await page.getByRole('button', { name: "Register" }).click(); 
}

export default register;