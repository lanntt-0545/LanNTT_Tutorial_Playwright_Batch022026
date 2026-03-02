import { test, expect } from '@playwright/test';
import { createTask } from './create_task';

/*
Trang test: TodoMVC
Kịch bản:
Thêm 3 công việc: Task A, Task B, Task C
Đánh dấu hoàn thành công việc thứ 2 (dùng .nth(1))
Kiểm tra công việc đầu tiên là Task A (dùng .first())
Tìm công việc có nội dung “Task C” (Dùng .filter(), di chuột vào (hover) và xóa nó.

*/
const listTask: string[] =  ["Task A"," Task B", "Task C"]
test('user can create task successfully', async ({ page }) => {
    await createTask (page,listTask);
  // Expect a title "to contain" a substring.
  await expect(page.locator('.todo-list li').first()).toHaveText(/Task A/);
  await expect(page.locator('.todo-list li').nth(1)).toHaveText(/Task B/);
  await expect(page.locator('.todo-list li').last()).toHaveText(/Task C/);
});

test('user can mark done task', async ({ page }) => {
await createTask (page,listTask);
  await page.locator('.todo-list li').nth(1).locator('.toggle').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('.todo-list li').nth(1).locator('label')).toBeVisible();
});

test('user can delete task', async ({ page }) => {
await createTask (page,listTask);
const taskC = page.locator('.todo-list li').filter({hasText: "Task C"});
  await taskC.hover();
  await taskC.locator('.destroy').click();

  // Expects page to have a heading with the name of Installation.
  await expect(taskC).not.toBeVisible();
});

