
import {test } from '@playwright/test';
import { DropdownActions } from '../Pages/Dropdowns/Dropdown.actions';

test.describe('Dropdown Test Cases', () => {

    let actions: DropdownActions;

    test.beforeEach(async ({ page }) => {

        actions = new DropdownActions(page);

        await actions.openWebsite();
    });

    // TC01 - Country Dropdown
    test('TC01 - Verify country dropdown with search', async ({page}) => {
            const actions = new DropdownActions(page);
        await actions.selectCountry('Australia');

        await actions.verifySelectedCountry('Australia');
    });


    // TC02 - Multiple States
    test('TC02 - Verify multiple states selection', async () => {

        const states = ['California', 'Texas'];

        await actions.selectStates(states);

        await actions.verifySelectedStates(states);
    });


    // TC03 - Disabled Values
    test('TC03 - Verify disabled values in dropdown', async () => {

        await actions.openDisabledDropdown();

        await actions.verifyDisabledOptions();
    });


    // TC04 - Category Options
    test('TC04 - Verify category related options', async () => {

        await actions.selectCategory('Java');

        await actions.verifySelectedCategory('jquery');
    });

});