# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.ts >> Checkbox Test Suite >> TC01 - Verify Checkbox Heading
- Location: tests\CheckBox.spec.ts:17:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1   | import { Page, expect } from '@playwright/test';
  2   | import { CheckBoxLocators } from './CheckBox.locators';
  3   | 
  4   | export class CheckBoxActions {
  5   | 
  6   |     page: Page;
  7   |     locators: CheckBoxLocators;
  8   | 
  9   |     constructor(page: Page) {
  10  |         this.page = page;
  11  |         this.locators = new CheckBoxLocators(page);
  12  |     }
  13  | 
  14  |     // Open Checkbox page
  15  |     async openCheckBoxPage() {
> 16  |         await this.page.goto(
      |                         ^ Error: page.goto: Target page, context or browser has been closed
  17  |             'https://www.testmuai.com/selenium-playground/checkbox-demo/'
  18  |         );
  19  |     }
  20  | 
  21  |     // Verify heading
  22  |     async verifyHeading() {
  23  |         await expect(this.locators.checkBoxHeading).toBeVisible();
  24  |     }
  25  | 
  26  |     // Select first checkbox
  27  |     async selectFirstCheckBox() {
  28  |         await this.locators.checkBox1.check();
  29  |     }
  30  | 
  31  |     // Verify first checkbox is selected
  32  |     async verifyFirstCheckBoxSelected() {
  33  |         await expect(this.locators.checkBox1).toBeChecked();
  34  |     }
  35  | 
  36  |     // Verify Checked message
  37  |     async verifyCheckedMessage() {
  38  |         await this.locators.checkBox1.click();
  39  |          await this.locators.checkedMessage.isVisible();
  40  |     }
  41  | 
  42  |     // Verify disabled checkbox
  43  |     async verifyDisabledCheckBox() {
  44  |         await expect(this.locators.disableCheckBox)
  45  |             .toBeDisabled();
  46  |     }
  47  | /*
  48  |     // Click Check All button
  49  |     async clickCheckAllButton() {
  50  |         await this.locators.checkAllBtn.click();
  51  |     }
  52  | */
  53  | async clickCheckAllButton() {
  54  | 
  55  |     await this.locators.checkAllBtn.click();
  56  | 
  57  |     await this.page.waitForTimeout(1000);
  58  | 
  59  |     const count = await this.locators.multipleCheckBox.count();
  60  | 
  61  |     console.log('Total Checkboxes:', count);
  62  | 
  63  |     for (let i = 0; i < count; i++) {
  64  | 
  65  |         console.log(
  66  |             `Checkbox ${i + 1}:`,
  67  |             await this.locators.multipleCheckBox.nth(i).isChecked()
  68  |         );
  69  | 
  70  |     }
  71  | }
  72  | /*
  73  | async clickCheckAllButton() {
  74  | 
  75  |     await this.locators.checkAllBtn.click();
  76  | 
  77  |     await this.page.waitForTimeout(1000);
  78  | 
  79  |     const count = await this.locators.multipleCheckBox.count();
  80  | 
  81  |     console.log('Total Checkboxes:', count);
  82  | 
  83  |     for (let i = 0; i < count; i++) {
  84  | 
  85  |         console.log(
  86  |             `Checkbox ${i + 1}:`,
  87  |             await this.locators.multipleCheckBox.nth(i).isChecked()
  88  |         );
  89  | 
  90  |     }
  91  | }
  92  | */
  93  |     // Verify all checkboxes are selected
  94  |     async verifyAllCheckBoxesSelected() {
  95  |         const count = await this.locators.multipleCheckBox.count();
  96  | 
  97  |         for (let i = 0; i < count; i++) {
  98  |             await expect(this.locators.multipleCheckBox.nth(i)).toBeChecked();
  99  |         }
  100 |     }
  101 | /*
  102 |     // Click Uncheck All button
  103 |     async clickUncheckAllButton() {
  104 |         await this.locators.uncheckAllBtn.click();
  105 |     }
  106 | */
  107 | 
  108 | async clickUncheckAllButton() {
  109 | 
  110 |     console.log('Before Uncheck:');
  111 | 
  112 |     await this.locators.uncheckAllBtn.click();
  113 | 
  114 |     await this.page.waitForTimeout(1000);
  115 | 
  116 |     const count = await this.locators.multipleCheckBox.count();
```