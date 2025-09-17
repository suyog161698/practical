import { test, expect } from '@playwright/test';
import HomePage from '../page/homepage.js';
import testData from '../test-data/testData.json' assert { type: "json" };

test('test', async ({ page }) => {
  const home = new HomePage(page);
  await page.goto('/');
 
 
  await home.login(testData.userid.email, testData.userid.password);
  await expect(page.locator('#slider-carousel')).toContainText(
    'All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.'
  );
  await expect(page.getByRole('link', { name: ' Delete Account' })).toBeVisible();
}); 