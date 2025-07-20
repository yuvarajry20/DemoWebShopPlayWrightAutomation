Feature: Yuvaraj_28APR2025_DemoWebShop_Validate Cusromer Service
  I want to use this template for my feature file

  @News
  Scenario: Validating customer service news feature
    Given I want to be in the demowebshop
    When I click the news link in customer service
    Then I can see the latest news for the website

  @Blog
  Scenario: Validating customer service blog feature
    Given I want to be in the demowebshop
    When i click the blog link in customer service
    Then i can see the blog title
    Then i click the first blog
    And i can add an comment and click new comment
    Then i can see the outcome
  