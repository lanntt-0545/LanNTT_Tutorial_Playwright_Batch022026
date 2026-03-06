import { expect } from '@playwright/test';
import { test as LogInSuccess } from '../fixture/Fixture_loggedInPage';
import { Login } from '../pages/Login';
import { test as LogInFail} from '../fixture/Fixture_logInFail';

LogInSuccess('Login success', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/inventory/);
});

LogInFail('Login fail - Wrong password', async ({ wrongPassMessage }) => {
  // wrongPassMessage lúc này đã là cái String chứa thông báo lỗi rồi
  expect(wrongPassMessage).toBe('Epic sadface: Username and password do not match any user in this service');
});

LogInFail('Login fail - Lock user', async ({ lockedUserMessage }) => {
  expect(lockedUserMessage).toBe('Epic sadface: Sorry, this user has been locked out.');
});