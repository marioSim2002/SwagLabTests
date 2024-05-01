const { expect } = require('@playwright/test');

class HomePageConst {
    constructor(page) {
        this.page = page;
    }
     
    async goToPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async validatePage(keyword) {
        await expect(this.page.url()).toContain(keyword);   
    }

    async login(username,password){
        const usernameField = await this.page.waitForSelector('#user-name');
        const passField = await this.page.waitForSelector('#password');
        const bt = await this.page.waitForSelector('#login-button');
    
        await usernameField.fill(username);
        await passField.fill(password);
        await bt.click(); // bt click
    }
}

module.exports = HomePageConst;