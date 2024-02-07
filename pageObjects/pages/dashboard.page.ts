import {Locator,  Page } from "playwright/test";

export default class DashboardPage {

    private readonly page:Page;
    private readonly HEADER_BTN_SIGN_IN: Locator ;
    private readonly FIREFOX_LATEST_VERSION: Locator;
    private readonly NO_THANKS: Locator;
    private readonly NEXT: Locator;
    private readonly GOT_IT: Locator;

    constructor(page: Page){
        this.page= page;
        this.HEADER_BTN_SIGN_IN = this.page.locator('//a[@aria-label="Sign in"]');
        this.FIREFOX_LATEST_VERSION = this.page.locator('//div[@data-row-index=0 and @data-browser-type="firefox"]');
        this.NO_THANKS = this.page.getByText("No Thanks");
        this.NEXT = this.page.getByText("Next");
        this.GOT_IT = this.page.getByText("Got it!");
    }


    async clickOnLatestFirefoxVersion()  {
        await this.FIREFOX_LATEST_VERSION.click();
    }

    async clickOnNoThanksBtn()  {
        await this.NO_THANKS.click();
    }

    async setupPopUp(){
        await this.NEXT.click();
        await this.GOT_IT.click();
    }

}