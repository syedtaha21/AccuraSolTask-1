import { expect, test } from '@playwright/test';
import { JSAlertsActins } from '../Pages/JSAlerts/JSAlert.actions';

test.beforeEach(async ({ page }) => {
    const actions = new JSAlertsActins(page);
    await actions.openWebsite();
});

test('TC01 - Simple Alert Handling', async ({ page }) => {
    const actions = new JSAlertsActins(page);
    await actions.simpleAlertHandling();
});


test('TC02 - Confirm Alert OK', async ({ page }) => {
    const actions = new JSAlertsActins(page);
    await actions.confirmAlertOK();
   
});


test('TC03 - Confirm Alert Cancel Button', async ({ page }) => {
    const actions = new JSAlertsActins(page);
    await actions.confirmAlertCancel();
});

test('TC04 - Prompt Alert OK Button', async ({ page }) => {
    const actions = new JSAlertsActins(page);
    await actions.promptAlertOK('Playwright');
});

test('TC05 - Prompt Alert Cancel Button', async ({ page }) => {
    const actions = new JSAlertsActins(page);
    await actions.promptAlertCancel();
});
