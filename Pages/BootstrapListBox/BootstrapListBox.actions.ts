import {Page, expect} from '@playwright/test';
import { BootstrapListBoxLocators } from './BootstrapListBox.locators';

export class BootstrapListBoxActions{
    page: Page;
    bootstrapListBoxLocators: BootstrapListBoxLocators;
    constructor(page: Page){
        this.page= page;
        this.bootstrapListBoxLocators= new BootstrapListBoxLocators(page);
    }

    //heading
    async verifyHeading(){
        await expect( this.bootstrapListBoxLocators.heading).toBeVisible();
        await expect(this.bootstrapListBoxLocators.heading).toHaveText(`Bootstrap Dual List Demo`);

    }

    //Available List Box
    async verifyAvailableListBoxIsVisible(){
        await expect(this.bootstrapListBoxLocators.AvailableListBox).toBeVisible();
    }

    //Selected List Box
    async verifySelectedListBoxIsVisible(){
        await expect(this.bootstrapListBoxLocators.SelectedListBox).toBeVisible();
    }

    //Right Button
    async verifyRightButtonIsVisible(){
        await expect(this.bootstrapListBoxLocators.RightButton).toBeVisible();
    }

    //Left Button
    async verifyLeftButtonIsVisible(){
        await expect(this.bootstrapListBoxLocators.LeftButton).toBeVisible();
    }


    //select single item from available list
    async selectSingleItemFromAvailableList(){
        const availableItem = await this.bootstrapListBoxLocators.AvailableListBox.locator('li').last();
         await availableItem.click();
          

        
    }

    //verify selected item is selected
    async verifySelectedItemIsSelected(){
       const selectedItem = await this.bootstrapListBoxLocators.AvailableListBox.locator('li.active');
      
       await expect(selectedItem).toHaveClass(/active/);
    }


    



    // Move item from Left List to Right List
async moveItemFromLeftToRight(){

    const availableItem = this.bootstrapListBoxLocators.AvailableListBox.locator('li').last();

    const itemText = await availableItem.innerText();

    await availableItem.click();

    await this.bootstrapListBoxLocators.RightButton.click();

    const movedItem = this.bootstrapListBoxLocators.SelectedListBox.getByText(itemText, { exact: true });

    await expect(movedItem).toBeVisible();
}




// Move item from Selected List to Available List
async moveRightToLeft(){
   const selectedItem = this.bootstrapListBoxLocators.SelectedListBox.locator('li').last();
     const itemText = await selectedItem.innerText();

    await selectedItem.click();

     await this.bootstrapListBoxLocators.LeftButton.click();

    const movedItem = this.bootstrapListBoxLocators.AvailableListBox.getByText(itemText, { exact: true });

    await expect(movedItem).toBeVisible();


}
}