package Steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
/**
 * Created by 35926 on 6/12/2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(format={"pretty", "html:reports/test-report"},tags= "@smokeTest")
public class CucumberRunner {
}
