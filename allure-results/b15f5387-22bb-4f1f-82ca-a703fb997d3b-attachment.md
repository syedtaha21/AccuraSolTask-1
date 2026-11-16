# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.ts >> Checkbox Test Suite >> TC01 - Verify Checkbox Heading
- Location: tests\CheckBox.spec.ts:13:9

# Error details

```
TypeError: _CheckBox.CheckBoxActions is not a constructor
```

# Test source

```ts
  1  | 
  2  | import { test } from '@playwright/test';
  3  | import { CheckBoxActions } from '../Pages/CheckBox/CheckBox.actions';
  4  | 
  5  | test.describe('Checkbox Test Suite', () => {
  6  | 
  7  |     test.beforeEach(async ({ page }) => {
> 8  |         const checkBoxActions = new CheckBoxActions(page);
     |                                 ^ TypeError: _CheckBox.CheckBoxActions is not a constructor
  9  |         await checkBoxActions.openCheckBoxPage();
  10 |     });
  11 | 
  12 |     // TC01 - Verify Checkbox Heading
  13 |     test('TC01 - Verify Checkbox Heading', async ({ page }) => {
  14 | 
  15 |         const checkBoxActions = new CheckBoxActions(page);
  16 | 
  17 |         await checkBoxActions.verifyHeading();
  18 |     });
  19 | 
  20 |     // TC02 - Verify Single Checkbox
  21 |     test('TC02 - Select Single Checkbox', async ({ page }) => {
  22 | 
  23 |         const checkBoxActions = new CheckBoxActions(page);
  24 | 
  25 |         await checkBoxActions.selectFirstCheckBox();
  26 | 
  27 |         await checkBoxActions.verifyFirstCheckBoxSelected();
  28 | 
  29 |         await checkBoxActions.verifyCheckedMessage();
  30 |     });
  31 | 
  32 |     // TC03 - Verify Disabled Checkbox
  33 |     test('TC03 - Verify Disabled Checkbox', async ({ page }) => {
  34 | 
  35 |         const checkBoxActions = new CheckBoxActions(page);
  36 | 
  37 |         await checkBoxActions.verifyDisabledCheckBox();
  38 |     });
  39 | 
  40 |     // TC04 - Verify Check All Functionality
  41 |     test('TC04 - Verify Check All Button', async ({ page }) => {
  42 | 
  43 |         const checkBoxActions = new CheckBoxActions(page);
  44 | 
  45 |         await checkBoxActions.clickCheckAllButton();
  46 | 
  47 |         await checkBoxActions.verifyAllCheckBoxesSelected();
  48 |     });
  49 | 
  50 |     // TC05 - Verify Uncheck All Functionality
  51 |     test('TC05 - Verify Uncheck All Button', async ({ page }) => {
  52 | 
  53 |         const checkBoxActions = new CheckBoxActions(page);
  54 | 
  55 |         await checkBoxActions.clickCheckAllButton();
  56 | 
  57 |         await checkBoxActions.clickUncheckAllButton();
  58 | 
  59 |         await checkBoxActions.verifyAllCheckBoxesUnchecked();
  60 |     });
  61 | 
  62 | });
  63 | 
```