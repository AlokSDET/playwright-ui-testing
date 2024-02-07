import { test as poManager } from '@playwright/test';
import LoginPage  from '../pageObjects/pages/login.page'
import DashboardPage  from '../pageObjects/pages/dashboard.page'

const test = poManager.extend<{
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    }
});

export default test;