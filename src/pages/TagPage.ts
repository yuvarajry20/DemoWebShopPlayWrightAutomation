import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/Playwrightwrapper';

export default class TagPage {
  protected base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  async getTaggedProducts(): Promise<string[]> {
    const tagsLocator = this.page.locator("//div[@class='tags']//li");
    const count = await tagsLocator.count();
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = await tagsLocator.nth(i).textContent();
      result.push(text?.trim() || '');
    }
    console.log("Tagged products:", result);
    return result;
  }

  async clickViewAll(timeout: number = 10000): Promise<void> {
    const viewAllLocator = "//a[contains(text(),'View all')]";
    await this.page.locator(viewAllLocator).waitFor({ state: 'visible', timeout });
    await this.base.waitAndClick(viewAllLocator);
    console.log("Clicked on 'View All' link.");
  }

  async clickTagByName(tagName: string, timeout: number = 10000): Promise<void> {
    const tagLocator = `//ul[@class='product-tags-list']//a[normalize-space(text())='${tagName}']`;
    await this.page.locator(tagLocator).waitFor({ state: 'visible', timeout });
    await this.base.waitAndClick(tagLocator);
    console.log(`Clicked on '${tagName}' tag link.`);
  }

  async getTagPageTitle(): Promise<string> {
    const titleLocator = this.page.locator("//div[@class='page-title'] h1");
    await titleLocator.waitFor({ state: 'visible' });
    const title = await titleLocator.textContent();
    console.log(`Page title fetched: ${title?.trim()}`);
    return title?.trim() ?? '';
  }

  async clickDigitalLinks(): Promise<void> {
    const digitalTagLocator = this.page.locator('//ul[@class="product-tags-list"]//a[normalize-space(text())="digital"]');
    await digitalTagLocator.scrollIntoViewIfNeeded();
    await digitalTagLocator.waitFor({ state: 'visible' });
    await this.base.waitAndClick(digitalTagLocator);
    console.log("Clicked on 'Digital' tag link.");
  }

  async clickCellLinks(): Promise<void> {
    const cellTagLocator = this.page.locator('//ul[@class="product-tags-list"]//a[normalize-space(text())="cell"]');
    await cellTagLocator.scrollIntoViewIfNeeded();
    await cellTagLocator.waitFor({ state: 'visible' });
    await this.base.waitAndClick(cellTagLocator);
    console.log("Clicked on 'Cell' tag link.");
  }

  async verifyProductsTaggedWith(tagName: string): Promise<void> {
    const headerLocator = this.page.locator('//div[@class="page-title"]//h1');
    await headerLocator.waitFor({ state: 'visible' });
    const headerText = await headerLocator.textContent();
    expect(headerText?.trim()).toBe(`Products tagged with '${tagName}'`);
    console.log(`Verified products tagged with '${tagName}'`);
  }
}
