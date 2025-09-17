import { test, expect } from '@playwright/test';
import HomePage from '../page/homepage.js';
import testData from '../test-data/testData.json' assert { type: "json" };
test('test', async ({ page }) => {
    const home = new HomePage(page);
    await page.goto('/');
 
     
    await home.login(testData.userid.email, testData.userid.password);
     await home.orderproduct();
    await home.orderproductwithcreditcard('Rahul', '442424242424', '12', '2030', '123');
    await expect(page.getByText('Congratulations! Your order')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();

});