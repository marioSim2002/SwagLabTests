const { expect, test ,describe} = require('@playwright/test');
const HomePageConst = require('./homePageConst');

 // before-each test , login.
test.beforeEach("login",async({page}) => {
    const hp = new HomePageConst(page);
    await hp.goToPage();
    await hp.login('standard_user','secret_sauce');
});


test.describe("Add to cart tests", () => {
    test('add to cart - valid', async ({ page }) => {
        // ensure that counter badge/icon is updated after adding item to cart
        const addToCartBt = await page.waitForSelector('#add-to-cart-sauce-labs-bike-light');   
        await addToCartBt.click();
        const cartCounterBadge = await page.waitForSelector("//div[@id='shopping_cart_container']/a/span");
        await expect(cartCounterBadge).toBeTruthy(); // assert
    });

    test('add to cart - invalid', async ({ page }) => {
        // ensure that counter badge/icon is hidden if no items added to cart
        const cartCounterBadge = await page.locator("//div[@id='shopping_cart_container']/a/span");
        await expect(cartCounterBadge).toBeHidden();  //assert
    });
});
