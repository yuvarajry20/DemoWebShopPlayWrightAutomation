import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import HomePage from '../../pages/HomePage';

let homePage: HomePage;

When('I enter the following email in the newsletter field', async function (dataTable) {
  homePage = new HomePage(pageFixture.page!);
  const data = dataTable.hashes()[0];
  await homePage.enterNewsletterEmail(data.email);
});

When('I click the Subscribe button', async function () {
  await homePage.clickSubscribe();
});

Then('I should see the subscription confirmation message', async function () {
  const message = await homePage.getSubscriptionMessage();
  expect(message?.trim()).not.toBe('Sign up for our newsletter:');
});

Then('I should see the subscription error message', async function () {
  const message = await homePage.getInvalidSubscriptionMessage();
  expect(message?.trim()).toBe('Enter valid email');
});

When('I see the featured products section', async function () {
  await homePage.verifyFeaturedProductsSection();
});

Then('I should see list of featured products displayed', async function () {
  const products = await homePage.getFeaturedProductsList();
  expect(products.length).toBeGreaterThan(0);
});

When('I click the option in poll', async function () {
  homePage = new HomePage(pageFixture.page!);
  await homePage.selectPollOption();
});

When('click the vote button', async function () {
  await homePage.clickVoteButton();
});

Then('I should see an error message', async function () {
  const errorMessage = await homePage.getPollErrorMessage();
  expect(errorMessage).toContain('Do you like nopCommerce?');
});

When('return to homepage', async function () {
  await homePage.navigateToHomePage();
});

Then('I should see list of Recent products displayed', async function () {
  await homePage.verifyRecentlyViewedSection();
  const products = await homePage.getRecentlyViewedProducts();
  expect(products.length).toBeGreaterThan(0);
});
