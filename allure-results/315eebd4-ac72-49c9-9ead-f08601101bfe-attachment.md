# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JSAlerts.spec.ts >> JavaScript Alert Box Tests >> TC04 - Verify Prompt Box with entered name
- Location: tests\JSAlerts.spec.ts:78:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('xpath=(//button[text()="Click Me"])[3]')
    - locator resolved to <button type="button" class="btn btn-dark mx-10 hover:bg-lambda-900 hover:border-lambda-900">Click Me</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  60  | 
  61  |     // Confirm Box - Cancel
  62  |     // Confirm Box - Cancel
  63  | async cancelConfirmButton() {
  64  | 
  65  |     const dialogPromise = this.page.waitForEvent('dialog').then(async (dialog) => {
  66  | 
  67  |         console.log('Dialog Type:', dialog.type());
  68  |         console.log('Dialog Message:', dialog.message());
  69  | 
  70  |         await dialog.dismiss();
  71  | 
  72  |     });
  73  | 
  74  |     await this.locators.confirmDialogBtn.click();
  75  | 
  76  |     await dialogPromise;
  77  | }
  78  | 
  79  | // Prompt Box - Enter text
  80  | async clickPromptButton(text: string) {
  81  | 
  82  |     const dialogPromise = this.page.waitForEvent('dialog').then(async (dialog) => {
  83  | 
  84  |         console.log('Dialog Type:', dialog.type());
  85  |         console.log('Dialog Message:', dialog.message());
  86  | 
  87  |         await dialog.accept(text);
  88  | 
  89  |     });
  90  | 
  91  |     await this.locators.promptBtn.click();
  92  | 
  93  |     await dialogPromise;
  94  | }
  95  | }
  96  | */
  97  | 
  98  |  
  99  | 
  100 | 
  101 | export class JavaScriptAlertsActions {
  102 |     page: Page;
  103 |     locators: JavaScriptAlerts;
  104 | 
  105 |     constructor(page: Page) {
  106 |         this.page = page;
  107 |         this.locators = new JavaScriptAlerts(page);
  108 |     }
  109 | 
  110 |     async verifyHeading() {
  111 |         await expect(this.locators.demoHeading).toBeVisible();
  112 |     }
  113 | 
  114 |     async clickAlertButton() {
  115 |         const dialogPromise = this.page.waitForEvent('dialog');
  116 | 
  117 |         await this.locators.jsAlertBtn.click();
  118 | 
  119 |         const dialog = await dialogPromise;
  120 | 
  121 |         expect(dialog.type()).toBe('alert');
  122 |         expect(dialog.message()).not.toBe('');
  123 | 
  124 |         await dialog.accept();
  125 |     }
  126 | 
  127 |     async clickConfirmButtonAccept() {
  128 |         const dialogPromise = this.page.waitForEvent('dialog');
  129 | 
  130 |         await this.locators.confirmDialogBtn.click();
  131 | 
  132 |         const dialog = await dialogPromise;
  133 | 
  134 |         expect(dialog.type()).toBe('confirm');
  135 | 
  136 |         await dialog.accept();
  137 | 
  138 |         await expect(this.locators.confirmBoxMsg)
  139 |             .toContainText('OK');
  140 |     }
  141 | 
  142 |     async clickConfirmButtonDismiss() {
  143 |         const dialogPromise = this.page.waitForEvent('dialog');
  144 | 
  145 |         await this.locators.confirmDialogBtn.click();
  146 | 
  147 |         const dialog = await dialogPromise;
  148 | 
  149 |         expect(dialog.type()).toBe('confirm');
  150 | 
  151 |         await dialog.dismiss();
  152 | 
  153 |         await expect(this.locators.confirmBoxMsg)
  154 |             .toContainText('Cancel');
  155 |     }
  156 | 
  157 |     async enterPromptText(name: string) {
  158 |         const dialogPromise = this.page.waitForEvent('dialog');
  159 | 
> 160 |         await this.locators.promptBtn.click();
      |                                       ^ Error: locator.click: Target page, context or browser has been closed
  161 | 
  162 |         const dialog = await dialogPromise;
  163 | 
  164 |         expect(dialog.type()).toBe('prompt');
  165 | 
  166 |         await dialog.accept(name);
  167 | 
  168 |         await expect(this.locators.promptMsg)
  169 |             .toContainText(name);
  170 |     }
  171 | }
  172 | 
```