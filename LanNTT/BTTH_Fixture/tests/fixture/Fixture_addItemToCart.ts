import { test as loginTest } from './Fixture_loggedInPage'; // Import từ fixture login
import { Page } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type MyOptions = {
    numberItemToAdd: number; // Đây là "Option" để truyền dữ liệu từ test case
    cartPageInstance: CartPage;
};

// Kế thừa và mở rộng thêm fixture cartPage
export const test = loginTest.extend<MyOptions>({
    numberItemToAdd: [1, { option: true }],
    cartPageInstance: async ({ loggedInPage, numberItemToAdd }, use) => {
        const inventoryPage = new InventoryPage(loggedInPage);
        const cartPage = new CartPage(loggedInPage);
        if(numberItemToAdd === 1){
           await inventoryPage.addToCart(0); 
        }else if(numberItemToAdd > 1){
            for(let i = 0; i< numberItemToAdd; i++){
                await inventoryPage.addToCart(i); 
            }
        }else{
            console.log('Add 0 item')
        }
        
        await cartPage.goto();
        await use(cartPage);
    },
});

export { expect } from '@playwright/test';