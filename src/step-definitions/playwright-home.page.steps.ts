import { Given, Then } from '@cucumber/cucumber';
import { OurWorld } from '../../our-world';
import { PlaywrightHomePage } from '../pages/playwright-home.page';

Given('user navigates to playwright url', async function (this: OurWorld) {
    const { page } = this;
    const playwrightHomePage = new PlaywrightHomePage(page);
    await playwrightHomePage.navigateToUrl();
});

Then('user validates the title of the playwright page', async function (this: OurWorld) {
    const { page } = this;
    const playwrightHomePage = new PlaywrightHomePage(page);
    await playwrightHomePage.validateTitle();
    await playwrightHomePage.captureScreenshot();
});
