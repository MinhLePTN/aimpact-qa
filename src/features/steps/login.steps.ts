import { Given, When, Then } from '@playwright-bdd/step-definitions';
import { LoginPage } from '../../pages/login.page';
import { expect } from '@playwright/test';

let loginPage: LoginPage;

Given('I am on the login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('I enter valid username and password', async () => {
  await loginPage.login(process.env.VALID_USERNAME!, process.env.VALID_PASSWORD!);
});

When('I enter invalid username and password', async () => {
  await loginPage.login('invalid_user', 'invalid_password');
});

Then('I should be redirected to the dashboard', async ({ page }) => {
  await expect(page).toHaveURL(/.*dashboard/);
});

Then('I should see an error message', async () => {
  await expect(loginPage.errorMessage).toBeVisible();
}); 