import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/Playwrightwrapper";
import path from "path";
import fs from "fs";



export default class NopCommercePage {
    private base:PlaywrightWrapper;
    

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

private Elements = {
    loginButtonHomePage: '//a[@class="ico-register"]//parent::li//following-sibling::li[1]//child::a',
  emailField: '//div[@class="form-fields"]//descendant::div[2]//label//following-sibling::input',
  passwordField: '//div[@class="form-fields"]//descendant::div[3]//label//following-sibling::input',
  loginButtonSubmit: '//div[@class="inputs reversed"]//following-sibling::div//input',
  searchStoreField: '//div[@class="search-box"]//descendant::input[2]//preceding-sibling::input',
  productTitle: '//h2//a[@href="/album-3"]',
  assertnotification: '//div[@class="master-wrapper-page"]//preceding-sibling::div[@id="bar-notification"]//p',
  addToCart: '//input[@class="button-2 product-box-add-to-cart-button"]',
  addTocartnumber: '//span[contains(text(),"Shopping cart")]//following-sibling::span',
  shoppingcart: '#topcartlink > a',
  removefromcart: '//td[@class="product-picture"]//preceding-sibling::td//descendant::input',
  updatecart: '//input[@class="button-2 continue-shopping-button"]//preceding-sibling::input',
  emptycart: '//div[@class="page-title"]//parent::div//div[2]',
  cartproductavailable: '//td[@class="product-picture"]//following-sibling::td//child::a',
  addtowishlist: '#add-to-wishlist-button-53',
  clickwishlist: '//li[@id="topcartlink"]//following-sibling::li//child::a',
  imgalbum3: '//div[@class="picture"]//a[@title="Show details for 3rd Album"]',
  productnameinwishlist: '//td[@class="product-picture"]//following-sibling::td//a',
  urlforwishlist: '//div[@class="share-info"]//p//a[@class="share-link"]',
  urlsharing: '//div[@class="share-info"]//child::p//span',
  increaseqty: '//input[@class="qty-input"]',
  qtyten: '//span[@class="product-price order-total"]//child::strong',
  addtocartinqty: '//input[@class="button-1 add-to-cart-button"]',
  giftcardpage: '//h2[@class="product-title"]//a[text()="$25 Virtual Gift Card"]',
  emailfriendbtn: 'input[class$="email-a-friend-button"]',
  friendemail: 'input[class^="friend-email"]',
  myemail: 'input[class*="your-email"]',
  sendmail: '.send-email-a-friend-button',
  successfulsentmail: '//div[@class="title"]//following-sibling::div[@class="result"]',
  invalidemailmsg: '//span[@class="field-validation-error"]//span',
  addtocartcheckbox: '//td[@class="add-to-cart"]//child::input',
  addtocartbtnbelowchkbox: '//input[@class="button-2 wishlist-add-to-cart-button"]',
  assertcartwishlist: '//td[@class="product-picture"]//following-sibling::td//a',
  shippingineday: '//ul[@class="shipping-results"]//li[2]//child::span',
  countryclick: '//label[contains(text(),"Country:")]//following-sibling::select',
  zipcode: '//label[contains(text(),"Zip / postal code:")]//following-sibling::input',
  shippingestimate: '//input[@class="button-2 estimate-shipping-button"]'
};

async searchFieldStore(product: string) {
    await this.page.locator(this.Elements.searchStoreField).fill(product);
    await this.page.keyboard.press('Enter');
    console.log(`🔍 Searched for product: ${product}`);
  }

  async getTitleOfProduct(){
    const title = await this.page.locator(this.Elements.productTitle).textContent();
    console.log(`📋 Retrieved product title: ${title?.trim()}`);
    return title?.trim() || '';
  }


  async clickAddToCart() {
    await this.page.locator(this.Elements.addToCart).click();
    console.log("🛒 Clicked on 'Add to Cart' button.");
  }

