import { Page, Locator } from '@playwright/test';

export class DropdownLocators {

     

    // TC01 - Country Dropdown
     countryDropdown: Locator;
    

    // TC02 - Multiple States
     stateDropdown: Locator;

    // TC03 - Disabled Values
     disabledDropdown: Locator;

    // TC04 - Category Dropdown
     categoryDropdown: Locator;

    constructor(page:Page){
        this.countryDropdown = page.locator('#select2-country-container').locator('..');
        this.stateDropdown=  page.locator('span[role="combobox"]').nth(1);
        this.disabledDropdown= page.locator('span[role="combobox"]').nth(2);
        this.categoryDropdown= page.locator('#files');
    }

}