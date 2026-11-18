import { Page, Locator } from '@playwright/test';

export class DropdownLocators {
     countryDropdown: Locator;
     stateDropdown: Locator;
     disabledDropdown: Locator;
     categoryDropdown: Locator;

    constructor(page:Page){
        this.countryDropdown = page.locator('#select2-country-container').locator('..');
        this.stateDropdown=  page.locator('span[role="combobox"]').nth(1);
        this.disabledDropdown= page.locator('span[role="combobox"]').nth(2);
        this.categoryDropdown= page.locator('#files');
    }

}