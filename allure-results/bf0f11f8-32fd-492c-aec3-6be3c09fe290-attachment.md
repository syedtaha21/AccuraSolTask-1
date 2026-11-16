# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.ts >> TC01 - Should enterthe message and verify output
- Location: tests\CheckBox.spec.ts:4:5

# Error details

```
TypeError: _CheckBox.CheckBoxActions is not a constructor
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import{CheckBoxActions} from '../Pages/CheckBox/CheckBox.actions';
  3  | 
  4  | test('TC01 - Should enterthe message and verify output', async ({ page }) => {
> 5  |     let checkBoxActions= new CheckBoxActions(page);
     |                          ^ TypeError: _CheckBox.CheckBoxActions is not a constructor
  6  | 
  7  |     // Open website
  8  |     await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
  9  |     await checkBoxActions.verifyCheckBoxHeading();
  10 |     await checkBoxActions.checkTheCheckBox();
  11 |     await checkBoxActions.verifyDisbledCheckBox();
  12 |     await checkBoxActions.checkAllBoxes();
  13 |     await checkBoxActions.uncheckAllBoxes();
  14 |     await checkBoxActions.verifyMultipleCheckBoxes();
  15 | });
```