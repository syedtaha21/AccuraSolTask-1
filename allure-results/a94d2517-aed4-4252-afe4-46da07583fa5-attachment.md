# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.ts >> TC01 - Should verify Checkbox Heading
- Location: tests\CheckBox.spec.ts:5:5

# Error details

```
TypeError: CheckBoxModule.CheckBoxActions is not a constructor
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import * as CheckBoxModule from '../Pages/CheckBox/CheckBox.actions';
  3  | 
  4  | 
  5  | test('TC01 - Should verify Checkbox Heading', async ({ page }) => {
  6  | 
  7  |     console.log('Module exports:', Object.keys(CheckBoxModule));
  8  |     console.log('Class:', CheckBoxModule.CheckBoxActions);
  9  | 
> 10 |     const checkBoxActions = new CheckBoxModule.CheckBoxActions(page);
     |                             ^ TypeError: CheckBoxModule.CheckBoxActions is not a constructor
  11 | 
  12 |     await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
  13 | 
  14 |     await checkBoxActions.verifyCheckBoxHeading();
  15 | });
  16 | 
  17 | 
```