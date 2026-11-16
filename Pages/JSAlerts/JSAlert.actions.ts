
import { Page, expect } from '@playwright/test';
import { JavaScriptAlerts } from './JavaScriptAlert.locators';

export class JSAlertsActins {

    private locators: JavaScriptAlerts;

    constructor(private page: Page) {
        this.locators = new JavaScriptAlerts(page);
    }

    async openWebsite() {
        await this.page.goto(
            'https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo/'
        );
    }

    // TC01 - Simple Alert
    async simpleAlertHandling() {

        this.page.once('dialog', async dialog => {

            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am an alert box!');

            await dialog.accept();
        });

        await this.locators.jsAlertBtn.click();
    }

async confirmAlertOK() {

    this.page.once('dialog', async dialog => {

        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Press a button!');

        await dialog.accept();

    });

    await this.locators.confirmDialogBtn.click();
      
}

 async confirmAlertCancel() {
    this.page.once('dialog', async dialog => {
       
        await dialog.dismiss();
    });

    await this.locators.confirmDialogBtn.click();

    await this.page.waitForTimeout(1000);

}
 


async promptAlertOK(text: string) {

    this.page.once('dialog', async dialog => {

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name');

        await dialog.accept(text);

    });

    await this.locators.promptBtn.click();

 
}

    async promptAlertCancel() {
    this.page.once('dialog', async dialog => {
       
        await dialog.dismiss();
    });

    await this.locators.promptBtn.click();

    await this.page.waitForTimeout(1000);

}
}
