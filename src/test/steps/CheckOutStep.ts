import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import CheckOutPage from '../../pages/CheckOutpage';

When('I log in and add an item and add to cart', { timeout: 20000 }, async function (dataTable) {
  const checkOutPage = new CheckOutPage(pageFixture.page!);

  try {
    await pageFixture.page?.waitForTimeout(2000);

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
  } catch (error) {
    pageFixture.logger?.error('Failed during login and add to cart. Error: ' + (error as Error).message);
    throw error;
  }
});


When('click checkout the product', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);

  try {
    await checkOutPage.clickShoppingCart(); 
    await checkOutPage.clickCheckoutButton();
    await pageFixture.page?.waitForTimeout(2000);

    pageFixture.logger?.info('Clicked on checkout button');
  } catch (error) {
    pageFixture.logger?.error('Failed to click checkout the product. Error: ' + (error as Error).message);
    throw error;
  }
});


When('forgot to click the term & condition button', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickCheckbox();
    await checkOutPage.clickCheckoutButton();
    pageFixture.logger?.info('Clicked on checkout button without accepting terms & conditions');
  } catch (error) {
    pageFixture.logger?.error('Error while trying to checkout without accepting terms & conditions: ' + (error as Error).message);
    throw error;
  }
});

Then('the user should see the pop up windows as to click the terms&condition', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.verifyPopupMessage();
    pageFixture.logger?.info('Verified the popup message for terms & conditions');
  } catch (error) {
    pageFixture.logger?.error('Error while verifying the terms & conditions popup: ' + (error as Error).message);
    throw error;
  }
});


When('checkout the product', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickShoppingCart();
    await checkOutPage.clickcheckboxforcheckout();
    await checkOutPage.clickCheckoutButton();
    pageFixture.logger?.info('Clicked on checkout button after accepting terms & conditions');
  } catch (error) {
    pageFixture.logger?.error('Error during checkout after accepting terms & conditions: ' + (error as Error).message);
    throw error;
  }
});

When('select address and payment methods', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.selectAddress();
    await checkOutPage.clickBillingAddressContinueButton();
    pageFixture.logger?.info('Selected address and payment methods');
  } catch (error) {
    pageFixture.logger?.error('Error while selecting address and payment methods: ' + (error as Error).message);
    throw error;
  }
});

When('confirm order', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickShipContinueButton();
    await checkOutPage.clickshippinfctninue();
    await checkOutPage.clickPaymentContinueButton();
    await checkOutPage.clickPaymentInfoContinueButton();
    await checkOutPage.clickConfirmButtonInCheckout();
    await checkOutPage.downloadInvoiceAsPDF();
    pageFixture.logger?.info('Confirmed the order');
  } catch (error) {
    pageFixture.logger?.error('Error while confirming the order: ' + (error as Error).message);
    throw error;
  }
});

Then('the user should see the order number and able to download the invoice as pdf', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.verifyOrderPlacedSuccessfully();
    pageFixture.logger?.info('Downloaded the invoice as PDF');
  } catch (error) {
    pageFixture.logger?.error('Error verifying order placement or downloading invoice: ' + (error as Error).message);
    throw error;
  }
});

When('click the terms & conditions', { timeout: 20000 }, async function () { 
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickShoppingCart();
    await checkOutPage.clickcheckboxforcheckout();
  } catch (error) {
    pageFixture.logger?.error('Error while clicking terms & conditions checkbox: ' + (error as Error).message);
    throw error;
  }
});

When('click the checkout button', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickCheckoutButton();
  } catch (error) {
    pageFixture.logger?.error('Error while clicking the checkout button: ' + (error as Error).message);
    throw error;
  }
});

Then('the user should see the checkout page and billing details', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.seecheckoutpage();
  } catch (error) {
    pageFixture.logger?.error('Error verifying checkout page and billing details: ' + (error as Error).message);
    throw error;
  }
});

When('click the orders', { timeout: 20000 }, async function () { 
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
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
  } catch (error) {
    pageFixture.logger?.error('Error while placing order using store pickup: ' + (error as Error).message);
    throw error;
  }
});


When('click the invoice pdf', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.downloadInvoicePDF();
  } catch (error) {
    pageFixture.logger?.error('Error downloading the invoice PDF: ' + (error as Error).message);
    throw error;
  }
});

