# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Automation Tests >> TC02 - Login with invalid credentials
- Location: tests\login.spec.ts:22:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#user-name')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Press \"Enter\" to skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-container"
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - navigation
      - link [ref=e10] [cursor=pointer]:
        - /url: https://practicetestautomation.com/
        - img "Practice Test Automation" [ref=e11]
      - navigation [ref=e16]:
        - navigation [ref=e17]:
          - list [ref=e18]:
            - listitem [ref=e19]:
              - link "Home" [ref=e20] [cursor=pointer]:
                - /url: https://practicetestautomation.com/
            - listitem [ref=e21]:
              - link "Practice" [ref=e22] [cursor=pointer]:
                - /url: https://practicetestautomation.com/practice/
            - listitem [ref=e23]:
              - link "Courses" [ref=e24] [cursor=pointer]:
                - /url: https://practicetestautomation.com/courses/
            - listitem [ref=e25]:
              - link "AI Workshop" [ref=e26] [cursor=pointer]:
                - /url: https://practicetestautomation.com/workshop
            - listitem [ref=e27]:
              - link "Blog" [ref=e28] [cursor=pointer]:
                - /url: https://practicetestautomation.com/blog/
            - listitem [ref=e29]:
              - link "Contact" [ref=e30] [cursor=pointer]:
                - /url: https://practicetestautomation.com/contact/
    - main [ref=e31]:
      - generic [ref=e32]:
        - heading "Test login" [level=2] [ref=e33]
        - list [ref=e34]:
          - listitem [ref=e35]: This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.
          - listitem [ref=e36]: "Use next credentials to execute Login: Username: student Password: Password123"
        - generic [ref=e37]:
          - generic [ref=e38]:
            - text: Username
            - textbox "Username" [ref=e39]
          - generic [ref=e40]:
            - text: Password
            - textbox "Password" [ref=e41]
          - button "Submit" [ref=e42] [cursor=pointer]
        - generic [ref=e43]: Your username is invalid!
        - separator [ref=e44]
        - 'heading "Test case 1: Positive LogIn test" [level=5] [ref=e45]'
        - list [ref=e46]:
          - listitem [ref=e47]: Open page
          - listitem [ref=e48]: Type username student into Username field
          - listitem [ref=e49]: Type password Password123 into Password field
          - listitem [ref=e50]: Push Submit button
          - listitem [ref=e51]: Verify new page URL contains practicetestautomation.com/logged-in-successfully/
          - listitem [ref=e52]: Verify new page contains expected text ('Congratulations' or 'successfully logged in')
          - listitem [ref=e53]: Verify button Log out is displayed on the new page
        - separator [ref=e54]
        - 'heading "Test case 2: Negative username test" [level=5] [ref=e55]'
        - list [ref=e56]:
          - listitem [ref=e57]: Open page
          - listitem [ref=e58]: Type username incorrectUser into Username field
          - listitem [ref=e59]: Type password Password123 into Password field
          - listitem [ref=e60]: Push Submit button
          - listitem [ref=e61]: Verify error message is displayed
          - listitem [ref=e62]: Verify error message text is Your username is invalid!
        - separator [ref=e63]
        - 'heading "Test case 3: Negative password test" [level=5] [ref=e64]'
        - list [ref=e65]:
          - listitem [ref=e66]: Open page
          - listitem [ref=e67]: Type username student into Username field
          - listitem [ref=e68]: Type password incorrectPassword into Password field
          - listitem [ref=e69]: Push Submit button
          - listitem [ref=e70]: Verify error message is displayed
          - listitem [ref=e71]: Verify error message text is Your password is invalid!
    - contentinfo:
      - generic [ref=e73]:
        - text: © Copyright 2020
        - link "Practice Test Automation." [ref=e74] [cursor=pointer]:
          - /url: https://practicetestautomation.com/
        - text: All rights reserved |
        - link "Privacy Policy" [ref=e75] [cursor=pointer]:
          - /url: https://practicetestautomation.com/privacy-policy/
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
  16 |         await this.page.goto(`https://practicetestautomation.com/practice-test-login/`)
  17 |     }
  18 | 
  19 |     async enterUsername(username: string){
> 20 |         await this.Locators.username.fill(username);
     |                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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