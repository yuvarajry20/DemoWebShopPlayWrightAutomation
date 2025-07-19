import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pagefixture';
import BookPage from '../../pages/BookPage';
import { expect } from '@playwright/test';

let bookPage: BookPage;
 bookPage = new BookPage(pageFixture.page!);  // ✅ Initialize here

// // ✅ Now other steps can use bookPage without error
When('I click on the {string} category', async function (category: string) {
  await bookPage.clickBooksCategory();
});


When('I click on the {string} category', async function (category: string) {
  if (category === 'Books') await bookPage.clickBooksCategory();
  else throw new Error(`Unsupported category: ${category}`);
});

Then('I should see a list of books displayed', async function () {
  await bookPage.verifyBookListVisible();
});

When('I select the book titled', async function (dataTable) {
  const titles = dataTable.raw().flat();
  for (const title of titles) await bookPage.selectBookByTitle(title);
});

Then('I should see the product details page', async function () {
  await bookPage.verifyBookDetailsVisible();
});

When('I apply the following filters:', async function (dataTable) {
  for (const { ['Filter Type']: filterType, Value: value } of dataTable.hashes()) {
    await bookPage.applyFilter(filterType, value);
  }
});

Then('the filtered books should be displayed accordingly', async function () {
  await bookPage.verifyBookListVisible();
});

When('I apply each of the following Sort By filters:', async function (dataTable) {
  const sortOptions = dataTable.raw().flat();
  for (const option of sortOptions.slice(1)) await bookPage.applySortByOption(option);
});

Then('each sort result should be applied correctly', async function () {
  const selectedOption = await bookPage.getSelectedSortOption();
  expect(selectedOption).not.toBe('');
});

When('I click the {string} book link', async function (bookName: string) {
  await bookPage.clickBookLink(bookName);
});

When('click the Add to Compare button', async function () {
  await bookPage.clickAddToCompare();
});

Then('click the books category and click the {string} link', async function (bookName: string) {
  await bookPage.clickBooksCategory();
  if (bookName === 'Health Book') await bookPage.clickHealthBook();
});

Then('add it to the compare list', async function () {
  await bookPage.clickAddToCompare();
});

Then('verify and compare the prices of both the product', async function () {
  await bookPage.verifyComparePricesExist();
});

Then('clear the list in compare products', async function () {
  await bookPage.clearCompareList();
});

Then('assert if the lists are cleared', async function () {
  await bookPage.verifyCompareListCleared();
});
