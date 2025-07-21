Feature: Laksitha_20JUL2025_footerlink_functionality_on_homepage

Background:
    Given I want to be in the demowebshop 
    When User scrolls to the footer section

@FooterSection
Scenario: User verifies and clicks the Powered by nopCommerce link
    And User clicks on the Powered by nopCommerce link
    Then User should be navigated to the nopCommerce official website

@SiteMap
Scenario: User clicks the Sitemap link and navigates to SiteMap Page
    And User clicks on the "Sitemap" link page
    Then User should be navigated to the Sitemap page
       
@ContactUs
Scenario: User clicks the Contact us link and submits the query
    And clicks on the Contact us link
    And enters the contact details
      |name      |email       |enquiry           |
      |sakthi    |testemail@gmail.com  |Test Demo enquiry |
    And clicks on the submit button
    Then the confirmation should be displayed

     
     
     

