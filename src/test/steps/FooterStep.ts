import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import FooterPage from '../../pages/FooterPage';

let footerPage: FooterPage;

When('User scrolls to the footer section', async function () {
  footerPage = new FooterPage(pageFixture.page!);
  await footerPage.scrollToFooter();
  await pageFixture.logger?.info('Scrolled to the footer section');
});

When('User clicks on the Powered by nopCommerce link', async function () {
  await footerPage.clickPoweredByLink();
  await pageFixture.logger?.info('Clicked on Powered by nopCommerce link');
});

Then('User should be navigated to the nopCommerce official website', async function () {
  await footerPage.verifyNopCommerceUrl();
  await pageFixture.logger?.info('Verified navigation to nopCommerce official website');
});

When('User clicks on the {string} link page', async function (linkText: string) {
  await footerPage.clickFooterLink(linkText);
  await pageFixture.logger?.info(`Clicked on footer link: ${linkText}`);
});

Then('User should be navigated to the Sitemap page', async function () {
  await footerPage.verifySitemapPage();
  await pageFixture.logger?.info('Verified Sitemap page navigation');
});

When('clicks on the Contact us link', async function () {
  await footerPage.clickContactUsLink();
  await pageFixture.logger?.info('Clicked on Contact us link');
});

When('enters the contact details', async function (dataTable) {
  const { name, email, enquiry } = dataTable.hashes()[0];
  await footerPage.enterContactDetails(name, email, enquiry);
  await pageFixture.logger?.info(`Entered contact details: ${name}, ${email}, ${enquiry}`);
});

When('clicks on the submit button', async function () {
  await footerPage.clickSubmitButton();
  await pageFixture.logger?.info('Clicked on submit button');
});

Then('the confirmation should be displayed', async function () {
  await footerPage.verifyConfirmationMessage();
  await pageFixture.logger?.info('Verified contact confirmation message');
});
