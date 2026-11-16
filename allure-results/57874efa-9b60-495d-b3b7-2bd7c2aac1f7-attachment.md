# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Automation Tests >> TC03 - Login with locked user
- Location: tests\login.spec.ts:28:9

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
  - link "Press \"Enter\" to skip to content" [ref=e2]:
    - /url: "#main-container"
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - navigation
      - link [ref=e10]:
        - /url: https://practicetestautomation.com/
        - img "Practice Test Automation" [ref=e11]
      - navigation [ref=e16]:
        - navigation [ref=e17]:
          - list [ref=e18]:
            - listitem [ref=e19]:
              - link "Home" [ref=e20]:
                - /url: https://practicetestautomation.com/
            - listitem [ref=e21]:
              - link "Practice" [ref=e22]:
                - /url: https://practicetestautomation.com/practice/
            - listitem [ref=e23]:
              - link "Courses" [ref=e24]:
                - /url: https://practicetestautomation.com/courses/
            - listitem [ref=e25]:
              - link "AI Workshop" [ref=e26]:
                - /url: https://practicetestautomation.com/workshop
            - listitem [ref=e27]:
              - link "Blog" [ref=e28]:
                - /url: https://practicetestautomation.com/blog/
            - listitem [ref=e29]:
              - link "Contact" [ref=e30]:
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
        - link "Practice Test Automation." [ref=e74]:
          - /url: https://practicetestautomation.com/
        - text: All rights reserved |
        - link "Privacy Policy" [ref=e75]:
          - /url: https://practicetestautomation.com/privacy-policy/
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | import { LoginLocators } from '../locators/LoginLocators';
  4  | 
  5  | export class LoginPage {
  6  | 
  7  |     readonly page: Page;
  8  |     readonly locators: LoginLocators;
  9  | 
  10 |     constructor(page: Page) {
  11 | 
  12 |         this.page = page;
  13 | 
  14 |         this.locators = new LoginLocators(page);
  15 |     }
  16 | 
  17 |     async openWebsite() {
  18 | 
  19 |         await this.page.goto(
> 20 |             'https://practicetestautomation.com/practice-test-login/'
     |                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  21 |         );
  22 |     }
  23 | 
  24 |     async enterUsername(username: string) {
  25 | 
  26 |         await this.locators.usernameInput.fill(username);
  27 |     }
  28 | 
  29 |     async enterPassword(password: string) {
  30 | 
  31 |         await this.locators.passwordInput.fill(password);
  32 |     }
  33 | 
  34 |     async clickLogin() {
  35 | 
  36 |         await this.locators.loginButton.click();
  37 |     }
  38 | 
  39 |     async login(username: string, password: string) {
  40 | 
  41 |         await this.enterUsername(username);
  42 | 
  43 |         await this.enterPassword(password);
  44 | 
  45 |         await this.clickLogin();
  46 |     }
  47 | }
```