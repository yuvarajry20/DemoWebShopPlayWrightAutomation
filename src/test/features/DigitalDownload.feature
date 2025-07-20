Feature: Divraj_18JUL2025_Demowebshop_Categories

Background:
Given I want to be in the demowebshop
When the user click the digital download category

@addtocarttheproduct
Scenario: add product to the cart

And click add to cart the product
Then the user should see the number of products added in cart

@filtersindigitaldownload
Scenario: select the filters view product

And select the filter option
Then the user should see the list of products based on the filter

@Digitaldownload
Scenario: verify the user is on the digital download page

Then the user should see the digital download product page