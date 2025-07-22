import {  When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import productpage from "../../pages/ProductPage"


When('the user search for a product', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    const productname = await product.getProductName();
    await product.searchFieldStore(productname);
  } catch (error) {
    console.error('Error in searching product:', error);
  }
});

When('go to the shopping cart', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.clickAddToCart();
    await product.clickShoppingCart();
  } catch (error) {
    console.error('Error in going to shopping cart:', error);
  }
});

When('remove the product from cart', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.updateCartByRemovingItem();
  } catch (error) {
    console.error('Error in removing product from cart:', error);
  }
});

Then('the shopping cart is empty', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.verifyEmptyCartMessage();
  } catch (error) {
    console.error('Error in verifying empty cart:', error);
  }
});

When('see the product title and the product description', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.getTitleOfProduct();
  } catch (error) {
    console.error('Error in seeing product title/description:', error);
  }
});

When('clicks on add to cart', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.clickAddToCart();
  } catch (error) {
    console.error('Error in clicking add to cart:', error);
  }
});

Then('the user should see the successful message', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.verifyAddToCartMessage();
  } catch (error) {
    console.error('Error in verifying add to cart message:', error);
  }
});

When('Increase the count of the product and click add to cart', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.increaseQty();
  } catch (error) {
    console.error('Error in increasing product quantity:', error);
  }
});

Then('the user should see the updated quantity and price in the shopping cart page', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.updatedQtyInWishlist();
  } catch (error) {
    console.error('Error in verifying updated quantity and price:', error);
  }
});

When('click the add to wishlist', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.addToWishlist();
  } catch (error) {
    console.error('Error in clicking add to wishlist:', error);
  }
});

When('click the auto-generated url for the specific product', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.getWishlistUrl();
  } catch (error) {
    console.error('Error in clicking wishlist URL:', error);
  }
});

Then('the user should see the product which is same as in the wishlist', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.assertWishlistUrl();
  } catch (error) {
    console.error('Error in asserting wishlist product:', error);
  }
});

When('logged in and click Email a friend', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.login();
    await product.emailAFriend();
    await product.emailFriendButton();
  } catch (error) {
    console.error('Error in clicking email a friend:', error);
  }
});

When('enter my email and friend email', { timeout: 20000 }, async function (dataTable) {
  try {
    const product = new productpage(pageFixture.page!);
    const data = dataTable.raw();
    const friendemail = data[0][0];
    const myemail = data[1][0];
    await product.emailFriendSend(friendemail, myemail);
  } catch (error) {
    console.error('Error in entering email data:', error);
  }
});

When('click send', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.sendMailFriend();
  } catch (error) {
    console.error('Error in sending email to friend:', error);
  }
});

Then('the user should see the email sent successful message', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.successfulMailSend();
  } catch (error) {
    console.error('Error in verifying successful mail message:', error);
  }
});

Then('the user should see the Invalid email message', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.unsuccessfulMailSend();
  } catch (error) {
    console.error('Error in verifying invalid mail message:', error);
  }
});

When('click add to wishlist', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.addToWishlist();
  } catch (error) {
    console.error('Error in clicking add to wishlist again:', error);
  }
});

When('add to cart the product in the wishlist', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.addToCartCheckboxes();
  } catch (error) {
    console.error('Error in adding wishlist item to cart:', error);
  }
});

Then('the user should see the product is added in the shopping cart', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.verifyTextInCart();
  } catch (error) {
    console.error('Error in verifying product in cart:', error);
  }
});

When('I add to cart the laptop', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.addLaptopCart();
  } catch (error) {
    console.error('Error in adding laptop to cart:', error);
  }
});

When('enter the country and pincode and click Estimate Shipping', { timeout: 20000 }, async function (dataTable) {
  try {
    const product = new productpage(pageFixture.page!);
    const data = dataTable.raw();
    const country = data[0][0];
    const pincode = data[1][0];
    await product.countryPin(country, pincode);
  } catch (error) {
    console.error('Error in entering country and pin:', error);
  }
});

Then('the user should see the shipping details', { timeout: 20000 }, async function () {
  try {
    const product = new productpage(pageFixture.page!);
    await product.estimateShippingDetails();
  } catch (error) {
    console.error('Error in verifying shipping details:', error);
  }
});

