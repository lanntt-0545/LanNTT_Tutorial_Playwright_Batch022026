import { expect } from '@playwright/test';
import { test } from '../fixture/Fixture_loggedInPage';

test('Check title page', async ({ loggedInPage }) => {
    await expect(loggedInPage.getByText('Swag Labs')).toBeVisible();
});

test('Check number displayed item', async ({ loggedInPage }) => {
    const itemList = loggedInPage.locator('.inventory_item_name')
    await expect(itemList).toHaveCount(6);
});

test('Check name displayed item', async ({ loggedInPage }) => {
    const itemList = loggedInPage.locator('.inventory_item_name')
    await expect(itemList.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(itemList.getByText('Sauce Labs Bike Light')).toBeVisible();
    await expect(itemList.getByText('Sauce Labs Bolt T-Shirt')).toBeVisible();
    await expect(itemList.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
    await expect(itemList.getByText('Sauce Labs Onesie')).toBeVisible();
    await expect(itemList.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible();
});