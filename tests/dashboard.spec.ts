import { expect } from '@playwright/test';
import test  from '../pageObjects/pageFixtures'

test.describe('Dashboard Test cases @smoke', () => {

  //test.use({ baseURL: `https://live.browserstack.com/dashboard` });
  console.log('dashboard file- launching dashboard page');
  test.beforeEach(async ({ page, dashboardPage }) => {
    await page.goto('https://live.browserstack.com/dashboard');
//dashboardPage.clickOnLatestFirefoxVersion();
    await expect(page).toHaveTitle('Dashboard');
    console.log('dashboard file- launched dashboard page1');
  });
  
  test('Launch Firefox latest version and verify if getting popup after plan expire @regression', async ({ dashboardPage, page }) => {
    
    await expect(page).toHaveTitle('Dashboard');
    console.log('dashboard file- launched dashboard page2');
    //await dashboardPage.setupPopUp();
    //await dashboardPage.clickOnLatestFirefoxVersion();
    //await expect(page.getByText('No Thanks')).toBeVisible();
    //await dashboardPage.clickOnNoThanksBtn();
  });

})
