import { test, expect } from '@playwright/test';
import HomePage from '../page/homepage.js';
import testData from '../test-data/testData.json' assert { type: "json" };

test.describe('Login flow', () => {

  let home;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await page.goto('/');
  });

test('login with valid credentails', async ({ page }) => {
 
  await home.login(testData.userid.email, testData.userid.password);
  await expect(page.locator('#slider-carousel')).toContainText(
    'All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.'
  );
  await expect(page.getByRole('link', { name: ' Delete Account' })).toBeVisible();
}); 


test('login with invalid credentails', async ({ page }) => {
  await home.login(testData.userid.wrongemail, testData.userid.invalidPassword);
  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
}); 


test('login with invalid email credentails', async ({ page }) => {
  await home.login(testData.userid.invalidEmail, testData.userid.invalidPassword);
  const popupText = await home.invalidemail();
  await expect(popupText).toBe( "Please fill out this field.");
  
}); 


});