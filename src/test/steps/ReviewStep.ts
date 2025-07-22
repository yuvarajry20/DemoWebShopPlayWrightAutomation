import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import { ReviewPage } from '../../pages/ReviewPage';
import LoginPage from '../../pages/LoginPage';
// import {getReviewTestData} from '../../helper/utility/test-Data/ExcelReviewData.xlsx';
import { getReviewTestData } from '../../helper/utility/ExcelReader1';


let reviewPage: ReviewPage;
let loginPage: LoginPage;

When('I navigate to the {string} category', async function (category: string) {
  reviewPage = new ReviewPage(pageFixture.page!);
  await reviewPage.navigateToCategory();
});

When('I select the product {string}', async function (product: string) {
  await reviewPage.selectGiftCard();
});

When('I click on the {string} link', async function (linkText: string) {
  await reviewPage.clickReviewsLink();
});

Then('I should see the reviews that have been submitted previously', async function () {
  await reviewPage.verifyReviewsDisplayed();
});

When('click on {string} link', async function (linkText: string) {
  await reviewPage.clickAddReviewLink();
});

When('click on submit review', async function () {
  await reviewPage.submitReview();
});

Then('I should see {string}', async function (expectedMessage: string) {
  await reviewPage.verifyRegisterError(expectedMessage);
});

Given('I login with following credentials:', async function (dataTable) {
  loginPage = new LoginPage(pageFixture.page!);
  const data = dataTable.hashes()[0];
  await loginPage.clickLoginLink();
  await loginPage.enterEmail(data.email);
  await loginPage.enterPassword(data.password);
  await loginPage.clickLoginButton();
});

Given('I navigate to the gift cards page and click the product', async function () {
  reviewPage = new ReviewPage(pageFixture.page!);
  await reviewPage.navigateToCategory();
  await reviewPage.selectGiftCard();
});

When('I click on the {string} button', async function (buttonText: string) {
  await reviewPage.clickAddReviewLink();
});

Then('I submit reviews using data from {string} and sheet {string}',{ timeout: 20000 }, async function (file: string, sheet: string) {
   const reviewData = getReviewTestData('src/helper/utility/test-data/ExcelReviewData.xlsx', 'Sheet1');
  //  const reviewData = getReviewTestData(file, sheet);
  for (const data of reviewData as { title: string; text: string; expectedMessage: string }[]) {  
    await reviewPage.clickAddReviewLink();
    await reviewPage.enterReview(data.title, data.text);
    await reviewPage.clickRating();
    await reviewPage.clickSubmitReview();

    const message = await reviewPage.getValidationMessage();
    expect(message.trim()).toBe(data.expectedMessage);
  
  }
});
