import { Page } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import Tricentis from '../../pages/TricentisPage';




When('I click the Tricentis Academy image', { timeout: 30000 }, async function () {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.tricentisImg();

           
         });

         Then('the user should redirected to the tricentis webpage', { timeout: 30000 }, async function () {
           const tricentis = new Tricentis(pageFixture.page!);
           await tricentis.assertPage();
         });

         When('click the upcoming webinars in the footer', { timeout: 30000 }, async function () {
           const tricentis = new Tricentis(pageFixture.page!);
           await tricentis.upcomingEvents();
         });

         Then('the user should see the webinars details', { timeout: 30000 }, async function () {
           const tricentis = new Tricentis(pageFixture.page!);
           await tricentis.listOfTitlesInFilters();
         });

         When('click the trials&Demo', { timeout: 30000 }, async function () {
           const tricentis = new Tricentis(pageFixture.page!);
           await tricentis.trialsDemos();
         });

         Then('the user should see the list of software test tool demo', { timeout: 30000 }, async function () {
           const tricentis = new Tricentis(pageFixture.page!);
           await tricentis.verifyEnterpriseUrl()
         });


         When('enter the keyword in the filter search box', { timeout: 30000 }, async function () {
           const tricentis = new Tricentis(pageFixture.page!);
           await tricentis.searchTheKeyword();
         });

         Then('the user should see the upcoming partner event', { timeout: 30000 }, async function () {
           const tricentis = new Tricentis(pageFixture.page!);
           await tricentis.unlockAssert();
         });