  async verifyAddToCartMessage() {
    const cartMessageLocator = this.page.locator(this.Elements.assertnotification);
    const productCountLocator = this.page.locator(this.Elements.addTocartnumber);

    await cartMessageLocator.waitFor({ state: 'visible', timeout: 5000 });
    
    const actualMessage = await cartMessageLocator.textContent();
    const expectedMessage = "The product has been added to your shopping cart";

    if (actualMessage?.trim().toLowerCase() === expectedMessage.toLowerCase()) {
      expect(actualMessage?.trim()).toBe(expectedMessage);
    } else {
      expect('').toBe(actualMessage?.trim()); // Force fail with meaningful mismatch
    }

    const numberOfProducts = await productCountLocator.textContent();
    console.log(`🧾 Number of products in cart: ${numberOfProducts?.trim()}`);
  }
  async clickShoppingCart() {
    const cartLink = this.page.locator(this.Elements.shoppingcart);
    await cartLink.hover();
    await cartLink.click();
    await this.page.waitForTimeout(3000);
    console.log("🛒 Clicked on shopping cart link.");
  }

  async updateCartByRemovingItem() {
    await this.page.locator(this.Elements.removefromcart).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.Elements.updatecart).click();
    await this.page.waitForTimeout(3000);
    console.log("🧹 Updated cart by removing an item.");
  }

  async verifyEmptyCartMessage() {
    const actualText = await this.page.locator(this.Elements.emptycart).textContent();
    const expectedText = "Your Shopping Cart is empty!";
    expect(actualText?.trim()).toBe(expectedText);
    console.log("🧾 Verified empty cart message: " + actualText?.trim());
  }
  async addToWishlist() {
    await this.page.locator(this.Elements.imgalbum3).click();
    await this.page.locator(this.Elements.addtowishlist).click();
    await this.page.locator(this.Elements.clickwishlist).click();
    console.log("💖 Added item to wishlist and navigated to wishlist.");
  }

  async getWishlistUrl() {
    try {
      await this.page.reload();
      const shareLink = this.page.locator(this.Elements.urlforwishlist);
      await shareLink.waitFor({ state: 'visible', timeout: 30000 });
      const wishlistUrl = await shareLink.textContent();
      console.log("🔗 Wishlist URL for sharing: " + wishlistUrl?.trim());
    } catch (error) {
      console.error("❌ Failed to retrieve Wishlist URL: ", error);
    }
  }

  async assertWishlistUrl() {
    try {
      const actualUrl = this.page.url();
      const expectedUrl = "https://demowebshop.tricentis.com/wishlist";
      expect(actualUrl).toBe(expectedUrl);
      console.log("✅ Wishlist URL matched: " + actualUrl);
    } catch (error) {
      console.error("❌ Wishlist URL assertion failed: ", error);
      throw error;
    }
  }

  async increaseQty() {
    await this.page.locator(this.Elements.imgalbum3).click();
    const qtyField = this.page.locator(this.Elements.increaseqty);
    await qtyField.fill('10');
    await this.page.locator(this.Elements.addtocartinqty).click();

    const cartLink = this.page.locator(this.Elements.shoppingcart);
    await cartLink.hover();
    await cartLink.click();

    console.log("🛒 Increased quantity to 10 and added to cart.");
  }

