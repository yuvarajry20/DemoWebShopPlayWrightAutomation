import { Locator, Page } from '@playwright/test';

export default class HomePage {
  readonly page: Page;
  readonly newsletterField: Locator;
  readonly subscribeButton: Locator;
  readonly subscriptionMessage: Locator;
  readonly invalidSubscriptionMessage: Locator;
  readonly featuredProductsSection: Locator;
  readonly featuredProductList: Locator;
  readonly pollOption: Locator;
  readonly voteButton: Locator;
  readonly pollErrorMessage: Locator;
  readonly recentlyViewedSection: Locator;
  readonly recentlyViewedList: Locator;
  readonly homeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newsletterField = page.locator('input#newsletter-email');
    this.subscribeButton = page.locator('input#newsletter-subscribe-button');
    this.subscriptionMessage = page.locator('div#newsletter-result-block');
    this.invalidSubscriptionMessage = page.locator('div:has-text("Enter valid email")');
    this.featuredProductsSection = page.locator('strong:has-text("Featured products")');
    this.featuredProductList = page.locator('div.item-box');
    this.pollOption = page.locator('input#pollanswers-1');
    this.voteButton = page.locator('input#vote-poll-1');
    this.pollErrorMessage = page.locator('div.poll >> strong');
    this.recentlyViewedSection = page.locator('strong:has-text("Recently viewed products")');
    this.recentlyViewedList = page.locator('div.block-recently-viewed-products li');
    this.homeLink = page.locator('div.header-logo a');
  }

  async enterNewsletterEmail(email: string) {
    await this.newsletterField.fill(email);
  }

  async clickSubscribe() {
    await this.subscribeButton.click();
  }

  async getSubscriptionMessage() {
    return await this.subscriptionMessage.textContent();
  }

  async getInvalidSubscriptionMessage() {
    return await this.invalidSubscriptionMessage.textContent();
  }

  async verifyFeaturedProductsVisible() {
    await this.featuredProductsSection.isVisible();
  }

  async getFeaturedProducts() {
    return await this.featuredProductList.allTextContents();
  }

  async selectPollOption() {
    await this.pollOption.click();
  }

  async clickVoteButton() {
    await this.voteButton.click();
  }

  async getPollErrorMessage() {
    return await this.pollErrorMessage.textContent();
  }

  async verifyRecentlyViewedSection() {
    await this.recentlyViewedSection.isVisible();
  }

  async getRecentlyViewedProducts() {
    return await this.recentlyViewedList.allTextContents();
  }

  async navigateToHomePage() {
    await this.homeLink.click();
  }
}
