import { test, expect } from '@playwright/test';
import { AjaxFormActions } from '../Pages/AjaxForm/AjaxForm.actions';

test('TC01 - Should enter a message and verify output', async ({ page }) => {

    let ajaxForm = new AjaxFormActions(page);

    
    await ajaxForm.openWebsite();
    // Verify heading
    await ajaxForm.verifyFormHeading();
    

    // Enter name
    await ajaxForm.enterName('Syed Taha');

    // Enter message
    await ajaxForm.enterMessage('This is my AJAX form submission test.');

    // Click submit
    await ajaxForm.clickSubmitBtn();

    // Verify image
    await ajaxForm.verifyImageIsVisible();
   
});


