# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Saucs-demo.spec.ts >> SauceDemo Automation Tests >> TC03 - Login with invalid credentials
- Location: tests\Saucs-demo.spec.ts:57:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.error-message')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.error-message') with timeout 5000ms
  - waiting for locator('.error-message')

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": wrong_user
    - textbox "Password": wrong_password
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import { SauceLogin } from '../Pages/SauceLogin';
  4  | 
  5  | 
  6  | 
  7  | import { LoginData } from '../test-data/LoginData';
  8  | 
  9  | 
  10 | test.describe('SauceDemo Automation Tests', () => {
  11 | 
  12 |     let loginPage: SauceLogin;
  13 |    
  14 | 
  15 | 
  16 |     test.beforeEach(async ({ page }) => {
  17 | 
  18 |         loginPage = new SauceLogin(page);
  19 | 
  20 | 
  21 | 
  22 |         await loginPage.goto();
  23 |     });
  24 | 
  25 | 
  26 |     // TC01: Valid Login
  27 | 
  28 |     test('TC01 - Login with valid credentials', async ({ page }) => {
  29 | 
  30 |         await loginPage.login(
  31 |             LoginData.validUser.username,
  32 |             LoginData.validUser.password
  33 |         );
  34 | 
  35 |         await expect(page).toHaveURL(/inventory.html/);
  36 | 
  37 |         //await productsPage.verifyProductsPage();
  38 |     });
  39 | 
  40 | 
  41 |     // TC02: Locked User Login
  42 | 
  43 |     test('TC02 - Login with locked user', async () => {
  44 | 
  45 |         await loginPage.login(
  46 |             LoginData.lockedUser.username,
  47 |             LoginData.lockedUser.password
  48 |         );
  49 | 
  50 |         await expect(loginPage.errorMessage)
  51 |             .toContainText('locked out');
  52 |     });
  53 | 
  54 | 
  55 |     // TC03: Invalid Login
  56 | 
  57 |     test('TC03 - Login with invalid credentials', async () => {
  58 | 
  59 |         await loginPage.login(
  60 |             LoginData.invalidUser.username,
  61 |             LoginData.invalidUser.password
  62 |         );
  63 | 
  64 |         await expect(loginPage.errorMessage)
> 65 |             .toBeVisible();
     |              ^ Error: expect(locator).toBeVisible() failed
  66 |     });
  67 | 
  68 | 
  69 | });
```