import { Page } from "@playwright/test";

async function createTask(page: Page, listTask:string[]) {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  for (const element of listTask){
    await page.locator('.new-todo').fill(element);
    await page.locator('.new-todo').press("Enter");
  }
}

export {createTask};