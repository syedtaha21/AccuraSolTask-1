import { Page, Locator } from "@playwright/test";
export class BootstrapListBoxLocators {
    heading: Locator;
    AvailableListBox: Locator;
    SelectedListBox: Locator;
    RightButton: Locator;
    LeftButton: Locator;
   
    constructor(page: Page){

        this.heading = page.locator('h1.font-bold');
        this.AvailableListBox = page.locator(`ul.sp_list_group`).nth(0);
       
        this.SelectedListBox= page.locator('ul.sp_list_group').nth(1);
        this.RightButton= page.locator('button.block.move-right');
        this.LeftButton= page.locator('button.block.move-left');
       

    }

}
