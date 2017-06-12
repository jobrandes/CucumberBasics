$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 2,
  "name": "To test my cucumber test is running I want to run a sample feature file.",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "cucumber setup",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.;cucumber-setup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "sample feature file is ready",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I run the feature file",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "run should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.givenStatement()"
});
formatter.result({
  "duration": 76272787,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.whenStatement()"
});
formatter.result({
  "duration": 219937,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.thenStatment()"
});
formatter.result({
  "duration": 53958,
  "status": "passed"
});
});