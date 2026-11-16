# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Automation Tests >> TC02 - Login with invalid credentials
- Location: tests\login.spec.ts:22:9

# Error details

```
Error: page.goto: net::ERR_QUIC_PROTOCOL_ERROR at https://practicetestautomation.com/practice-test-login/
Call log:
  - navigating to "https://practicetestautomation.com/practice-test-login/", waiting until "load"

```

# Test source

```ts
  1  | import {Page } from '@playwright/test';
  2  | import {LoginLocators} from '../locators/LoginLocators';
  3  | 
  4  | export class LoginPage{
  5  |     page: Page;
  6  |     Locators: LoginLocators;
  7  | 
  8  | 
  9  |     constructor(page: Page){
  10 |         this.page= page;
  11 |         this.Locators= new LoginLocators(page);
  12 |     }
  13 | 
  14 | 
  15 |     async openWebsite(){
> 16 |         await this.page.goto(`https://practicetestautomation.com/practice-test-login/`)
     |                         ^ Error: page.goto: net::ERR_QUIC_PROTOCOL_ERROR at https://practicetestautomation.com/practice-test-login/
  17 |     }
  18 | 
  19 |     async enterUsername(username: string){
  20 |         await this.Locators.username.fill(username);
  21 |     }
  22 | 
  23 | 
  24 |     async enterPassword(password: string){
  25 |         await this.Locators.password.fill(password)
  26 |     }
  27 | 
  28 | 
  29 |     async clickLogin(){
  30 |         await this.Locators.loginButton.click();
  31 |     }
  32 | 
  33 | 
  34 | 
  35 | 
  36 |     async login(username: string, password: string){
  37 |         await this.enterUsername(username);
  38 |         await this.enterPassword(password);
  39 |         await this.clickLogin();
  40 |     }
  41 | }
```