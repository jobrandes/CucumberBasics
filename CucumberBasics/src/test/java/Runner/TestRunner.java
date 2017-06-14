package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Jo-Anne Brandes on 6/13/2017.
 *
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"C:\\Users\\35926\\IdeaProjects\\CucumberBasics\\src\\test\\java\\Features"},
        glue = "Steps")
/*        format={"pretty", "html:reports/test-report"},
        tags= "@smokeTest")*/
public class TestRunner {


}
