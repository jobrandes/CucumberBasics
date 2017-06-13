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
  "duration": 977969,
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
  "duration": 249958465,
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
  "duration": 3614055,
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
  "duration": 1020632,
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
  "duration": 453705,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterTheFollowingDetailsForLogin(DataTable)"
});
formatter.result({
  "duration": 28490322,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickLoginButton()"
});
formatter.result({
  "duration": 85736,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeUserFormPage()"
});
formatter.result({
  "duration": 135373,
  "status": "passed"
});
formatter.after({
  "duration": 147270,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Login with correct username nad password using scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-nad-password-using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "loginfeature;login-with-correct-username-nad-password-using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "loginfeature;login-with-correct-username-nad-password-using-scenario-outline;;1"
    },
    {
      "cells": [
        "execute",
        "automation"
      ],
      "line": 25,
      "id": "loginfeature;login-with-correct-username-nad-password-using-scenario-outline;;2"
    },
    {
      "cells": [
        "testing",
        "qa"
      ],
      "line": 26,
      "id": "loginfeature;login-with-correct-username-nad-password-using-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 308077,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login with correct username nad password using scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-nad-password-using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter execute and automation",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1358245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "execute",
      "offset": 8
    },
    {
      "val": "automation",
      "offset": 20
    }
  ],
  "location": "LoginSteps.iEnterTheUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 187881,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickLoginButton()"
});
formatter.result({
  "duration": 74250,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeUserFormPage()"
});
formatter.result({
  "duration": 166140,
  "status": "passed"
});
formatter.after({
  "duration": 78352,
  "status": "passed"
});
formatter.before({
  "duration": 2829711,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with correct username nad password using scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-nad-password-using-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter testing and qa",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 315461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 8
    },
    {
      "val": "qa",
      "offset": 20
    }
  ],
  "location": "LoginSteps.iEnterTheUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 141117,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickLoginButton()"
});
formatter.result({
  "duration": 65636,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeUserFormPage()"
});
formatter.result({
  "duration": 86967,
  "status": "passed"
});
formatter.after({
  "duration": 78352,
  "status": "passed"
});
});