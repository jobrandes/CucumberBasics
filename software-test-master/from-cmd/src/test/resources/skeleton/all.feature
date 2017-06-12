Feature: Here Testing All Keyword which we used in our Feature File


  Background:
    Given cleaning the database
    And initializing the database

  Scenario: This is Basic Scenario
    Given here i given input
    When when the input processing
    Then then i got the result

  Scenario Outline: Login Functionality
    Given going to the website
    And click on login button
    When user logs in using Username as <username> and Password <password>
    Then login should be successful
    But the dashboard not found

    Examples:
      |username         |password          |
      |Tom                     |password1        |
      |Harry                   |password2        |
      |Jerry                    |password3        |
