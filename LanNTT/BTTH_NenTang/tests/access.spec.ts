import { test, expect } from '@playwright/test';

test('user can search with google search', async ({ page }) => {
 // 1. Truy cập trang
 await page.goto('https://www.w3schools.com/');

 // 2. Nhập thông tin search
 await page.fill('#tnb-google-search-input', 'HTML');

 // 3. Click nút search
 await page.click('#tnb-google-search-submit-btn');

 // 4. Verify
 // đăng nhập thành công bằng cách kiểm tra URL
 await expect(page).toHaveURL('https://www.w3schools.com/#gsc.tab=0&gsc.q=HTML');
  // hiển thị trang kết quả tìm kiểm
// await
//  expect(page.locator('.title')).toHaveText('Products');
});
