package Steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * Created by Jo-Anne Brandes on 6/13/2017
 */
public class Hook extends BaseUtil {

    private BaseUtil base;

    public Hook(BaseUtil base) {
        this.base = base;
    }

    @Before
    public void InitializeTest() {
        System.out.println("Opening the browser : Firefox");

        System.setProperty("webdriver.firefox.marionette", "C:\\webdrivers\\geckodriver.exe");
        base.Driver = new FirefoxDriver();

    }

    @After
    public void TearDownTest(Scenario scenario) {

        if (scenario.isFailed()) {

            //take screenshot
            System.out.println(scenario.getName());
        }
        System.out.println("Closing the browser: MOCK");
    }
}
