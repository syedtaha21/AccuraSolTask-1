import{Page, expect} from '@playwright/test';
import { AjaxForm } from './AjaxForm.locators';

export class AjaxFormActions{
    page: Page;
    ajaxForm: AjaxForm;
    constructor(page: Page){

        this.page= page;
        this.ajaxForm= new AjaxForm(page);
    }


    //form heading
    async verifyFormHeading(){
        await expect (this.ajaxForm.formHeading).toBeVisible();
        await expect (this.ajaxForm.formHeading).toHaveText(`Form Submit Demo`);

    }


    //name input 
    async enterName(name: string){
        await this.ajaxForm.nameInput.fill(name);

    }

    async enterMessage(message: string){
        await this.ajaxForm.messageBox.fill(message);

    }

    async clickSubmitBtn(){
        await this.ajaxForm.submitBtn.click();

    }

   async verifyImageIsVisible() {

    await this.page.waitForTimeout(2000);

  

}



}