import { expect } from '@playwright/test';
import test from '../pageObjects/pageFixtures'

test.describe('Dashboard Test cases @smoke', () => {

  //test.use({ baseURL: `https://live.browserstack.com/dashboard` });
  console.log('dashboard file- launching dashboard page');
  test.beforeEach(async ({ page }) => {
    await page.goto('https://live.browserstack.com/dashboard');

    await expect(page).toHaveTitle('Dashboard');
    console.log('dashboard file- launched dashboard page');
  });
  
  test('Launch Firefox latest version and verify if getting popup after plan expire', async ({ dashboardPage, page }) => {
    //await dashboardPage.setupPopUp();
    //await dashboardPage.clickOnLatestFirefoxVersion();
    //await expect(page.getByText('No Thanks')).toBeVisible();
    //await dashboardPage.clickOnNoThanksBtn();
  });

})
