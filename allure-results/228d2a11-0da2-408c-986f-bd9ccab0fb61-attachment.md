# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.ts >> Checkbox Test Suite >> TC05 - Verify Uncheck All Button
- Location: tests\CheckBox.spec.ts:51:9

# Error details

```
Error: expect(locator).toBeChecked() failed

Locator:  locator('div.flex.gap-30 input[type="checkbox"]').first()
Expected: checked
Received: unchecked
Timeout:  5000ms

Call log:
  - Expect "toBeChecked" locator('div.flex.gap-30 input[type="checkbox"]').first() with timeout 5000ms
  - waiting for locator('div.flex.gap-30 input[type="checkbox"]').first()
    13 × locator resolved to <input class="mr-8" name="option1" type="checkbox"/>
       - unexpected value "unchecked"

```

```yaml
- checkbox "Option 1"
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { CheckBoxLocators } from './CheckBox.locators';
  3  | 
  4  | export class CheckBoxActions {
  5  | 
  6  |     page: Page;
  7  |     locators: CheckBoxLocators;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.locators = new CheckBoxLocators(page);
  12 |     }
  13 | 
  14 |     // Open Checkbox page
  15 |     async openCheckBoxPage() {
  16 |         await this.page.goto(
  17 |             'https://www.testmuai.com/selenium-playground/checkbox-demo/'
  18 |         );
  19 |     }
  20 | 
  21 |     // Verify heading
  22 |     async verifyHeading() {
  23 |         await expect(this.locators.checkBoxHeading).toBeVisible();
  24 |     }
  25 | 
  26 |     // Select first checkbox
  27 |     async selectFirstCheckBox() {
  28 |         await this.locators.checkBox1.click();
  29 |     }
  30 | 
  31 |     // Verify first checkbox is selected
  32 |     async verifyFirstCheckBoxSelected() {
  33 |         await expect(this.locators.checkBox1).toBeChecked();
  34 |     }
  35 | 
  36 |     // Verify Checked message
  37 |     async verifyCheckedMessage() {
  38 |         await expect(this.locators.checkedMessage).toBeVisible();
  39 |     }
  40 | 
  41 | 
  42 | 
  43 | 
  44 |     // Verify disabled checkbox
  45 |     async verifyDisabledCheckBox() {
  46 |         await expect(this.locators.disableCheckBox).toBeDisabled();
  47 |     }
  48 | 
  49 |     // Click Check All button
  50 |     async clickCheckAllButton() {
  51 |         await this.locators.checkAllBtn.click();
  52 |       const count= await this.locators.multipleCheckBox.count();
  53 |       for( let i=0; i<count; i++){
> 54 |        await expect(this.locators.multipleCheckBox.nth(i)).toBeChecked();
     |                                                            ^ Error: expect(locator).toBeChecked() failed
  55 |       }
  56 |     }
  57 | 
  58 | 
  59 |     // Click Uncheck All button
  60 |     async clickUncheckAllButton() {
  61 |         await this.locators.uncheckAllBtn.click();
  62 |         const count= await this.locators.multipleCheckBox.count();
  63 |         for(let i=0; i<count; i++){
  64 |             await expect(this.locators.multipleCheckBox.nth(i)).not.toBeChecked()        }
  65 |     }
  66 | 
  67 |    
  68 | 
  69 |    
  70 | }
```