async login(): Promise<void> {
    await this.page.locator(this.Elements.loginButtonHomePage).click();
    await this.page.locator(this.Elements.emailField).fill('Lorenz97@gmail.com');
    await this.page.locator(this.Elements.passwordField).fill('Divraj@1234');
    await this.page.locator(this.Elements.loginButtonSubmit).click();

    console.log(`✅ Logged in with credentials:`);
    
  }


  async updatedQtyInWishlist() {
    const rows = this.page.locator('//table[@class="cart-total"]//tr');
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
      const firstCol = this.page.locator(`//table[@class='cart-total']//tr[${i + 1}]//td[1]//span[1]`);
      const secondCol = this.page.locator(`//table[@class='cart-total']//tr[${i + 1}]//td[2]//span/span`);
      
      const col1Text = await firstCol.textContent();
      const col2Text = await secondCol.textContent();

      console.log(`${col1Text} ${col2Text}`);
    }

    const actualQty = await this.page.locator(this.Elements.qtyten).textContent();
    expect(actualQty?.trim()).toBe('10.00');
    console.log("✅ Updated quantity in wishlist: 10.00");
  }

  async emailAFriend() {
    await this.page.locator(this.Elements.giftcardpage).click();
    console.log("📩 Clicked on 'Email a friend' page.");
  }

  async emailFriendButton() {
    await this.page.locator(this.Elements.emailfriendbtn).click();
    console.log("📩 Clicked on 'Email a friend' button.");
  }

  async emailFriendSend(friendEmail: string, myEmail: string) {
    await this.page.locator(this.Elements.friendemail).fill(friendEmail);
    const myEmailField = this.page.locator(this.Elements.myemail);
    await myEmailField.fill('');
    await myEmailField.fill(myEmail);
    console.log(`📨 Entered friend's email: ${friendEmail}, your email: ${myEmail}`);
  }

  async sendMailFriend() {
    await this.page.locator(this.Elements.sendmail).click();
    console.log("📬 Clicked on 'Send' button.");
  }

  async successfulMailSend() {
    const actualText = await this.page.locator(this.Elements.successfulsentmail).textContent();
    expect(actualText?.trim()).toBe("Your message has been sent.");
    console.log("✅ Email sent successfully.");
  }

  async unsuccessfulMailSend() {
    const actualText = await this.page.locator(this.Elements.invalidemailmsg).textContent();
    expect(actualText?.trim()).toBe("Wrong email");
    console.log("❌ Email send failed.");
  }

  async addToCartCheckboxes() {
    await this.page.reload();

    const checkbox = this.page.locator('//form//table//tbody//tr//td[2]//input');
    const addButton = this.page.locator('//input[@class="button-2 wishlist-add-to-cart-button"]');

    await checkbox.waitFor({ state: 'visible', timeout: 30000 });
    await checkbox.check();
    console.log("☑️ Checked item.");

    await addButton.waitFor({ state: 'attached', timeout: 30000 });
    await addButton.click();
    console.log("🛒 Added item using checkbox.");
  }

  async verifyTextInCart() {
    const cartProduct = await this.page.locator("//td[@class='product-picture']//following-sibling::td//a");
    await expect(cartProduct).toBeVisible({ timeout: 30000 });

    const productName = await cartProduct.textContent();
    expect(productName?.trim()).toBe("3rd Album");
    console.log("✅ Product in cart: 3rd Album");
  }

  async addLaptopCart() {
    await this.page.locator(this.Elements.searchStoreField).fill("laptop");
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.Elements.addToCart).click();

    const cartLink = this.page.locator(this.Elements.shoppingcart);
    await cartLink.hover();
    await cartLink.click();
    console.log("💻 Added laptop to cart.");
  }

  async countryPin(country: string, pincode: string) {
    await this.page.waitForTimeout(3000);
    await this.page.reload();
    const countryDropdown = this.page.locator('select#CountryId');
    await countryDropdown.selectOption({ label: country });

    await this.page.locator(this.Elements.zipcode).fill(pincode);
    await this.page.locator(this.Elements.shippingestimate).click();
    console.log(`📍 Country: ${country}, Pincode: ${pincode}`);
  }

  async estimateShippingDetails() {
    const items = await this.page.locator("//ul[@class='shipping-results']//li//strong").allTextContents();
    console.log("🚚 Shipping Options:");
    items.forEach(option => console.log(option));

    const shippingText = await this.page.locator(this.Elements.shippingineday).textContent();
    expect(shippingText?.trim()).toBe("The one day air shipping");
  }

  async getProductName(): Promise<string> {
    const filePath = path.join(__dirname, '../helper/utility/testdata.properties');
    const content = fs.readFileSync(filePath, 'utf-8');
    const productLine = content.split('\n').find(line => line.startsWith('Product='));
    return productLine?.split('=')[1].trim() || '';
  }
}