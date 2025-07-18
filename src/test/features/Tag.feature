Feature: DemoWebShop Popular tags

Scenario Outline: Tags should be navigated to product page
  Given I want to be in the demowebshop
  When I see the list of popular tags
  And I click the View All button
  And I click on "<tagName>" tag link
  Then I should be redirected to "<tagName>" tagged product page

Examples:
  | tagName   |
  | Digital   |
  | cell      |