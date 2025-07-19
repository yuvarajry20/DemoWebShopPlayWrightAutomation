import { Page } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import Nopcommerce from '../../pages/NopCommercePage';
import Nop from 'module';
import NopCommercePage from '../../pages/NopCommercePage';

When('I click the nopcommerce text in the footer of the tricentis', { timeout: 20000 }, async function () {
    const Nop = new NopCommercePage(pageFixture.page!);
    await Nop.nopcommercewebpage();

           
         });

  
Then('the user should see the nopcommerce website successfully', { timeout: 20000 }, async function () {
    const Nop = new NopCommercePage(pageFixture.page!);
    await Nop.verifyNopCommerceURL();
           
         });
