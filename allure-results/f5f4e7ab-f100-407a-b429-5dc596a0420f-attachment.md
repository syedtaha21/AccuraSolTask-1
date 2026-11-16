# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BootstrapListBox.spec.ts >> TC02 - Should select a single item from available list
- Location: tests\BootstrapListBox.spec.ts:24:5

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('ul.sp_list_group').first().locator('li').last()
Expected pattern: /active/
Received string:  "list-group-item"
Timeout: 5000ms

Call log:
  - Expect "toHaveClass" locator('ul.sp_list_group').first().locator('li').last() with timeout 5000ms
  - waiting for locator('ul.sp_list_group').first().locator('li').last()
    13 × locator resolved to <li class="list-group-item">Mynamaki</li>
       - unexpected value "list-group-item"

```

```yaml
- listitem: Mynamaki
```

# Test source

```ts
  1  | import {Page, expect} from '@playwright/test';
  2  | import { BootstrapListBoxLocators } from './BootstrapListBox.locators';
  3  | 
  4  | export class BootstrapListBoxActions{
  5  |     page: Page;
  6  |     bootstrapListBoxLocators: BootstrapListBoxLocators;
  7  |     constructor(page: Page){
  8  |         this.page= page;
  9  |         this.bootstrapListBoxLocators= new BootstrapListBoxLocators(page);
  10 |     }
  11 | 
  12 |     //heading
  13 |     async verifyHeading(){
  14 |         await expect( this.bootstrapListBoxLocators.heading).toBeVisible();
  15 |         await expect(this.bootstrapListBoxLocators.heading).toHaveText(`Bootstrap Dual List Demo`);
  16 | 
  17 |     }
  18 | 
  19 |     //Available List Box
  20 |     async verifyAvailableListBoxIsVisible(){
  21 |         await expect(this.bootstrapListBoxLocators.AvailableListBox).toBeVisible();
  22 |     }
  23 | 
  24 |     //Selected List Box
  25 |     async verifySelectedListBoxIsVisible(){
  26 |         await expect(this.bootstrapListBoxLocators.SelectedListBox).toBeVisible();
  27 |     }
  28 | 
  29 |     //Right Button
  30 |     async verifyRightButtonIsVisible(){
  31 |         await expect(this.bootstrapListBoxLocators.RightButton).toBeVisible();
  32 |     }
  33 | 
  34 |     //Left Button
  35 |     async verifyLeftButtonIsVisible(){
  36 |         await expect(this.bootstrapListBoxLocators.LeftButton).toBeVisible();
  37 |     }
  38 | 
  39 | 
  40 |     //select single item from available list
  41 |     async selectSingleItemFromAvailableList(){
  42 |         const availableItem = await this.bootstrapListBoxLocators.AvailableListBox.locator('li').last();
  43 |         await availableItem.click();
> 44 |           await expect(availableItem).toHaveClass(/active/);
     |                                       ^ Error: expect(locator).toHaveClass(expected) failed
  45 |     }
  46 | 
  47 |     //verify selected item is selected
  48 |     async verifySelectedItemIsSelected(){
  49 |        const selectedItem = await this.bootstrapListBoxLocators.AvailableListBox.locator('li').last();
  50 |        
  51 |        await expect(selectedItem).toHaveClass(/active/);
  52 |     }
  53 | 
  54 | }
```