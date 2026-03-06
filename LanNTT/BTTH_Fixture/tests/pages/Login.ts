import { Page, Locator, expect } from '@playwright/test';

export class Login {
    page: Page;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    menuButton: Locator;
    logoutButton: Locator;
    erroMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link')
        this.erroMessage = page.locator('.error-message-container')
    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutButton.click();
    }

}