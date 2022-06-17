

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#mui-1');
    }

    get inputPassword () {
        return $('#mui-2');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get DashboardTitle() {
        return $('h1*=Good')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        
        await expect(this.DashboardTitle).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
        // browser.windowHandleSize({width:1280,height:800});
    }
}

export default new LoginPage();
