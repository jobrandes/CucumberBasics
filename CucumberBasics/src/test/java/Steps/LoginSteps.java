package Steps;

import Base.BaseUtil;
import Pages.LoginPage;
import Transformation.EmailTransform;
import Transformation.SalaryCountTransformer;
import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;

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
        base.Driver.navigate().to("http://www.executeautomation.com/demosite/Login.html");
    }


    @And("^I click the login button$")
    public void iClickLoginButton() throws Throwable {

        LoginPage page = new LoginPage(base.Driver);
        page.ClickLogin();
    }

    @Then("^I should see the userform page$")
    public void iShouldSeeUserFormPage() throws Throwable {

        Assert.assertEquals("It is not displayed",base.Driver.findElement(By.id("Initial")).isDisplayed(), true) ;
    }


    @And("^I enter the following details for Login$")
    public void iEnterTheFollowingDetailsForLogin(DataTable table) throws Throwable {


        //Create ArrayList
        List<User> users = new ArrayList<User>();

        //Store Users
        users = table.asList(User.class);

        LoginPage page = new LoginPage(base.Driver);

        for (User user : users) {
            page.Login(user.username, user.password);
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



