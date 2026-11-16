# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JSAlerts.spec.ts >> JavaScript Alert Box Tests >> TC02 - Verify Confirm Box with OK button
- Location: tests\JSAlerts.spec.ts:60:9

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "dialog"
============================================================
```

# Test source

```ts
  29  |     const dialogPromise = this.page.waitForEvent('dialog').then(async (dialog) => {
  30  | 
  31  |        // console.log('Dialog Type:', dialog.type());
  32  |        // console.log('Dialog Message:', dialog.message());
  33  | 
  34  |         await dialog.accept();
  35  | 
  36  |     });
  37  | 
  38  |     await this.locators.jsAlertBtn.click();
  39  | 
  40  |     await dialogPromise;
  41  | }
  42  | 
  43  | 
  44  |      // Confirm Box - OK
  45  | async clickConfirmButton() {
  46  | 
  47  |     const dialogPromise = this.page.waitForEvent('dialog').then(async (dialog) => {
  48  | 
  49  |         console.log('Dialog Type:', dialog.type());
  50  |         console.log('Dialog Message:', dialog.message());
  51  | 
  52  |         await dialog.accept();
  53  | 
  54  |     });
  55  | 
  56  |     await this.locators.confirmDialogBtn.click();
  57  | 
  58  |     await dialogPromise;
  59  | }
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
  115 |       const dialogPromise = this.page.waitForEvent('dialog').then(async dialog => {
  116 | 
  117 |         expect(dialog.type()).toBe('alert');
  118 |         expect(dialog.message()).not.toBe('');
  119 | 
  120 |         await dialog.accept();
  121 |     });
  122 | 
  123 |     await this.locators.jsAlertBtn.click();
  124 | 
  125 |     await dialogPromise;
  126 | }
  127 | 
  128 |     async clickConfirmButtonAccept() {
> 129 |        const dialogPromise = this.page.waitForEvent('dialog').then(async dialog => {
      |                                        ^ Error: page.waitForEvent: Target page, context or browser has been closed
  130 | 
  131 |         expect(dialog.type()).toBe('confirm');
  132 | 
  133 |         await dialog.accept();
  134 |     });
  135 | 
  136 |     await this.locators.confirmDialogBtn.click();
  137 | 
  138 |     await dialogPromise;
  139 | 
  140 |     await expect(this.locators.confirmBoxMsg)
  141 |         .toContainText('OK');
  142 | }
  143 | 
  144 |     async clickConfirmButtonDismiss() {
  145 |           const dialogPromise = this.page.waitForEvent('dialog').then(async dialog => {
  146 | 
  147 |         expect(dialog.type()).toBe('confirm');
  148 | 
  149 |         await dialog.dismiss();
  150 |     });
  151 | 
  152 |     await this.locators.confirmDialogBtn.click();
  153 | 
  154 |     await dialogPromise;
  155 | 
  156 |     await expect(this.locators.confirmBoxMsg)
  157 |         .toContainText('Cancel');
  158 | }
  159 |     async enterPromptText(name: string) {
  160 |         const dialogPromise = this.page.waitForEvent('dialog').then(async dialog => {
  161 | 
  162 |         expect(dialog.type()).toBe('prompt');
  163 | 
  164 |         await dialog.accept(name);
  165 |     });
  166 | 
  167 |     await this.locators.promptBtn.click();
  168 | 
  169 |     await dialogPromise;
  170 | 
  171 |     await expect(this.locators.promptMsg)
  172 |         .toContainText(name);
  173 | }
  174 | }
```