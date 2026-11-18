import{Page, Locator} from '@playwright/test';

export class CheckBoxLocators{
    checkBoxHeading: Locator;
    checkBox1: Locator;
    checkedMessage: Locator;
    disableCheckBox: Locator;
    checkAllBtn: Locator;
    uncheckAllBtn: Locator;
   multipleCheckBox: Locator;
    constructor(page: Page){
        this.checkBoxHeading= page.locator('h1.font-bold');
        this.checkBox1= page.locator('(//input[@type="checkbox"])[1]');
       

        this.checkedMessage = page.getByText('Checked!', {
    exact: true
});
        this.disableCheckBox= page.locator('(//input[@type="checkbox"])[4]');
       this.checkAllBtn=page.locator("//button[text()='Check All']");
        this.uncheckAllBtn=page.locator("//button[text()='Uncheck All']");
        this.multipleCheckBox= page.locator('div.flex.gap-30 input[type="checkbox"]');

      
    }
}