Feature: Laksitha_14APR2025_DemoWebShop_Book_Product_Functionality

  Background:
     Given I want to be in the demowebshop

  @BooksList
  Scenario: View all books available
    When I click on the "Books" category
    Then I should see a list of books displayed

  @BookDetails
  Scenario: View details of a specific book
    When I click on the "Books" category
    And I select the book titled
    |Fiction EX |
    Then I should see the product details page   

  @BooksFilters
  Scenario: Apply filter options for books
  When I click on the "Books" category
  And I apply the following filters:
      | Filter Type | Value              |
      | Sort By     | Price: High to Low |
      | Display By  | 4                  |
      | View As     | List               |
      | Price       | Under 25.00        |
    Then the filtered books should be displayed accordingly
    
@BooksSortBy
Scenario: Apply all Sort By options for books
  When I click on the "Books" category
  And I apply each of the following Sort By filters:
    | Sort By             |
    | Position            |
    | Name: A to Z        |
    | Name: Z to A        |
    | Price: Low to High  |
    | Price: High to Low  |
  Then each sort result should be applied correctly
  
@CompareProduct
Scenario: Comparing two different products
  When I click on the "Books" category
  And I click the "Computing and Internet" book link
  And click the Add to Compare button
  Then click the books category and click the "Health Book" link
  And add it to the compare list
  Then verify and compare the prices of both the product  
  Then clear the list in compare products
  Then assert if the lists are cleared
  
   
    