import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  // /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // use: {
  //   /* Base URL to use in actions like `await page.goto('')`. */
  //   // baseURL: 'http://localhost:3000',

  //   /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  //   trace: 'on-first-retry',
  // },
  reporter: [
    ['list'],                                      // Hiển thị tiến độ trên Terminal

    ['html', {
      outputFolder: 'playwright-report',         // Xuất báo cáo HTML ra thư mục này
      open: 'never'                              // KHÔNG tự bật trình duyệt sau khi test
    }],

    ['json', { outputFile: 'report.json' }]        // Xuất file JSON cho CI/CD
  ],

  // 2. CẤU HÌNH MEDIA (Bằng chứng lỗi)
  use: {
    // Chỉ chụp ảnh màn hình khi Test Fail
    screenshot: 'only-on-failure',

    // Chỉ giữ lại video quay màn hình khi Test Fail (Tiết kiệm dung lượng)
    video: 'retain-on-failure',
  },


  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ }, // Chạy file setup trước
    {
      name: 'standard-user-tests',
      testMatch: /testcases\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/standard_user.json',
      },
      dependencies: ['setup'],
    },

    // {
    //   name: 'problem-user-tests',
    //   testMatch: /testcases\/.*\.spec\.ts/,
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'playwright/.auth/problem_user.json',
    //   },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'performance-glitch-user-tests',
    //   testMatch: /testcases\/.*\.spec\.ts/,
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'playwright/.auth/performance_glitch_user.json',
    //   },
    //   dependencies: ['setup'],
    // },

    // {
    //   name: 'error-user-tests',
    //   testMatch: /testcases\/.*\.spec\.ts/,
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'playwright/.auth/error_user.json',
    //   },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'visual-user-tests',
    //   testMatch: /testcases\/.*\.spec\.ts/,
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'playwright/.auth/visual_user.json',
    //   },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     // Ép mọi test dùng file trạng thái này
    //     storageState: 'playwright/.auth/user.json',
    //   },
    //   dependencies: ['setup'], // Chỉ chạy khi 'setup' thành công
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'],  storageState: 'playwright/.auth/user.json', 
    //   },
    //   dependencies: ['setup'], // Chỉ chạy khi 'setup' thành côn
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'],  storageState: 'playwright/.auth/user.json', 
    //   },
    //   dependencies: ['setup'], // Chỉ chạy khi 'setup' thành côn
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
