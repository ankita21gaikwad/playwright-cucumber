import { EnvironmentUrls } from "../env/environment-urls";
import { Page } from "playwright";
import { expect } from "@playwright/test";
import { PlaywrightHomePageModal } from "../models/playwright-home.page.modal";

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToUrl() {
    await this.page.goto(EnvironmentUrls.playwrighturl);
    this.page.once("load", () => console.log("Page loaded!"));
    await expect(this.page).toHaveURL(EnvironmentUrls.playwrighturl);
  }

  async validateTitle() {
    await expect(this.page).toHaveTitle(
      PlaywrightHomePageModal.playwrightHomePageTitle
    );
  }

  async captureScreenshot() {
    await this.page.screenshot({
      path: "reports/screenshot.png",
      fullPage: true,
    });
  }
}
