import { Page } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pagefixture";
import productpage from "../../pages/ProductPage"


When('the user search for a product', { timeout: 20000 }, async function () {
  const product = new productpage(pageFixture.page!);
  const productname = await product.getProductName(); // ✅ Await here
  await product.searchFieldStore(productname);        // Pass resolved value
});


         When('go to the shopping cart', { timeout: 20000 }, async function () {
            const product = new productpage(pageFixture.page!);
            await product.clickAddToCart();
            await product.clickShoppingCart();
         });

         When('remove the product from cart', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.updateCartByRemovingItem();
          
         });

         Then('the shopping cart is empty', { timeout: 20000 }, async function () {
            const product = new productpage(pageFixture.page!);
            await product.verifyEmptyCartMessage();
         });

         When('see the product title and the product description', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.getTitleOfProduct();
         });

         When('clicks on add to cart', { timeout: 20000 }, async function () {
            const product = new productpage(pageFixture.page!);
            await product.clickAddToCart();
         });

         Then('the user should see the successful message', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.verifyAddToCartMessage();
         });

         When('Increase the count of the product and click add to cart', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.increaseQty();
         });

         Then('the user should see the updated quantity and price in the shopping cart page', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.updatedQtyInWishlist();
         });

         When('click the add to wishlist', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.addToWishlist();
         });

         When('click the auto-generated url for the specific product', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.getWishlistUrl();
         });

         Then('the user should see the product which is same as in the wishlist', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.assertWishlistUrl();
         });

         When('logged in and click Email a friend', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.login();
           await product.emailAFriend();
           await product.emailFriendButton();
         });

         When('enter my email and friend email', { timeout: 20000 }, async function (dataTable) {
          const product = new productpage(pageFixture.page!);
          const data = dataTable.raw();
          const friendemail=data[0][0];
          const myemail = data[1][0];
          await product.emailFriendSend(friendemail,myemail);

         });


         When('click send', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.sendMailFriend();
         });

         Then('the user should see the email sent successful message', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.successfulMailSend();
         });



         Then('the user should see the Invalid email message', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.unsuccessfulMailSend();
         });


         When('click add to wishlist', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.addToWishlist();
         });


         When('add to cart the product in the wishlist', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.addToCartCheckboxes();
         });

         Then('the user should see the product is added in the shopping cart', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.verifyTextInCart();
         });



         When('I add to cart the laptop', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.addLaptopCart();
         });


         When('enter the country and pincode and click Estimate Shipping', { timeout: 20000 }, async function (dataTable) {
          const product = new productpage(pageFixture.page!);
          const data = dataTable.raw();
          const country=data[0][0];
          const pincode = data[1][0];
          await product.countryPin(country,pincode);
           
         });

         Then('the user should see the shipping details', { timeout: 20000 }, async function () {
           const product = new productpage(pageFixture.page!);
           await product.estimateShippingDetails();
         });
