import { expect, Page, Locator } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/Playwrightwrapper';

export default class BookPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private elements = {
    booksCategory: "//a[contains(text(),'Books')][3]",
    bookTitle: "//div[@class='page category-page']//h1",
    fictionBook: "//a[contains(text(),'Fiction EX')]",
    fictionDetail: "//div[@class='overview']",
    sortByDropdown: "//select[@id='products-orderby']",
    displayDropdown: "//select[@id='products-pagesize']",
    viewAsDropdown: "//select[@id='products-viewmode']",
    priceFilterLinks: "//div[@class='side-2']//a[contains(@href, 'price')]",
    computingInternetBook: "(//a[contains(text(),'Computing and Internet')])[2]",
    healthBook: "//h2[@class='product-title']//a[contains(text(),'Health Book')]",
    addToCompareButton: "//input[@value='Add to compare list']",
    clearCompareList: "//a[contains(text(),'Clear list')]",
    emptyCompareMessage: "//div[@class='page-body']",
    comparePrices: "//table[@class='compare-products-table']//tr[3]/td"
  };

  async clickBooksCategory() {
    await this.base.waitAndClick(this.elements.booksCategory);
  }

  async verifyBookListVisible() {
    const locator = this.page.locator(this.elements.bookTitle);
    await expect(locator).toBeVisible();
  }

  async selectBookByTitle(title: string) {
    if (title === 'Fiction EX') {
      await this.base.waitAndClick(this.elements.fictionBook);
    } else {
      throw new Error(`Unsupported book title: ${title}`);
    }
  }

  async verifyBookDetailsVisible() {
    await expect(this.page.locator(this.elements.fictionDetail)).toBeVisible();
  }

  async applyFilter(filterType: string, value: string) {
    switch (filterType) {
      case 'Sort By':
        await this.page.selectOption(this.elements.sortByDropdown, { label: value });
        break;
      case 'Display By':
        await this.page.selectOption(this.elements.displayDropdown, value);
        break;
      case 'View As':
        await this.page.selectOption(this.elements.viewAsDropdown, { label: value });
        break;
      case 'Price':
        const priceLinks = this.page.locator(this.elements.priceFilterLinks);
        const count = await priceLinks.count();
        for (let i = 0; i < count; i++) {
          const text = await priceLinks.nth(i).textContent();
          if (text?.trim() === value) {
            await priceLinks.nth(i).click();
            break;
          }
        }
        break;
      default:
        throw new Error(`Unknown filter type: ${filterType}`);
    }
  }

  async applySortByOption(option: string) {
    await this.page.selectOption(this.elements.sortByDropdown, { label: option });
  }

  async getSelectedSortOption() {
    const selected = await this.page.locator(`${this.elements.sortByDropdown} option:checked`).textContent();
    return selected?.trim() || '';
  }

  async clickBookLink(bookName: string) {
    if (bookName === 'Computing and Internet') {
      await this.base.waitAndClick(this.elements.computingInternetBook);
    } else {
      throw new Error(`Unsupported book name: ${bookName}`);
    }
  }

  async clickAddToCompare() {
    await this.base.waitAndClick(this.elements.addToCompareButton);
  }

  async clickHealthBook() {
    await this.base.waitAndClick(this.elements.healthBook);
  }

  async verifyComparePricesExist() {
    const prices = this.page.locator(this.elements.comparePrices);
    await expect(prices.first()).toBeVisible();
  }

  async clearCompareList() {
    await this.base.waitAndClick(this.elements.clearCompareList);
  }

  async verifyCompareListCleared() {
    const message = this.page.locator(this.elements.emptyCompareMessage);
    await expect(message).toContainText('You have no items to compare');
  }
}
