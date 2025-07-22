import {  When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import Tricentis from '../../pages/TricentisPage';


When('I click the Tricentis Academy image', { timeout: 30000 }, async function () {
  try {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.tricentisImg();
  } catch (error) {
    console.error('Error clicking Tricentis Academy image:', error);
  }
});

Then('the user should redirected to the tricentis webpage', { timeout: 30000 }, async function () {
  try {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.assertPage();
  } catch (error) {
    console.error('Error asserting Tricentis webpage:', error);
  }
});

When('click the upcoming webinars in the footer', { timeout: 30000 }, async function () {
  try {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.upcomingEvents();
  } catch (error) {
    console.error('Error clicking upcoming webinars:', error);
  }
});

Then('the user should see the webinars details', { timeout: 30000 }, async function () {
  try {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.listOfTitlesInFilters();
  } catch (error) {
    console.error('Error listing webinar details:', error);
  }
});

When('click the trials&Demo', { timeout: 30000 }, async function () {
  try {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.trialsDemos();
  } catch (error) {
    console.error('Error clicking trials & demos:', error);
  }
});

Then('the user should see the list of software test tool demo', { timeout: 30000 }, async function () {
  try {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.verifyEnterpriseUrl();
  } catch (error) {
    console.error('Error verifying software test tool demo URL:', error);
  }
});

When('enter the keyword in the filter search box', { timeout: 30000 }, async function () {
  try {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.searchTheKeyword();
  } catch (error) {
    console.error('Error entering keyword in filter search box:', error);
  }
});

Then('the user should see the upcoming partner event', { timeout: 30000 }, async function () {
  try {
    const tricentis = new Tricentis(pageFixture.page!);
    await tricentis.unlockAssert();
  } catch (error) {
    console.error('Error verifying upcoming partner event:', error);
  }
});
