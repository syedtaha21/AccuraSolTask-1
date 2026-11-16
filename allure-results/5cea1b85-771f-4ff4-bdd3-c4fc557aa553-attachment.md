# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.ts >> TC03 - Verify disabled values in dropdown
- Location: tests\Dropdown.spec.ts:39:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('span[role="combobox"]').nth(2)
Expected substring: "Puerto Rico"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" locator('span[role="combobox"]').nth(2) with timeout 5000ms
  - waiting for locator('span[role="combobox"]').nth(2)

```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | import { DropdownActions } from "../Pages/Dropdowns/Dropdown.actions";
  3  | import { DropdownLocators } from '../Pages/Dropdowns/Dropdown.locators';
  4  | 
  5  | 
  6  | 
  7  |  // TC01 - Verify Dropdown with Search
  8  |     test('TC01 - Verify country dropdown with search', async ({ page }) => {
  9  | 
  10 |         const actions = new DropdownActions(page);
  11 |         const locators = new DropdownLocators(page);
  12 | 
  13 |         await actions.selectCountry('Australia');
  14 | 
  15 |         await expect(locators.countryDropdown)
  16 |             .toHaveText('Australia');
  17 | 
  18 |     });
  19 | 
  20 | 
  21 |     // TC02 - Verify Multiple Values with Search
  22 |     test('TC02 - Verify multiple states selection', async ({ page }) => {
  23 | 
  24 |         const actions = new DropdownActions(page);
  25 |         const locators = new DropdownLocators(page);
  26 | 
  27 |         await actions.selectStates(['California', 'Texas']);
  28 | 
  29 |         await expect(locators.stateDropdown)
  30 |             .toContainText('California');
  31 | 
  32 |         await expect(locators.stateDropdown)
  33 |             .toContainText('Texas');
  34 | 
  35 |     });
  36 | 
  37 | 
  38 |     // TC03 - Verify Dropdown with Disabled Values
  39 |     test('TC03 - Verify disabled values in dropdown', async ({ page }) => {
  40 | 
  41 |         const actions = new DropdownActions(page);
  42 |         const locators = new DropdownLocators(page);
  43 | 
  44 |         await expect(locators.disabledDropdown)
> 45 |             .toContainText('Puerto Rico');
     |              ^ Error: expect(locator).toContainText(expected) failed
  46 | 
  47 |         await actions.openDisabledDropdown();
  48 | 
  49 |         const disabledOptions = page.locator(
  50 |             '.select2-results__option[aria-disabled="true"]'
  51 |         );
  52 | 
  53 |         await expect(disabledOptions.first()).toBeVisible();
  54 | 
  55 |     });
  56 | 
  57 | 
  58 |     // TC04 - Verify Category Related Options
  59 |     test('TC04 - Verify category related options', async ({ page }) => {
  60 | 
  61 |         const actions = new DropdownActions(page);
  62 |         const locators = new DropdownLocators(page);
  63 | 
  64 |         await actions.selectCategory('Java');
  65 | 
  66 |         await expect(locators.categoryDropdown)
  67 |             .toHaveValue('jquery');
  68 | 
  69 |     });
  70 | 
  71 | 
```