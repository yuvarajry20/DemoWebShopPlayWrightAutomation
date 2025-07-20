import { Page } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import Digitaldownload from '../../pages/DigitalDownloadPage';
import DigitalDownloadPage from '../../pages/DigitalDownloadPage';




         When('the user click the digital download category', { timeout: 20000 }, async function () {
            const digital = new DigitalDownloadPage(pageFixture.page!);
            await digital.clickDigitalDownload(); 
         });

         When('click add to cart the product', { timeout: 20000 }, async function () {
            const digital = new DigitalDownloadPage(pageFixture.page!);
           await digital.addToCartMusic();
         });

         Then('the user should see the number of products added in cart', { timeout: 20000 }, async function () {
           const digital = new DigitalDownloadPage(pageFixture.page!);
           await digital.getCartProductQty();
         });

         When('select the filter option', { timeout: 20000 }, async function () {
          const digital = new DigitalDownloadPage(pageFixture.page!);
          await digital.addFilter();

         });

         Then('the user should see the list of products based on the filter', { timeout: 20000 }, async function () {
          const digital = new DigitalDownloadPage(pageFixture.page!);
          await digital.listAllProducts();
         });

         Then('the user should see the digital download product page', { timeout: 20000 }, async function () {
          const digital = new DigitalDownloadPage(pageFixture.page!);
          await digital.assertHeading();
         });