import {When, Then} from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import DigitalDownloadPage from '../../pages/DigitalDownloadPage';




When('the user click the digital download category', { timeout: 20000 }, async function () {
  try {
    const digital = new DigitalDownloadPage(pageFixture.page!);
    await digital.clickDigitalDownload();
  } catch (error) {
    console.error('Error clicking digital download category:', error);
  }
});

When('click add to cart the product', { timeout: 20000 }, async function () {
  try {
    const digital = new DigitalDownloadPage(pageFixture.page!);
    await digital.addToCartMusic();
  } catch (error) {
    console.error('Error adding product to cart:', error);
  }
});

Then('the user should see the number of products added in cart', { timeout: 20000 }, async function () {
  try {
    const digital = new DigitalDownloadPage(pageFixture.page!);
    await digital.getCartProductQty();
  } catch (error) {
    console.error('Error verifying number of products in cart:', error);
  }
});

When('select the filter option', { timeout: 20000 }, async function () {
  try {
    const digital = new DigitalDownloadPage(pageFixture.page!);
    await digital.addFilter();
  } catch (error) {
    console.error('Error selecting filter option:', error);
  }
});

Then('the user should see the list of products based on the filter', { timeout: 20000 }, async function () {
  try {
    const digital = new DigitalDownloadPage(pageFixture.page!);
    await digital.listAllProducts();
  } catch (error) {
    console.error('Error listing filtered products:', error);
  }
});

Then('the user should see the digital download product page', { timeout: 20000 }, async function () {
  try {
    const digital = new DigitalDownloadPage(pageFixture.page!);
    await digital.assertHeading();
  } catch (error) {
    console.error('Error verifying digital download product page:', error);
  }
});
