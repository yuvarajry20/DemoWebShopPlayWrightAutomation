import { Page, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/Playwrightwrapper';

export default class HomePage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private elements = {
    footerLinks: '//div[@class="footer"]//descendant::a',
    newsletterField: '//input[@id="newsletter-email"]',
    subscribeButton: '//input[@id="newsletter-subscribe-button"]',
    subscriptionMessage: '//div[@id="newsletter-result-block"]',
    invalidSubscriptionMessage: '//div[contains(text(),"Enter valid email")]',
    featuredProductsSection: '//Strong[contains(text(),"Featured products")]',
    featuredProductList: '//div[@class="item-box"]',
    pollOption: '//input[@id="pollanswers-1"]',
    voteButton: '//input[@id="vote-poll-1"]',
    pollResults: '//ul[@class="poll-results"]',
    pollErrorMessage: '//div[@class="poll"]//child::strong',
    recentlyViewedSection: '//Strong[contains(text(),"Recently viewed products")]',
    recentlyViewedList: '//div[@class="block block-recently-viewed-products"]//li',
    homeLink: '//div[@class="header-logo"]//a'
  };

  async enterNewsletterEmail(email: string) {
    await this.page.locator(this.elements.newsletterField).fill(email);
  }

  async clickSubscribe() {
    await this.base.waitAndClick(this.elements.subscribeButton);
  }

  async getSubscriptionMessage(): Promise<string> {
    return (await this.page.locator(this.elements.subscriptionMessage).textContent()) ?? '';
  }

  async getInvalidSubscriptionMessage(): Promise<string> {
    return (await this.page.locator(this.elements.invalidSubscriptionMessage).textContent()) ?? '';
  }

  async verifyFeaturedProductsSection() {
    await expect(this.page.locator(this.elements.featuredProductsSection)).toBeVisible();
  }

  async getFeaturedProductsList(): Promise<string[]> {
    return await this.page.locator(this.elements.featuredProductList).allTextContents();
  }

  async selectPollOption() {
    await this.base.waitAndClick(this.elements.pollOption);
  }

  async clickVoteButton() {
    await this.base.waitAndClick(this.elements.voteButton);
  }

  async getPollResults(): Promise<string> {
    return (await this.page.locator(this.elements.pollResults).textContent()) ?? '';
  }

  async getPollErrorMessage(): Promise<string> {
    return (await this.page.locator(this.elements.pollErrorMessage).textContent()) ?? '';
  }

  async verifyRecentlyViewedSection() {
    await expect(this.page.locator(this.elements.recentlyViewedSection)).toBeVisible();
  }

  async getRecentlyViewedProducts(): Promise<string[]> {
    return await this.page.locator(this.elements.recentlyViewedList).allTextContents();
  }

  async navigateToHomePage() {
    await this.base.waitAndClick(this.elements.homeLink);
  }

  async getFooterLinks(): Promise<string[]> {
    return await this.page.locator(this.elements.footerLinks).allTextContents();
  }
}
