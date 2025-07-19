import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import TagPage from '../../pages/TagPage';

let tagPage: TagPage;

// When('I see the list of popular tags', async function () {
//   const tags = await tagPage.getTaggedProducts();
//   await pageFixture.logger?.info(`Popular tags fetched: ${tags}`);
// });

When('I see the list of popular tags', async function () {
  tagPage = new TagPage(pageFixture.page!);
  const tags = await tagPage.getTaggedProducts();
  console.log('Popular tags:', tags);
});

When('I click the View All button', async function () {
  await tagPage.clickViewAll();
  await pageFixture.logger?.info('Clicked on View All button.');
});

When('I click on {string} tag link', async function (tagName: string) {
  await tagPage.clickTagByName(tagName);
  await pageFixture.logger?.info(`Clicked on '${tagName}' tag link.`);
});

Then('I should be redirected to {string} tagged product page', async function (tagName: string) {
  const actualTitle = await tagPage.getTagPageTitle();
  const expectedTitle = `Products tagged with '${tagName.toLowerCase()}'`;
  expect(actualTitle.toLowerCase()).toContain(expectedTitle.toLowerCase());
  await pageFixture.logger?.info(`Validated tag page title: ${actualTitle}`);
});

When('I click on Digital tag link', async function () {
  await tagPage.clickDigitalLinks();
  await pageFixture.logger?.info('Clicked on Digital tag link.');
});

Then('I should see the Digital tagged products page', async function () {
  await tagPage.verifyProductsTaggedWith('digital');
  await pageFixture.logger?.info('Verified Digital tagged products page.');
});

When('I click on Cell tag link', async function () {
  await tagPage.clickCellLinks();
  await pageFixture.logger?.info('Clicked on Cell tag link.');
});

Then('I should see the Cell tagged products page', async function () {
  await tagPage.verifyProductsTaggedWith('cell');
  await pageFixture.logger?.info('Verified Cell tagged products page.');
});
