import { Page, expect } from '@playwright/test';
import { CheckBoxLocators } from './CheckBox.locators';

export class CheckBoxActions {

    page: Page;
    locators: CheckBoxLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new CheckBoxLocators(page);
    }

    // Open Checkbox page
    async openCheckBoxPage() {
        await this.page.goto(
            'https://www.testmuai.com/selenium-playground/checkbox-demo/'
        );
    }

    // Verify heading
    async verifyHeading() {
        await expect(this.locators.checkBoxHeading).toBeVisible();
    }

    // Select first checkbox
    async selectFirstCheckBox() {
        await this.locators.checkBox1.check();
    }

    // Verify first checkbox is selected
    async verifyFirstCheckBoxSelected() {
        await expect(this.locators.checkBox1).toBeChecked();
    }

    // Verify Checked message
    async verifyCheckedMessage() {
        await expect(this.locators.checkedMessage).toHaveText('Checked!');
    }




    // Verify disabled checkbox
    async verifyDisabledCheckBox() {
        await expect(this.locators.disableCheckBox).toBeDisabled();
    }

    // Click Check All button
    async clickCheckAllButton() {
        await this.locators.checkAllBtn.click();
      const count= await this.locators.multipleCheckBox.count();
      for( let i=0; i<count; i++){
       await expect(this.locators.multipleCheckBox.nth(i)).toBeChecked();
      }
    }


    // Click Uncheck All button
    async clickUncheckAllButton() {
        await this.locators.uncheckAllBtn.click();
        const count= await this.locators.multipleCheckBox.count();
        for(let i=0; i<count; i++){
            await expect(this.locators.multipleCheckBox.nth(i)).not.toBeChecked()        }
    }
   
}