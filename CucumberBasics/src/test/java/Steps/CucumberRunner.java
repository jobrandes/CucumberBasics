package Steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
/**
 * Created by Jo-Anne Brandes on 6/12/2017.
 *
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        format={"pretty", "html:reports/test-report"},
        tags= "@smokeTest",
        features = "C:\\Users\\35926\\IdeaProjects\\CucumberBasics\\src\\test\\java\\Features")
public class CucumberRunner {
}
