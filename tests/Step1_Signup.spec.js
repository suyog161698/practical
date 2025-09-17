import { test, expect } from '@playwright/test';
import HomePage from '../page/homepage.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function saveTestData(email, password) {
  const filePath = path.resolve(__dirname, '../test-data/testData.json'); // ✅ relative path
  let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.userid.email = email;
  data.userid.password = password;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

test('User can sign up and create an account', async ({ page }) => {
  const home = new HomePage(page);

  await page.goto('/');

  // Generate email
  const email = home.generateRandomEmail();

  // Use the generated email in signup
  await home.signup(email);

  // Create account and get password
  const password = await home.createaccount();

  // Save email and password
  saveTestData(email, password);

  await expect(
    page.getByText('Account Created! Congratulations! Your new account has been successfully')
  ).toBeVisible();

  await page.getByRole('link', { name: 'Continue' }).click();
});
