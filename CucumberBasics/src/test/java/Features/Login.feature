@smokeTest
Feature: LoginFeature
  This login feature deals with the login functionality of the application

  Scenario: Login with correct username nad password
    Given I navigate to the login page
    And I enter teh users email address as Email:admin
    Then I verify the count of my salary digits for 100000
    And I just need to see how stuff looks for cucumber-java8
    And I enter the following details for Login
      | username | password      |
      | admin    | adminpassword |
    And I click the login button
    Then I should see the userform page