Then('the user should see the entire order details', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.verifyInvoiceDetails();
  } catch (error) {
    pageFixture.logger?.error('Error verifying the invoice details: ' + (error as Error).message);
    throw error;
  }
});

When('enter the billing address and click store pick', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickShoppingCart();
    await checkOutPage.clickcheckboxforcheckout();
    await checkOutPage.clickCheckoutButton();
    await checkOutPage.selectAddress();
    await checkOutPage.clickBillingAddressContinueButton();
    await checkOutPage.selectStorePick();
    await checkOutPage.clickShipContinueButton();
    await checkOutPage.clickPaymentContinueButton();
    await checkOutPage.clickPaymentInfoContinueButton();
  } catch (error) {
    pageFixture.logger?.error('Error entering billing address and store pickup flow: ' + (error as Error).message);
    throw error;
  }
});

When('Proceed and confirm order', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickConfirmButtonInCheckout();
  } catch (error) {
    pageFixture.logger?.error('Error confirming the order: ' + (error as Error).message);
    throw error;
  }
});

Then('the user should see the order code successfully', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.downloadInvoicePDF();
  } catch (error) {
    pageFixture.logger?.error('Error downloading invoice after order code: ' + (error as Error).message);
    throw error;
  }
});

When('click the checkout button and proceed', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickShoppingCart();
    await checkOutPage.clickcheckboxforcheckout();
    await checkOutPage.clickCheckoutButton();
    await checkOutPage.selectAddress();
    await checkOutPage.clickBillingAddressContinueButton();
  } catch (error) {
    pageFixture.logger?.error('Error during click checkout button and proceed: ' + (error as Error).message);
    throw error;
  }
});

When('select the credit card method and enter the required fields', { timeout: 20000 }, async function (dataTable) {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.selectStorePick();
    await checkOutPage.clickShipContinueButton();
    await checkOutPage.checkboxforcreditcard();
    await checkOutPage.clickPaymentContinueButton();
    const [name, number, expMonth, year, code] = dataTable.raw().flat();
    await checkOutPage.fillCreditCardDetails(name, number, expMonth, year, code);
  } catch (error) {
    pageFixture.logger?.error('Error entering credit card details: ' + (error as Error).message);
    throw error;
  }
});

When('proceed the details and confirm', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickPaymentInfoContinueButton();
    await checkOutPage.clickConfirmButtonInCheckout();
  } catch (error) {
    pageFixture.logger?.error('Error during proceed details and confirm: ' + (error as Error).message);
    throw error;
  }
});

When('click the checkout buttons and proceed', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickShoppingCart();
    await checkOutPage.clickcheckboxforcheckout();
    await checkOutPage.clickCheckoutButton();
    await checkOutPage.selectAddress();
    await checkOutPage.clickBillingAddressContinueButton();
    await checkOutPage.clickShipContinueButton();
  } catch (error) {
    pageFixture.logger?.error('Error during click checkout buttons and proceed: ' + (error as Error).message);
    throw error;
  }
});

When('select the two day shipping as two Day Air', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.twodaypickup();
  } catch (error) {
    pageFixture.logger?.error('Error selecting two day air shipping: ' + (error as Error).message);
    throw error;
  }
});

When('proceed the further details', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickshippinfctninue();
    await checkOutPage.clickPaymentContinueButton();
    await checkOutPage.clickPaymentInfoContinueButton();
    await checkOutPage.clickConfirmButtonInCheckout();
  } catch (error) {
    pageFixture.logger?.error('Error in proceeding further details: ' + (error as Error).message);
    throw error;
  }
});

When('select back and click the store pickup', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.backtoshippings();
    await checkOutPage.selectStorePick();
    await checkOutPage.clickShipContinueButton();
  } catch (error) {
    pageFixture.logger?.error('Error selecting store pickup after going back: ' + (error as Error).message);
    throw error;
  }
});

When('proceed the remaining steps and confirm', { timeout: 20000 }, async function () {
  const checkOutPage = new CheckOutPage(pageFixture.page!);
  try {
    await checkOutPage.clickPaymentContinueButton();
    await checkOutPage.clickPaymentInfoContinueButton();
    await checkOutPage.clickConfirmButtonInCheckout();
  } catch (error) {
    pageFixture.logger?.error('Error in proceeding remaining steps and confirm: ' + (error as Error).message);
    throw error;
  }
});
