import{Page, Locator} from '@playwright/test';

export class AjaxForm{
    formHeading: Locator;
    nameInput: Locator;
    messageBox: Locator;
    submitBtn: Locator;
    image: Locator;

    constructor(page: Page){
        this.formHeading= page.locator('h1:has-text("Form Submit Demo")');
        this.nameInput= page.locator(`input[id="title"]`);
        this.messageBox= page.locator(`textarea[id="description"]`);
        this.submitBtn= page.locator(`input[id="btn-submit"]`);
        this.image= page.locator(`div[id="submit-control"] img`);
    }
}