import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by touhid on 29/05/2016.
 */
public class StepDefinition {

    @Given("^sample feature file is ready$")
    public void givenStatement(){
        System.out.println("Given statement executed successfully. ");
    }

    @When("^I run the feature file$")
    public void whenStatement(){
        System.out.println("When statement execueted successfully");
    }

    @Then("^run should be successful$")
    public void thenStatment(){
        System.out.println("Then statement executed successfully");
    }

}
