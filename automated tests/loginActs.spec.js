const { expect, test, describe } = require('@playwright/test');
const HomePageConst = require('./homePageConst');

test.describe("Login Tests", () => {
    test('invalid-login', async ({ page }) => {
        const hp = new HomePageConst(page);
        await hp.goToPage();
        await hp.login('joe', 'secret_sauce'); // nvalid username, valid password
        const errorLogIn = await page.waitForSelector('#login_button_container');
        expect(errorLogIn).not.toBeNull();
    });

    test('valid-login', async ({ page }) => {
        const hp = new HomePageConst(page);
        await hp.goToPage();
        await hp.login('standard_user', 'secret_sauce'); // correct username and password
        await hp.validatePage('inventory'); 
    });
});
