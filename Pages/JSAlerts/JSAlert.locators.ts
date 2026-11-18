import { Page, Locator  } from '@playwright/test';

 export class JavaScriptAlerts{
    demoHeading: Locator;
    jsAlertBtn: Locator;
   
    confirmDialogBtn: Locator;
   // confirmBoxMsg: Locator;
    promptBtn: Locator;
   
   // promptMsg: Locator;

constructor(page:Page){
    this.demoHeading= page.locator('h1.font-bold');
    this.jsAlertBtn= page.locator('(//button[text()="Click Me"])[1]');
    this.confirmDialogBtn=page.locator('(//button[text()="Click Me"])[2]');
   // this.confirmBoxMsg= page.locator('p#confirm-demo');
    this.promptBtn= page.locator('(//button[text()="Click Me"])[3]');
   // this.promptMsg=page.locator('p#prompt-demo');

}
   
}