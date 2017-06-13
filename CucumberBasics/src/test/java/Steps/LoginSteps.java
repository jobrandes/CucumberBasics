package Steps;

import Base.BaseUtil;
import Transformation.EmailTransform;
import Transformation.SalaryCountTransformer;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import java.util.ArrayList;
import java.util.List;
/**
 * import cucumber.runtime.PendingException;
 */

/**
 * Created by Jo-Anne Brandes on 6/12/2017.
 */
public class LoginSteps extends BaseUtil {

    private BaseUtil base;

    public LoginSteps(BaseUtil base) {
        this.base = base;
    }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {

        System.out.println("Navigate to Login page");
    }


    @And("^I click the login button$")
    public void iClickLoginButton() throws Throwable {

        System.out.println("Click Login button");
    }

    @Then("^I should see the userform page$")
    public void iShouldSeeUserFormPage() throws Throwable {

        System.out.println("The driver is: " + base.StepInfo);
        System.out.println("I should see userform page");
    }


    @And("^I enter the following details for Login$")
    public void iEnterTheFollowingDetailsForLogin(DataTable table) throws Throwable {

        //List<List<String>> data = table.raw();

/*      System.out.println("The value is: " + data.get(0).get(0).toString());
        System.out.println("The value is: " + data.get(0).get(1).toString());*/

        //Create ArrayList
        List<User> users = new ArrayList<User>();

        //Store Users
        users = table.asList(User.class);

        for (User user : users) {
            System.out.println("The userName is " + user.username);
            System.out.println("The password is " + user.password);
        }
    }

    @And("^I enter ([^\"]*) and ([^\"]*)$")
    public void iEnterTheUsernameAndPassword(String userName, String password) throws Throwable {

        System.out.println("username is: " + userName);
        System.out.println("username is: " + password);
    }

    @And("^I enter teh users email address as Email:([^\"]*)$")
    public void iEnterTehUsersEmailAddressAsEmailAdmin(@Transform(EmailTransform.class) String email) throws Throwable {

        System.out.println("The email address is: " + email);
    }

    @Then("^I verify the count of my salary digits for (\\d+)$")
    public void iVerifyTheCountOfMySalaryDigitsFor(@Transform(SalaryCountTransformer.class) int salary) throws Throwable {

        System.out.println("My salary digit count is " + salary);

    }


    public class User {
        public String username;
        public String password;

        public User(String userName, String passWord) {
            username = userName;
            password = passWord;
        }
    }
}



