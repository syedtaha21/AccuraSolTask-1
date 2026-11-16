# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Slider.spec.ts >> TC02-Range Sliders Testing
- Location: tests\Slider.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toHaveCount(expected) failed

Locator: locator('input[type="range"]')
Expected: 8
Error: Test timeout of 30000ms exceeded.

Call log:
  - Expect "toHaveCount" locator('input[type="range"]') with timeout 5000ms
  - waiting for locator('input[type="range"]')

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
  22 |     await expect(this.locators.SliderHeading).toBeVisible();
  23 | }
  24 | 
  25 | //verify sliders are visible
  26 | async verifySlidersVisible(){
  27 |     const count= await this.locators.allSlider.count();
  28 |     for(let i=0; i< count; i++){
  29 |         await expect(this.locators.allSlider.nth(i)).toBeVisible()
  30 |     }
  31 | }
  32 | // verify total sliders
  33 | async verifySliderCount(){
> 34 |     await expect(this.locators.allSlider).toHaveCount(8);
     |                                           ^ Error: expect(locator).toHaveCount(expected) failed
  35 | }
  36 | 
  37 | //verify Default Val
  38 |  async verifyDefaultValues() {
  39 | 
  40 |         const defaultValues = [5, 20, 15, 50, 25, 30, 40, 80];
  41 | 
  42 |         for (let i = 0; i < defaultValues.length; i++) {
  43 | 
  44 |             await expect(
  45 |                 this.locators.allSlider.nth(i)
  46 |             ).toHaveValue(String(defaultValues[i]));
  47 |         }
  48 |     }
  49 | 
  50 | 
  51 | 
  52 | 
  53 |     // Drag slider to a specific value
  54 |     async dragSlider(sliderIndex: number, targetValue: number) {
  55 | 
  56 |         const slider = this.locators.allSlider.nth(sliderIndex);
  57 | 
  58 |         const min = Number(await slider.getAttribute('min') || 0);
  59 |         const max = Number(await slider.getAttribute('max') || 100);
  60 | 
  61 |         const box = await slider.boundingBox();
  62 | 
  63 |         if (!box) {
  64 |             throw new Error('Slider not found');
  65 |         }
  66 | 
  67 |         const value = Math.max(min, Math.min(max, targetValue));
  68 | 
  69 |         const targetX =
  70 |             box.x + ((value - min) / (max - min)) * box.width;
  71 | 
  72 |         const targetY = box.y + box.height / 2;
  73 | 
  74 |         await this.page.mouse.move(
  75 |             box.x + box.width / 2,
  76 |             targetY
  77 |         );
  78 | 
  79 |         await this.page.mouse.down();
  80 | 
  81 |         await this.page.mouse.move(
  82 |             targetX,
  83 |             targetY,
  84 |             { steps: 20 }
  85 |         );
  86 | 
  87 |         await this.page.mouse.up();
  88 | 
  89 | 
  90 | }
  91 | 
  92 | 
  93 |  
  94 | 
  95 | 
  96 | }
```