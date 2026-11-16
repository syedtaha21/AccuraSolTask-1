# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Slider.spec.ts >> TC01- verify Heading
- Location: tests\Slider.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h1.text-size-48')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('h1.text-size-48') with timeout 5000ms
  - waiting for locator('h1.text-size-48')

```

# Test source

```ts
  1  | import {Page, expect} from '@playwright/test'
  2  | import { SliderLocator } from './Sliders.locators';
  3  | 
  4  | export class SliderActions{
  5  |    private page:Page;
  6  |      locators:SliderLocator;
  7  |     
  8  |     constructor(page:Page){
  9  |         this.page= page;
  10 |         this.locators= new SliderLocator(page);
  11 | 
  12 |     }
  13 | 
  14 | 
  15 |     //open website
  16 |     async openWebsite(){
  17 |     await this.page.goto('https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/');
  18 |     }
  19 | 
  20 |     //verify heading
  21 | async verifyingHeading(){
> 22 |     await expect(this.locators.SliderHeading).toBeVisible();
     |                                               ^ Error: expect(locator).toBeVisible() failed
  23 | }
  24 | 
  25 | }
  26 | 
```