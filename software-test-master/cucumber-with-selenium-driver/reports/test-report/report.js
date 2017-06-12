$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google_calculator.feature");
formatter.feature({
  "line": 3,
  "name": "Check addition in Google calculator content In order to verify that google calculator work correctly As a user of google I should be able to get correct addition result",
  "description": "",
  "id": "check-addition-in-google-calculator-content-in-order-to-verify-that-google-calculator-work-correctly-as-a-user-of-google-i-should-be-able-to-get-correct-addition-result",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@googleCalculator"
    }
  ]
});
formatter.before({
  "duration": 3519685390,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Addition",
  "description": "",
  "id": "check-addition-in-google-calculator-content-in-order-to-verify-that-google-calculator-work-correctly-as-a-user-of-google-i-should-be-able-to-get-correct-addition-result;addition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"2+2\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should get result as \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalculatorSteps.i_open_google()"
});
formatter.result({
  "duration": 5141722728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2+2",
      "offset": 9
    }
  ],
  "location": "GoogleCalculatorSteps.i_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 119706739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "GoogleCalculatorSteps.i_should_get_result_as(String)"
});
formatter.result({
  "duration": 1067244720,
  "status": "passed"
});
formatter.after({
  "duration": 760733147,
  "status": "passed"
});
});