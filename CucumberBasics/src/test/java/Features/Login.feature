@smokeTest
Feature: LoginFeature
  This login feature deals with the login functionality of the application

  Scenario: Login with correct username nad password
    Given I navigate to the login page
    And I enter the username as admin and password as admin
    And I click the login button
    Then I should see the userform page
