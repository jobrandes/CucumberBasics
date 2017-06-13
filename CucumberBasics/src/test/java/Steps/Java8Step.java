package Steps;

import cucumber.api.PendingException;
import cucumber.api.java8.En;

/**
 * Created by 35926 on 6/13/2017.
 */
public class Java8Step implements En {
    public Java8Step() {
        And("^I just need to see how stuff looks for cucumber-java(\\d+)$", (Integer arg0) -> {

            System.out.println("The value from new Step Class is: " + arg0);
        });
    }
}
