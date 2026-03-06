import { expect } from '@playwright/test';
import { test } from '../fixture/Fixture_addItemToCart';
import { CartPage } from '../pages/CartPage';

test.describe('Test add 3 items', () => {
    test.use({ numberItemToAdd: 3 });
    test('Check number displayed item', async ({ cartPageInstance }) => {
        await expect(cartPageInstance.ItemListName).toHaveCount(3);
        await expect(cartPageInstance.removeButton).toHaveCount(3);
    });

});
test.describe('Test add 1 item', () => {
    test.use({ numberItemToAdd: 1 });
    test('Check number displayed item', async ({ cartPageInstance }) => {
        await expect(cartPageInstance.ItemListName).toHaveCount(1);
        await expect(cartPageInstance.removeButton).toHaveCount(1);
    });

});
