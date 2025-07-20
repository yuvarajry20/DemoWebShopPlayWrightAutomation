import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/Playwrightwrapper";


export default class DigitalDownloadPage {
    private base:PlaywrightWrapper;
    

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

private Elements = {
  digitalDown: '//div[@class="block block-manufacturer-navigation"]//preceding-sibling::div//descendant::ul//li[5]//a',
  music2: '//div[@class="product-grid"]//div[1]//div[@class="prices"]//span[text()="10.00"]//parent::div//following-sibling::div//input',
  grid: '//span[contains(text(),"View as")]//following-sibling::select',
  gridOption: '//select[@id="products-viewmode"]//option[2]',
  qtyProductCount: '//a[@class="ico-cart"]//span[2]',
  sortBy: '//div[@class="product-page-size"]//preceding-sibling::div[2]//following-sibling::div//select',
  sortOption: '//select[@id="products-orderby"]//option[2]',
  headingOfDigital: '//div[@class="page category-page"]//descendant::h1',
};

async clickDigitalDownload() {
    await this.page.locator(this.Elements.digitalDown).click();
    console.log("Clicked on 'Digital downloads' link.");
  }
  async addToCartMusic() {
    await this.page.locator(this.Elements.music2).click();
    console.log("Added music album to cart.");
  }
   async getCartProductQty() {
    const count = await this.page.locator(this.Elements.qtyProductCount).textContent();
    console.log("Number of products in cart: " + count);

    const expectedHeading = await this.page.locator(this.Elements.headingOfDigital).textContent();
    expect(expectedHeading).toBe('Digital downloads');
  }

  async addFilter() {
  await this.page.locator(this.Elements.grid).selectOption({ index: 1 });
  console.log("Applied grid filter.");
}
async listAllProducts() {
  const productLocator = this.page.locator('//h2[@class="product-title"]//a');
  await productLocator.first().waitFor({ state: 'visible', timeout: 10000 });

  const count = await productLocator.count();

  console.log("The products in the digital download:");
  for (let i = 0; i < count; i++) {
    const productName = await productLocator.nth(i).textContent();
    console.log(`- ${productName}`);
  }

  const expectedHeading = "Digital downloads";
  const actualHeading = await this.page.locator(this.Elements.headingOfDigital).textContent();
  expect(actualHeading).toBe(expectedHeading);
}
async assertHeading() {
  const expected = "Digital downloads";

  const headingLocator = this.page.locator(this.Elements.headingOfDigital);
  await headingLocator.waitFor({ state: "visible", timeout: 5000 });

  const actual = (await headingLocator.textContent());

  expect(actual).toBe(expected);

  console.log("Asserted heading: " + actual);
}




}