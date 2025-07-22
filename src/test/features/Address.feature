Feature: Yuvaraj_21JUL2025_DemoWebShop_Validate Address
Background:
    Given I want to be in the demowebshop
    When I click on login
    When I provide email and password
     |email          |password  |
     |abccy@gmail.com|789456    |
    And I click on the login button
    When I click my email

   @AddAddress
  Scenario: Adding Address 
    And click Addressess and add new
    Then I want to add new address
    And select country and state
    Then i click save
    
    @DeleteAddess
   Scenario: Deleting the already present address
   When i click Addresses
   And i click the Delete button
   Then i should click the yes button in the alert
