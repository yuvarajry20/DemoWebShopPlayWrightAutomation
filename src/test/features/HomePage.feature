Feature: Laksitha_12APR2025_DemoWebShop_HomePageFunctionality 

Background: 
  Given I want to be in the demowebshop 
    
@ValidNewsletter
Scenario: Subscribe with valid email address
  When I enter the following email in the newsletter field
    | email              |
    | sakthi@gmail.com   |
  And I click the Subscribe button
  Then I should see the subscription confirmation message

@InvalidNewsletter
Scenario: Subscribe with invalid email address
  When I enter the following email in the newsletter field
    | email     |
    | sakthi    |
  And I click the Subscribe button
  Then I should see the subscription error message
  
   @FeaturedProducts
   Scenario: View featured products as list
    When I see the featured products section
    Then I should see list of featured products displayed 
   
    @InvalidPoll
    Scenario: Poll the vote without logging in
    When I click the option in poll
    And click the vote button
    Then I should see an error message                  
    
   