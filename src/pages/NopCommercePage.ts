import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/Playwrightwrapper";


export default class NopCommercePage {
    private base:PlaywrightWrapper;
    

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

private Elements = {
    nopcommerce:'//div[@class="footer-poweredby"]//child::a',
    textinnopcommerce:'//div[@class="home-banner-text-section"]//child::h1'
};
async nopcommercewebpage()
{
    this.page.locator(this.Elements.nopcommerce).click();
}

async verifyNopCommerceURL() {
    await this.page.waitForTimeout(5000);
    const currentUrl = this.page.url();
    const expectedUrl = "https://www.nopcommerce.com/en";

    console.log("Assertion passed: Expected text is displayed. " + currentUrl);
    await expect(currentUrl).toBe(expectedUrl);
  }
}