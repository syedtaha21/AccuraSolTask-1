# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.ts >> Dropdown Test Cases >> TC02 - Verify multiple states selection
- Location: tests\Dropdown.spec.ts:26:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('option', { name: 'California', exact: true })

```

# Test source

```ts
  1   | 
  2   | import { Page, expect } from '@playwright/test';
  3   | import { DropdownLocators } from './Dropdown.locators';
  4   | 
  5   | export class DropdownActions {
  6   | 
  7   |     private page: Page;
  8   |     locators: DropdownLocators;
  9   | 
  10  |     constructor(page: Page) {
  11  |         this.page = page;
  12  |         this.locators = new DropdownLocators(page);
  13  |     }
  14  | 
  15  |     // Open Website
  16  |     async openWebsite() {
  17  |         await this.page.goto('https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/');
  18  |     }
  19  | 
  20  |     // TC01 - Verify Country Dropdown
  21  |     async selectCountry(country: string) {
  22  | 
  23  |         await this.locators.countryDropdown.click();
  24  | 
  25  |         const searchBox = this.page.locator(
  26  |             '.select2-container--open .select2-search__field'
  27  |         );
  28  | 
  29  | 
  30  | 
  31  | await expect(searchBox).toBeVisible();
  32  |         await searchBox.fill(country);
  33  | 
  34  |           // Wait for searched option
  35  |     const countryOption = this.page.locator(
  36  |         '.select2-results__option'
  37  |     ).filter({
  38  |         hasText: country
  39  |     });
  40  | 
  41  |     await expect(countryOption.first()).toBeVisible();
  42  | 
  43  |     await countryOption.first().click();
  44  |    
  45  | 
  46  |     
  47  | }
  48  |     
  49  | 
  50  |     // Verify Selected Country
  51  |     async verifySelectedCountry(country: string) {
  52  | 
  53  |         await expect(this.locators.countryDropdown)
  54  |             .toHaveText(country);
  55  |     }
  56  | 
  57  | 
  58  |     // TC02 - Multiple Values with Search
  59  |     async selectStates(states: string[]) {
  60  | 
  61  |         for (const state of states) {
  62  | 
  63  |             await this.locators.stateDropdown.click();
  64  | 
  65  |             const searchBox = this.page.locator(
  66  |                 '.select2-container--open .select2-search__field'
  67  |             );
  68  |             await expect(searchBox).toBeVisible();
  69  |             await searchBox.fill(state);
  70  | 
  71  |          // Find state option
  72  |         const stateOption = this.page.locator(
  73  |             '.select2-container--open .select2-results__option'
> 74  |         ).filter({
      |                ^ Error: locator.click: Target page, context or browser has been closed
  75  |             hasText: state
  76  |         });
  77  | 
  78  |         // Wait for option
  79  |         await expect(stateOption.first()).toBeVisible({
  80  |             timeout: 10000
  81  |         });
  82  | 
  83  |         // Click option
  84  |         await stateOption.first().click();
  85  |     }
  86  | 
  87  |         }
  88  |     
  89  | 
  90  |     // Verify Selected States
  91  |     async verifySelectedStates(states: string[]) {
  92  | 
  93  |         for (const state of states) {
  94  | 
  95  |             await expect(this.locators.stateDropdown)
  96  |                 .toContainText(state);
  97  |         }
  98  |     }
  99  | 
  100 | 
  101 |     // TC03 - Disabled Values
  102 |     async openDisabledDropdown() {
  103 | 
  104 |         await this.locators.disabledDropdown.click();
  105 |     }
  106 | 
  107 |     // Verify Disabled Options
  108 |     async verifyDisabledOptions() {
  109 | 
  110 |         const disabledOptions = this.page.locator(
  111 |             '.select2-results__option[aria-disabled="true"]'
  112 |         );
  113 | 
  114 |         await expect(disabledOptions.first()).toBeVisible();
  115 |     }
  116 | 
  117 | 
  118 |     // TC04 - Category Related Options
  119 |     async selectCategory(category: string) {
  120 | 
  121 |         await this.locators.categoryDropdown.selectOption({
  122 |             label: category
  123 |         });
  124 |     }
  125 | 
  126 |     // Verify Selected Category
  127 |     async verifySelectedCategory(value: string) {
  128 | 
  129 |         await expect(this.locators.categoryDropdown)
  130 |             .toHaveValue(value);
  131 |     }
  132 | 
  133 | }
  134 | 
```