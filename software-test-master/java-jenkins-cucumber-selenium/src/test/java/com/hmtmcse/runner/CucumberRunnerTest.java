package com.hmtmcse.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = { "pretty", "html:target/cucumber","json:target/cucumber/report.json" },
        glue = "com.hmtmcse.steps",
        features = "classpath:cucumber/google.feature"
)
public class CucumberRunnerTest {
}
