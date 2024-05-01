const { expect, test ,describe} = require('@playwright/test');
const HomePageConst = require('./homePageConst');

// before-each test , login.
let hp;
test.beforeEach(async ({ page }) => {
     hp = new HomePageConst(page);
    await hp.goToPage();
    await hp.login('standard_user','secret_sauce');
});

test('validate products page', async ({ page }) => {
    await hp.validatePage('inventory');  // assert 
});

