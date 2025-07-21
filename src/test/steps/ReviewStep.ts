// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { pageFixture } from '../../hooks/pagefixture';
// import ReviewPage from '../../pages/ReviewPage';
// import LoginPage from '../../pages/LoginPage';

// let reviewPage: ReviewPage;
// let loginPage: LoginPage;

// // Given('I am on the DemoWebShop Homepage {string}', async function (url: string) {
//   reviewPage = new ReviewPage(pageFixture.page!);
//   loginPage = new LoginPage(pageFixture.page!);
// //   await reviewPage.navigateTo(url);
// //   await pageFixture.logger?.info(`Navigated to: ${url}`);
// // });

// Given('I navigate to the {string} category', async function () {
//      reviewPage = new ReviewPage(pageFixture.page!);
//   loginPage = new LoginPage(pageFixture.page!);

//   await reviewPage.clickGiftCategory();
//   await pageFixture.logger?.info('Clicked on Gift Category');
// });

// When('I select the product {string}', async function () {
//   await reviewPage.clickGiftCard();
//   await pageFixture.logger?.info('Clicked on Gift Card');
// });

// When('I click on the {string} link', async function () {
//   await reviewPage.clickReviewsLink();
//   await pageFixture.logger?.info('Clicked on Reviews link');
// });

// Then('I should see the reviews that have been submitted previously', async function () {
//   const reviewText = await reviewPage.getSubmittedReviewText();
//   await pageFixture.logger?.info(`Read review text: ${reviewText}`);
// });

// When('click on {string} link', async function () {
//   await reviewPage.clickAddReviewLink();
//   await pageFixture.logger?.info('Clicked on Add Review link');
// });

// When('click on submit review', async function () {
//   await reviewPage.clickSubmitReview();
//   await pageFixture.logger?.info('Clicked on Submit Review button');
// });

// Then('I should see {string}', async function () {
//   const message = await reviewPage.getRegisterErrorMessage();
//   await expect(message).toContain('Only registered users can write reviews');
//   await pageFixture.logger?.info(`Validation message verified: ${message}`);
// });

// Given('I am logged in to Demowebshop application with {string}', async function (url: string) {
//   await reviewPage.navigateTo(url);
//   await loginPage.clickLoginLink();
//   await loginPage.enterEmail('abccy@gmail.com');
//   await loginPage.enterPassword('789456');
//   await loginPage.clickLoginButton();
//   await pageFixture.logger?.info('Logged in with predefined credentials');
// });

// Given('I navigate to the gift cards page and click the product', async function () {
//   await reviewPage.clickGiftCategory();
//   await reviewPage.clickGiftCard();
//   await pageFixture.logger?.info('Navigated to Gift Card details page');
// });

// When('I click on the {string} button', async function () {
//   await reviewPage.clickGiftCard();
//   await pageFixture.logger?.info('Clicked on Gift Card');
// });

// When('I enter review {string}, {string} and click the rating value', async function (title: string, text: string) {
//   await reviewPage.clickAddReviewLink();
//   await reviewPage.enterReviewTitle(title);
//   await reviewPage.enterReviewText(text);
//   await reviewPage.selectRating();
//   await pageFixture.logger?.info(`Entered review with title: ${title} and text: ${text}`);
// });

// When('I click the {string} button', async function () {
//   await reviewPage.clickSubmitReview();
//   await pageFixture.logger?.info('Clicked on Submit Review');
// });

// Then('I should see the error message {string}', async function (expected: string) {
//   let actualMessage: string = '';

//   if (expected === 'Product review is successfully added.') {
//     actualMessage = await reviewPage.getSuccessMessage();
//     await expect(actualMessage).toBe(expected);
//   } else if (expected === 'Review title is required.') {
//     actualMessage = await reviewPage.getBlankTitleError();
//     await expect(actualMessage).toBe(expected);
//   } else if (expected === 'Review text is required.') {
//     actualMessage = await reviewPage.getBlankTextError();
//     await expect(actualMessage).toBe(expected);
//   } else {
//     throw new Error(`Unsupported expected message: ${expected}`);
//   }

//   await pageFixture.logger?.info(`Validation message verified: ${actualMessage}`);
// });
