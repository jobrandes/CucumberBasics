$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "LoginFeature",
  "description": "This login feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.before({
  "duration": 5873709493,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with correct username nad password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-nad-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter teh users email address as Email:admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify the count of my salary digits for 100000",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I just need to see how stuff looks for cucumber-java8",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the following details for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2463339904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 41
    }
  ],
  "location": "LoginSteps.iEnterTehUsersEmailAddressAsEmailAdmin(String)"
});
formatter.result({
  "duration": 2323496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 43
    }
  ],
  "location": "LoginSteps.iVerifyTheCountOfMySalaryDigitsFor(int)"
});
formatter.result({
  "duration": 801164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 52
    }
  ],
  "location": "Java8Step.java:11"
});
formatter.result({
  "duration": 470114,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterTheFollowingDetailsForLogin(DataTable)"
});
formatter.result({
  "duration": 230649730,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickLoginButton()"
});
formatter.result({
  "duration": 347133883,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeUserFormPage()"
});
formatter.result({
  "duration": 39517497,
  "status": "passed"
});
formatter.after({
  "duration": 165729,
  "status": "passed"
});
});