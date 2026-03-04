import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    //Add 6 task
    for (let i = 1; i < 7; i++) {
        await page.getByRole('textbox', { name: 'What needs to be done?' }).fill(`Task ${i}`);
        await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    }
    let itemTask = page.locator('li[data-testid="todo-item"]');
    await expect(itemTask).toHaveCount(6);

    //Mark as done task
    await page.getByRole('listitem').filter({ hasText: 'Task 1' }).getByLabel('Toggle Todo').check();
    await page.getByRole('listitem').filter({ hasText: 'Task 3' }).getByLabel('Toggle Todo').check();

    //Filter task 
    //By active
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(itemTask).toHaveCount(4);

    //By completed
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(itemTask).toHaveCount(2);

    //Clear completed task
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await expect(itemTask).toHaveCount(0);

    //Show all tasks
    await page.getByRole('link', { name: 'All' }).click();
    await expect(itemTask).toHaveCount(4);
});