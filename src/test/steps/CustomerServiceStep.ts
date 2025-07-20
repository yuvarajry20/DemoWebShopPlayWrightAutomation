import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import CustomerServicePage from '../../pages/CustomerServicePage';

let customerServicePage: CustomerServicePage;

When('I click the news link in customer service', async function () {
  customerServicePage = new CustomerServicePage(pageFixture.page!);
  await customerServicePage.clickNewsLink();
  await pageFixture.logger?.info('Clicked on News link under Customer Service section');
});

Then('I can see the latest news for the website', async function () {
  const newsTitle = await customerServicePage.getLatestNewsTitle();
  console.log(`Latest News Title: ${newsTitle}`);
  expect(newsTitle).not.toBe('');
  await pageFixture.logger?.info(`Validated news title: ${newsTitle}`);
});

When('i click the blog link in customer service', async function () {
  customerServicePage = new CustomerServicePage(pageFixture.page!);
  await customerServicePage.clickBlogLink();
  await pageFixture.logger?.info('Clicked on Blog link under Customer Service section');
});

Then('i can see the blog title', async function () {
  const title = await customerServicePage.getBlogTitle();
  console.log(`Blog Title: ${title}`);
  expect(title).not.toBe('');
  await pageFixture.logger?.info(`Fetched blog title: ${title}`);
});

Then('i click the first blog',{ timeout: 20000 }, async function () {
  await customerServicePage.clickFirstBlog();
  await pageFixture.logger?.info('Clicked on the first blog post');
});

Then('i can add an comment and click new comment',{ timeout: 20000 }, async function () {
  await customerServicePage.addComment('Thanks for the update!');
  await customerServicePage.clickPostCommentButton();
  await pageFixture.logger?.info('Filled comment and clicked on Post Comment button');
});

Then('i can see the outcome', async function () {
  const message = await customerServicePage.getCommentResult();
  console.log(`Comment Outcome: ${message}`);
  expect(message).toContain('successfully');
  await pageFixture.logger?.info(`Comment posted successfully: ${message}`);
});
