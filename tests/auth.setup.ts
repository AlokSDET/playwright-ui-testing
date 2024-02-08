import { test as setup, expect } from '@playwright/test';
import LoginPage from '../pageObjects/pages/login.page';
import ENV from '../utils/env';


const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    // let page = (await context).newPage();

    let loginPage = new LoginPage(page);
    await loginPage.loginBrowserStack(ENV.BASE_URL!, ENV.USER_NAME!, ENV.PASS_WORD!);
    await expect(page).toHaveTitle('Dashboard');
    // End of authentication steps.
    await page.context().storageState({ path: authFile });
    console.log(JSON.stringify(authFile));
});