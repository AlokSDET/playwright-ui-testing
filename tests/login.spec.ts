import { expect } from '@playwright/test';
import test from '../pageObjects/pageFixtures'
import ENV from '../utils/env';
/*
test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

*/

test.describe('Browser Stack login @login', () => {
  test.beforeEach(async ({ page }) => {
    console.log(ENV.BASE_URL, ENV.USER_NAME , ENV.PASS_WORD);
    await page.goto(ENV.BASE_URL!);
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Most Reliable App & Cross Browser Testing Platform | BrowserStack');
    console.log('login successfull');
  });


// test('verify browserstack login', async ({ loginPage, page }) => {
//     await loginPage.loginBrowserStack(ENV.BASE_URL!, ENV.USER_NAME!, ENV.PASS_WORD!);
//     await page.waitForURL('**/dashboard**');
//     //expect( await loginPage.isDashboardVisible()).toBe(true);
//     await expect(page).toHaveTitle('Dashboard');
//   });

  test('verify browserstack login', async ({ loginPage, page }) => {
    await loginPage.loginBrowserStack(ENV.BASE_URL!, ENV.USER_NAME!, ENV.PASS_WORD!);
    await page.waitForURL('**/dashboard**');
    expect( await loginPage.isDashboardVisible()).toBe(true);
    await expect(page).toHaveTitle('Dashboard');
  });

})
