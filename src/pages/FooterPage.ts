import { Page, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/Playwrightwrapper';

export default class FooterPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private elements = {
    poweredByLink: "//a[contains(text(),'nopCommerce')]",
    siteMapLink: "//a[contains(text(),'Sitemap')]",
    contactUsLink: "//a[contains(text(),'Contact us')]",
    contactNameInput: "#FullName",
    contactEmailInput: ".email",
    contactEnquiryInput: ".enquiry",
    contactSubmitButton: ".button-1.contact-us-button",
    confirmationMessage: "//div[@class='page-body']//div[@class='result']"
  };

  async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async clickPoweredByLink() {
    await this.base.waitAndClick(this.elements.poweredByLink);
  }

  async verifyNopCommerceUrl() {
    await this.page.waitForLoadState('load');
    const url = this.page.url();
    expect(url).toContain('nopcommerce.com');
  }

  async clickFooterLink(linkText: string) {
    await this.base.waitAndClick(`//a[contains(text(),'${linkText}')]`);
  }

  async verifySitemapPage() {
    await this.page.waitForLoadState('load');
    expect(this.page.url()).toContain('/sitemap');
  }

  async clickContactUsLink() {
    await this.base.waitAndClick(this.elements.contactUsLink);
  }

  async enterContactDetails(name: string, email: string, enquiry: string) {
    await this.page.fill(this.elements.contactNameInput, name);
    await this.page.fill(this.elements.contactEmailInput, email);
    await this.page.fill(this.elements.contactEnquiryInput, enquiry);
  }

  async clickSubmitButton() {
    await this.base.waitAndClick(this.elements.contactSubmitButton);
  }

  async verifyConfirmationMessage() {
    const messageLocator = this.page.locator(this.elements.confirmationMessage);
    await expect(messageLocator).toBeVisible();
    await expect(messageLocator).toContainText('Your enquiry has been successfully sent to the store owner.');
  }
}
