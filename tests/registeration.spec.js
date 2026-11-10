
import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

test.beforeEach(async ({ page }) => {
  const filePath = resolve('index.html');
  await page.goto(pathToFileURL(filePath).href);
});

test('Registration page should open', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Patient Registration' })
  ).toBeVisible();
});

test('Patient name is required', async ({ page }) => {
  const name = page.locator('#patientName');

  await expect(name).toHaveAttribute('required', '');
  expect(await name.evaluate(el => el.checkValidity())).toBe(false);
});

test('Invalid email should be rejected', async ({ page }) => {
  const email = page.locator('#email');

  await email.fill('wrong-email');
  expect(await email.evaluate(el => el.checkValidity())).toBe(false);
});

test('Valid registration should show success message', async ({ page }) => {
  await page.locator('#patientName').fill('Test Patient');
  await page.locator('#email').fill('test@example.com');
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.locator('#message')).toContainText(
    'Demo registration completed'
  );
});
