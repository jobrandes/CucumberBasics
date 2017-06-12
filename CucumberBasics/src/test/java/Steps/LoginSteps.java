package Steps;

import cucumber.annotation.en.And;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.runtime.PendingException;

/**
 * Created by 35926 on 6/12/2017.
 */
public class LoginSteps {
        @Given("^I navigate to the login page$")
        public void iNavigateToTheLoginPage() throws Throwable {

            System.out.println("Navigate to Login page");
    }

        @And("^I enter the username as admin and password as admin$")
        public void iEnterUserNameAndPassword() throws Throwable {

            System.out.println("Enter user name and password");
    }

        @And("^I click the login button$")
        public void iClickLoginButton() throws Throwable {

            System.out.println("Click Login button");
    }

        @Then("^I should see the userform page$")
        public void iShouldSeeUserFormPage() throws Throwable {

            System.out.println("I should see userform page");
        }
}



