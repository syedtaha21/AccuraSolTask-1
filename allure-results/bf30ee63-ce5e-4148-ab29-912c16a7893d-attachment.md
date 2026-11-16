# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.ts >> Checkbox Test Suite >> TC05 - Verify Uncheck All Button
- Location: tests\CheckBox.spec.ts:55:9

# Error details

```
Error: expect(locator).not.toBeChecked() failed

Locator:  locator('div.flex.gap-30 input[type="checkbox"]').first()
Expected: not checked
Received: checked
Timeout:  5000ms

Call log:
  - Expect "not toBeChecked" locator('div.flex.gap-30 input[type="checkbox"]').first() with timeout 5000ms
  - waiting for locator('div.flex.gap-30 input[type="checkbox"]').first()
    12 × locator resolved to <input class="mr-8" name="option1" type="checkbox"/>
       - unexpected value "checked"

```

```yaml
- checkbox "Option 1" [checked]
```

# Test source

```ts
  14  |     // Open Checkbox page
  15  |     async openCheckBoxPage() {
  16  |         await this.page.goto(
  17  |             'https://www.testmuai.com/selenium-playground/checkbox-demo/'
  18  |         );
  19  |     }
  20  | 
  21  |     // Verify heading
  22  |     async verifyHeading() {
  23  |         await expect(this.locators.checkBoxHeading)
  24  |             .toBeVisible();
  25  |     }
  26  | 
  27  |     // Select first checkbox
  28  |     async selectFirstCheckBox() {
  29  |         await this.locators.checkBox1.check();
  30  |     }
  31  | 
  32  |     // Verify first checkbox is selected
  33  |     async verifyFirstCheckBoxSelected() {
  34  |         await expect(this.locators.checkBox1)
  35  |             .toBeChecked();
  36  |     }
  37  | 
  38  |     // Verify Checked message
  39  |     async verifyCheckedMessage() {
  40  |         await expect(this.locators.checkedMessage).toBeVisible();
  41  |     }
  42  | 
  43  |     // Verify disabled checkbox
  44  |     async verifyDisabledCheckBox() {
  45  |         await expect(this.locators.disableCheckBox)
  46  |             .toBeDisabled();
  47  |     }
  48  | /*
  49  |     // Click Check All button
  50  |     async clickCheckAllButton() {
  51  |         await this.locators.checkAllBtn.click();
  52  |     }
  53  | */
  54  | async clickCheckAllButton() {
  55  | 
  56  |     await this.locators.checkAllBtn.click();
  57  | 
  58  |     await this.page.waitForTimeout(1000);
  59  | 
  60  |     const count = await this.locators.multipleCheckBox.count();
  61  | 
  62  |     console.log('Total Checkboxes:', count);
  63  | 
  64  |     for (let i = 0; i < count; i++) {
  65  | 
  66  |         console.log(
  67  |             `Checkbox ${i + 1}:`,
  68  |             await this.locators.multipleCheckBox.nth(i).isChecked()
  69  |         );
  70  | 
  71  |     }
  72  | }
  73  | /*
  74  | async clickCheckAllButton() {
  75  | 
  76  |     await this.locators.checkAllBtn.click();
  77  | 
  78  |     await this.page.waitForTimeout(1000);
  79  | 
  80  |     const count = await this.locators.multipleCheckBox.count();
  81  | 
  82  |     console.log('Total Checkboxes:', count);
  83  | 
  84  |     for (let i = 0; i < count; i++) {
  85  | 
  86  |         console.log(
  87  |             `Checkbox ${i + 1}:`,
  88  |             await this.locators.multipleCheckBox.nth(i).isChecked()
  89  |         );
  90  | 
  91  |     }
  92  | }
  93  | */
  94  |     // Verify all checkboxes are selected
  95  |     async verifyAllCheckBoxesSelected() {
  96  |         const count = await this.locators.multipleCheckBox.count();
  97  | 
  98  |         for (let i = 0; i < count; i++) {
  99  |             await expect(this.locators.multipleCheckBox.nth(i)).toBeChecked();
  100 |         }
  101 |     }
  102 | 
  103 |     // Click Uncheck All button
  104 |     async clickUncheckAllButton() {
  105 |         await this.locators.uncheckAllBtn.click();
  106 |     }
  107 | 
  108 |     // Verify all checkboxes are unchecked
  109 |     async verifyAllCheckBoxesUnchecked() {
  110 |         const count = await this.locators.multipleCheckBox.count();
  111 | 
  112 |         for (let i = 0; i < count; i++) {
  113 |             await expect(this.locators.multipleCheckBox.nth(i))
> 114 |                 .not.toBeChecked();
      |                      ^ Error: expect(locator).not.toBeChecked() failed
  115 |         }
  116 |     }
  117 | 
  118 |   
  119 | }
  120 | 
  121 | 
```