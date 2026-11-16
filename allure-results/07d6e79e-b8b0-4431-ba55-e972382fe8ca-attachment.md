# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.ts >> TC01- Should verify ChreckBox Heading
- Location: tests\CheckBox.spec.ts:6:5

# Error details

```
TypeError: _CheckBox.CheckBoxActions is not a constructor
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { CheckBoxActions } from '../Pages/CheckBox/CheckBox.actions';
  3  | 
  4  | 
  5  | //testcae for varifying Checkbox heading
  6  | test('TC01- Should verify ChreckBox Heading',async ({page})=>{
> 7  |     let checkBoxActions= new CheckBoxActions(page);
     |                          ^ TypeError: _CheckBox.CheckBoxActions is not a constructor
  8  |     //open website
  9  |     await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
  10 |     //verify heading 
  11 |     await checkBoxActions.verifyCheckBoxHeading();
  12 | } )
  13 | 
  14 | 
  15 | 
```