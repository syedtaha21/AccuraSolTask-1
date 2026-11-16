# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AjaxForm.spec.ts >> TC01 - Should enter a message and verify output
- Location: tests\AjaxForm.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.testmuai.com/selenium-playground/
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { AjaxFormActions } from '../Pages/AjaxForm/AjaxForm.actions';
  3  | 
  4  | test('TC01 - Should enter a message and verify output', async ({ page }) => {
  5  | 
  6  |     const ajaxForm = new AjaxFormActions(page);
  7  | 
  8  |     // Open website
> 9  |     await page.goto('https://www.testmuai.com/selenium-playground/');
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.testmuai.com/selenium-playground/
  10 | 
  11 |     // Verify heading
  12 |     await ajaxForm.verifyFormHeading();
  13 | 
  14 |     // Enter name
  15 |     await ajaxForm.enterName('Syed Taha');
  16 | 
  17 |     // Enter message
  18 |     await ajaxForm.enterMessage('This is my AJAX form submission test.');
  19 | 
  20 |     // Click submit
  21 |     await ajaxForm.clickSubmitBtn();
  22 | 
  23 |     // Verify image
  24 |     await ajaxForm.verifyImageIsVisible();
  25 | 
  26 | });
  27 | 
```