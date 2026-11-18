import { test,expect } from '@playwright/test';
import { BootstrapListBoxActions } from '../Pages/BootstrapListBox/BootstrapListBox.actions';

// Test case to verify the heading and list boxes
test('TC01 - Should verify the heading and list boxes', async ({ page }) => {
let bootstrapListBoxActions = new BootstrapListBoxActions(page);
    // Open website


    await bootstrapListBoxActions.openWebsite();

    // Verify heading and list boxes
   
    await bootstrapListBoxActions.verifyHeading();
    await bootstrapListBoxActions.verifyAvailableListBoxIsVisible();
    await bootstrapListBoxActions.verifySelectedListBoxIsVisible();
    await bootstrapListBoxActions.verifyRightButtonIsVisible();
    await bootstrapListBoxActions.verifyLeftButtonIsVisible();
});


//select single item

test('TC02 - Should select a single item from available list', async ({ page }) => {
    let bootstrapListBoxActions = new BootstrapListBoxActions(page);
    await bootstrapListBoxActions.openWebsite();
    await bootstrapListBoxActions.verifyAvailableListBoxIsVisible();
    await bootstrapListBoxActions.selectSingleItemFromAvailableList();
    await bootstrapListBoxActions.verifySelectedItemIsSelected();
});




//left to right 

test('TC03 - Should move single item from left list  to right List', async ({ page }) => {

    let bootstrapListBoxActions = new BootstrapListBoxActions(page);

    await bootstrapListBoxActions.openWebsite();

    await bootstrapListBoxActions.moveItemFromLeftToRight();

});
//right to left
test('TC04 - Should move single item from right list  to left List', async ({ page }) => {

    let bootstrapListBoxActions = new BootstrapListBoxActions(page);

    await bootstrapListBoxActions.openWebsite();

    await bootstrapListBoxActions.moveRightToLeft();

});
