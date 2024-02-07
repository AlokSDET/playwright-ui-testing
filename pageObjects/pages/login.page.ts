import {Locator,  Page } from "playwright/test";

export default class LoginPage {

    private readonly page:Page;
    private readonly HEADER_BTN_SIGN_IN: Locator ;
    private readonly BUISNESS_EMAIL :Locator ;
    private readonly PASSWORD: Locator;
    private readonly BTN_SIGN_IN : Locator;
    private readonly DASHBOARD: Locator;

    constructor(page: Page){
        this.page= page;
        this.HEADER_BTN_SIGN_IN = this.page.locator('//a[@aria-label="Sign in"]');
        this.BUISNESS_EMAIL = this.page.locator('//input[@name="user[login]"]');
        this.PASSWORD = this.page.locator('//input[@name="user[password]"]')
        this.BTN_SIGN_IN = this.page.locator("#user_submit");
        this.DASHBOARD = this.page.getByTitle('dashboard');
    }


    async loginBrowserStack(url: string, username: string, password:string): Promise<void> {
        await this.page.goto(url);
        await this.HEADER_BTN_SIGN_IN.click();
        await this.BUISNESS_EMAIL.fill(username);
        await this.PASSWORD.fill(password);
        await this.BTN_SIGN_IN.click();
        await this.page.waitForURL('**/dashboard**');
    }

    async isDashboardVisible(): Promise<boolean> {
       return  await this.DASHBOARD.isVisible();
    }

}