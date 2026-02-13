import { test, expect } from '@playwright/test';

test('user can register', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

  // Input form
  await page.fill('#username', 'Lan');
  await page.fill('#email', 'ngo.thi.thuy.lan@sun-asterisk.com');
  await page.check('#female');
  await page.check('#reading');
  await page.selectOption('#interests','science');
  await page.selectOption('#country','Canada');
  await page.fill('#dob', '1994-02-20');

    // Expects radio button and checkbox is checked
  await expect(page.locator('#female')).toBeChecked();
  await expect(page.locator('#reading')).toBeChecked();

  // Click button register
  await page.locator('button[type="submit"]').click();
  
  //Expects create user successfully
  await expect(page.locator("//table[@id='userTable']//tr[1]/td[2]")).toHaveText("Lan");
  await expect(page.locator("//table[@id='userTable']//tr[1]/td[3]")).toHaveText("ngo.thi.thuy.lan@sun-asterisk.com");

});
