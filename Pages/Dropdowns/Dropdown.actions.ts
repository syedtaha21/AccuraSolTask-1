import { Page, expect } from '@playwright/test';
import { DropdownLocators } from './Dropdown.locators';

export class DropdownActions {

    private page: Page;
    locators: DropdownLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new DropdownLocators(page);
    }

    // Open Website
    async openWebsite() {
        await this.page.goto('https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/');
    }

    // TC01 - Verify Country Dropdown
    async selectCountry(country: string) {

        await this.locators.countryDropdown.click();

        const searchBox = this.page.locator(
            '.select2-container--open .select2-search__field'
        );



await expect(searchBox).toBeVisible();
        await searchBox.fill(country);

          // Wait for searched option
    const countryOption = this.page.locator(
        '.select2-results__option'
    ).filter({
        hasText: country
    });

    await expect(countryOption.first()).toBeVisible();

    await countryOption.first().click();
   

    
}
    

    // Verify Selected Country
    async verifySelectedCountry(country: string) {

        await expect(this.locators.countryDropdown)
            .toHaveText(country);
    }


    // TC02 - Multiple Values with Search
    async selectStates(states: string[]) {

        for (const state of states) {

            await this.locators.stateDropdown.click();

            const searchBox = this.page.locator(
                '.select2-container--open .select2-search__field'
            );
            await expect(searchBox).toBeVisible();
            await searchBox.fill(state);

         // Find state option
        const stateOption = this.page.locator(
            '.select2-container--open .select2-results__option'
        ).filter({
            hasText: state
        });

        // Wait for option
        await expect(stateOption.first()).toBeVisible({
            timeout: 10000
        });

        // Click option
        await stateOption.first().click();
    }

        }
    

    // Verify Selected States
    async verifySelectedStates(states: string[]) {

        for (const state of states) {

            await expect(this.locators.stateDropdown)
                .toContainText(state);
        }
    }


    // TC03 - Disabled Values
    async openDisabledDropdown() {

        await this.locators.disabledDropdown.click();
    }

    // Verify Disabled Options
    async verifyDisabledOptions() {

        const disabledOptions = this.page.locator(
            '.select2-results__option[aria-disabled="true"]'
        );

        await expect(disabledOptions.first()).toBeVisible();
    }


    // TC04 - Category Related Options
    async selectCategory(category: string) {

        await this.locators.categoryDropdown.selectOption({
            label: category
        });
    }

    // Verify Selected Category
    async verifySelectedCategory(value: string) {

        await expect(this.locators.categoryDropdown)
            .toHaveValue(value);
    }

}
