import { test, expect } from '@playwright/test';
import register from './register';

test('user can see register form', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');

  // Expect display form register
  await expect(page.locator('h2')).toHaveText("Register with Buggy Cars Rating");
  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('#firstName')).toBeVisible();
  await expect(page.locator('#lastName')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#confirmPassword')).toBeVisible();
  await expect(page.getByRole('button',{name: "Register"})).toBeDisabled();
  await expect(page.getByRole('button',{name: "Cancel"})).toBeVisible();
});

test('user can register successfully', async ({ page }) => {
    await register(page,"UserName28","firstName","lastName", "PasswordTest@1");
  // Expect register successfully
  await expect(page.locator('.alert-success')).toHaveText("Registration is successful");  
});

test('user register unsuccessfully_not unique username', async ({ page }) => {
    await register(page,"UserName10","firstName","lastName", "PasswordTest@1");
  // Expect register successfully
  await expect(page.locator('.result.alert.alert-danger')).toHaveText("UsernameExistsException: User already exists");  
});

test('user register unsuccessfully_invalid password_length less than 6', async ({ page }) => {
    await register(page,"UserName11","firstName","lastName", "Pas@1");
  // Expect register successfully
  await expect(page.locator('.result.alert.alert-danger')).toHaveText("InvalidParameter: 1 validation error(s) found. - minimum field size of 6, SignUpInput.Password.");  
});

test('user register unsuccessfully_invalid password_not have lowercase', async ({ page }) => {
    await register(page,"UserName12","firstName","lastName", "PASSSWORD@1");
  // Expect register successfully
  await expect(page.locator('.result.alert.alert-danger')).toHaveText("InvalidPasswordException: Password did not conform with policy: Password must have lowercase characters");  
});

test('user register unsuccessfully_invalid password_not have uppercase', async ({ page }) => {
    await register(page,"UserName13","firstName","lastName", "password@1");
  // Expect register successfully
  await expect(page.locator('.result.alert.alert-danger')).toHaveText("InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters");  
});

test('user register unsuccessfully_invalid password_not have special characters', async ({ page }) => {
    await register(page,"UserName14","firstName","lastName", "Password1");
  // Expect register successfully
  await expect(page.locator('.result.alert.alert-danger')).toHaveText("InvalidPasswordException: Password did not conform with policy: Password must have symbol characters");  
});

test('user register unsuccessfully_invalid password_not have number', async ({ page }) => {
    await register(page,"UserName15","firstName","lastName", "Password@");
  // Expect register successfully
  await expect(page.locator('.result.alert.alert-danger')).toHaveText("InvalidPasswordException: Password did not conform with policy: Password must have numeric characters");  
});
