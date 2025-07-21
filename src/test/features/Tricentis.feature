Feature: Divraj_20JUL2025_Demowebshop_Tricentis

Background:
Given I want to be in the demowebshop
When I click the Tricentis Academy image

@Tricentis_Webpage
Scenario: To verify the user redirected to the tricentis page 
Then the user should redirected to the tricentis webpage

@Tricentis_Upcoming_Events
Scenario: To display the upcoming webinars title

And click the upcoming webinars in the footer
Then the user should see the webinars details

@Tricentis_Upcoming_Event_Filter
Scenario: To verify the filter the upcoming event

And click the upcoming webinars in the footer
And enter the keyword in the filter search box
Then the user should see the upcoming partner event

@Tricentis_Demo_trial
Scenario:To verify the demo trial in the tricentis

And click the trials&Demo
Then the user should see the list of software test tool demo



