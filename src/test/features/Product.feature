Feature: Divraj_21JUL2025_Demowebshop_Shopping_cart

Background:
Given I want to be in the demowebshop
When the user search for a product

@shoppingCart_Functionality
Scenario: Adding and Removing a Product in the Shopping Cart

And go to the shopping cart
And remove the product from cart
Then the shopping cart is empty

@ProductDetailsValidation

Scenario: Validating the Product Details and Adding to Cart

And see the product title and the product description
And clicks on add to cart
Then the user should see the successful message

@Verify_Wishlist_Product_URL
Scenario: Verify the product is same as in the auto-generated url in wishlist page

And click the add to wishlist
And click the auto-generated url for the specific product
Then the user should see the product which is same as in the wishlist
    
@IncreaseTheQTYoftheproduct
Scenario: verify the quantity of the product is increased

And Increase the count of the product and click add to cart
Then the user should see the updated quantity and price in the shopping cart page

@ValidEmailafriend
Scenario: send a product details through valid email a friend

And logged in and click Email a friend
And enter my email and friend email
|abcd@gmail.com         |
|abcggggg123@Gmail.com  |
And click send 
Then the user should see the email sent successful message

@InvalidEmailfriend
Scenario: send a product details through Invalid email a friend

And logged in and click Email a friend
And enter my email and friend email
|abcd                   |
|abcggggg123@Gmail.com  |
And click send 
Then the user should see the Invalid email message

@Wishlisttocart
Scenario: Verify the product is added in wishlist to shopping cart

And click add to wishlist
And add to cart the product in the wishlist
Then the user should see the product is added in the shopping cart

@ShippingEstimation
Scenario: To get a Shipping Estimation details

When I add to cart the laptop 
And enter the country and pincode and click Estimate Shipping
|India|
|637505|
Then the user should see the shipping details