import { test } from '@playwright/test';
import { CheckBoxActions } from '../Pages/CheckBox/CheckBox.actions';

test.describe('Checkbox Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        const checkBoxActions = new CheckBoxActions(page);
        await checkBoxActions.openCheckBoxPage();
    });

    // TC01 - Verify Checkbox Heading
    test('TC01 - Verify Checkbox Heading', async ({ page }) => {

        const checkBoxActions = new CheckBoxActions(page);

        await checkBoxActions.verifyHeading();
    });

    // TC02 - Verify Single Checkbox
    test('TC02 - Select  Checkbox and verify checked text', async ({ page }) => {

        const checkBoxActions = new CheckBoxActions(page);

        await checkBoxActions.selectFirstCheckBox();

        await checkBoxActions.verifyFirstCheckBoxSelected();

        await checkBoxActions.verifyCheckedMessage();
    });

    // TC03 - Verify Disabled Checkbox
    test('TC03 - Verify Disabled Checkbox', async ({ page }) => {

        const checkBoxActions = new CheckBoxActions(page);

        await checkBoxActions.verifyDisabledCheckBox();
    });

    // TC04 - Verify Check All Functionality
    test('TC04 - Verify Check All Button', async ({ page }) => {

        const checkBoxActions = new CheckBoxActions(page);

        await checkBoxActions.clickCheckAllButton();

        
    });

    // TC05 - Verify Uncheck All Functionality
    test('TC05 - Verify Uncheck All Button', async ({ page }) => {

        const checkBoxActions = new CheckBoxActions(page);

        await checkBoxActions.clickCheckAllButton();

        await checkBoxActions.clickUncheckAllButton();

       
    });

});
