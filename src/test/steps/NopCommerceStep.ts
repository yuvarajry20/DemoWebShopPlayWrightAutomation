import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import NopCommercePage from '../../pages/NopCommercePage';
When('I click the nopcommerce text in the footer of the tricentis', { timeout: 20000 }, async function () {
  try {
    const Nop = new NopCommercePage(pageFixture.page!);
    await Nop.nopcommercewebpage();
  } catch (error) {
    console.error('Error in clicking nopcommerce footer link:', error);
  }
});

Then('the user should see the nopcommerce website successfully', { timeout: 20000 }, async function () {
  try {
    const Nop = new NopCommercePage(pageFixture.page!);
    await Nop.verifyNopCommerceURL();
  } catch (error) {
    console.error('Error in verifying nopcommerce URL:', error);
  }
});
