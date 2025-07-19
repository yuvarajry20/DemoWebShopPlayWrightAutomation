import { Page } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import CheckOutPage from '../../pages/CheckOutpage';
// setDefaultTimeout(60 * 1000);
// // Given('I want to be in the demowebshop', async function () { 
// //   const baseurl = process.env.BASE_URL;
  
// //   if (!baseurl) {
// //     throw new Error('BASE_URL is not defined in the environment variables');
// //   }
// //   await pageFixture.page?.goto(baseurl);
// //   pageFixture.logger?.info(`Navigated to ${baseurl}`);

// // });

When('I log in and add an item and add to cart', { timeout: 20000 }, async function (dataTable) {
  const checkOutPage = new CheckOutPage(pageFixture.page!);

  await pageFixture.page?.waitForTimeout(2000); // waits 2 seconds

    await checkOutPage.clickLoginButtonHomePage();
    const data = dataTable.raw();
    const email = data[0][0];
    const password = data[1][0];
    const product = data[2][0];
    await checkOutPage.fillEmail(email);
    await checkOutPage.fillPassword(password);
    await checkOutPage.clickLoginButton();
    await checkOutPage.searchProduct(product);
    await checkOutPage.addToCart();
    pageFixture.logger?.info(`Logged in with email: ${email} and password: ${password}`);
    pageFixture.logger?.info(`Searched for product: ${product} and added to cart`);

 });

When('click checkout the product', async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickShoppingCart(); 
  await checkOutPage.clickCheckoutButton();
  await pageFixture.page?.waitForTimeout(2000); // waits 2 seconds
  pageFixture.logger?.info('Clicked on checkout button');
  


});

When('forgot to click the term & condition button', async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickCheckbox();
  await checkOutPage.clickCheckoutButton();
  pageFixture.logger?.info('Clicked on checkout button without accepting terms & conditions');


 });

Then('the user should see the pop up windows as to click the terms&condition', async function () { 
  const checkOutPage = new CheckOutPage(pageFixture.page!);

  await checkOutPage.verifyPopupMessage();
  pageFixture.logger?.info('Verified the popup message for terms & conditions');

});

When('checkout the product', async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickShoppingCart();
  await checkOutPage.clickcheckboxforcheckout();
  await checkOutPage.clickCheckoutButton();
  pageFixture.logger?.info('Clicked on checkout button after accepting terms & conditions');
 });

When('select address and payment methods', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.selectAddress();
  await checkOutPage.clickBillingAddressContinueButton();
  pageFixture.logger?.info('Selected address and payment methods');
});

When('confirm order', { timeout: 20000 }, async function () { 
  
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickShipContinueButton();
  await checkOutPage.clickshippinfctninue();
  await checkOutPage.clickPaymentContinueButton();
  await checkOutPage.clickPaymentInfoContinueButton();
  await checkOutPage.clickConfirmButtonInCheckout();
  await checkOutPage.downloadInvoiceAsPDF();
  pageFixture.logger?.info('Confirmed the order');
});

Then('the user should see the order number and able to download the invoice as pdf', async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.verifyOrderPlacedSuccessfully();
  pageFixture.logger?.info('Downloaded the invoice as PDF');
 });

When('click the terms & conditions', async function () { 
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickShoppingCart();
  await checkOutPage.clickcheckboxforcheckout();
});

When('click the checkout button', async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickCheckoutButton();
});

Then('the user should see the checkout page and billing details', async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.seecheckoutpage();
  
});

When('click the orders', { timeout: 20000 }, async function () { 
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickShoppingCart();
  await checkOutPage.clickcheckboxforcheckout();
  await checkOutPage.clickCheckoutButton();
   await checkOutPage.selectAddress();
  await checkOutPage.clickBillingAddressContinueButton();
  await checkOutPage.selectStorePick();
  await checkOutPage.clickShipContinueButton();
  await checkOutPage.clickPaymentContinueButton();
  await checkOutPage.clickPaymentInfoContinueButton();
  await checkOutPage.clickConfirmButtonInCheckout();
});

When('click the invoice pdf', async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.downloadInvoicePDF();
});

Then('the user should see the entire order details', async function () {
   const checkOutPage = new CheckOutPage(pageFixture.page!);
   await checkOutPage.verifyInvoiceDetails();

 });

When('enter the billing address and click store pick',{ timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickShoppingCart();
  await checkOutPage.clickcheckboxforcheckout();
  await checkOutPage.clickCheckoutButton();
   await checkOutPage.selectAddress();
  await checkOutPage.clickBillingAddressContinueButton();
  await checkOutPage.selectStorePick();
  await checkOutPage.clickShipContinueButton();
  await checkOutPage.clickPaymentContinueButton();
  await checkOutPage.clickPaymentInfoContinueButton();
  

 });

When('Proceed and confirm order',{ timeout: 20000 }, async function () { 
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickConfirmButtonInCheckout();
});

Then('the user should see the order code successfully',{ timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.downloadInvoicePDF();
  
 });

When('click the checkout button and proceed',{ timeout: 20000 }, async function () { 
  const checkOutPage = new CheckOutPage(pageFixture.page!);
   await checkOutPage.clickShoppingCart();
  await checkOutPage.clickcheckboxforcheckout();
  await checkOutPage.clickCheckoutButton();
   await checkOutPage.selectAddress();
  await checkOutPage.clickBillingAddressContinueButton();
});

When('select the credit card method and enter the required fields',{ timeout: 20000 }, async function (dataTable) {
  const checkOutPage = new CheckOutPage(pageFixture.page!); 
  await checkOutPage.selectStorePick();
  await checkOutPage.clickShipContinueButton();
  await checkOutPage.checkboxforcreditcard();
  await checkOutPage.clickPaymentContinueButton()
  const [name, number, expMonth, year, code] = dataTable.raw().flat();
  await checkOutPage.fillCreditCardDetails(name, number, expMonth, year, code);



});

When('proceed the details and confirm',{ timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!); 
  await checkOutPage.clickPaymentInfoContinueButton();
  await checkOutPage.clickConfirmButtonInCheckout();
 });


When('click the checkout buttons and proceed',{ timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickShoppingCart();
  await checkOutPage.clickcheckboxforcheckout();
  await checkOutPage.clickCheckoutButton();
   await checkOutPage.selectAddress();
  await checkOutPage.clickBillingAddressContinueButton();
  await checkOutPage.clickShipContinueButton();

 });

When('select the two day shipping as two Day Air',{ timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.twodaypickup();
  


 });

When('proceed the further details',{ timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickshippinfctninue();
  await checkOutPage.clickPaymentContinueButton();
  await checkOutPage.clickPaymentInfoContinueButton();
  await checkOutPage.clickConfirmButtonInCheckout();

 });


When('select back and click the store pickup',{ timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.backtoshippings();
  await checkOutPage.selectStorePick();
  await checkOutPage.clickShipContinueButton();
  



 });

When('proceed the remaining steps and confirm',{ timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  await checkOutPage.clickPaymentContinueButton();
  await checkOutPage.clickPaymentInfoContinueButton();
  await checkOutPage.clickConfirmButtonInCheckout();
 });

