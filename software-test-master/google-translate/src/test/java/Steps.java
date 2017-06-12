import com.processor.MyFileWriter;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

/**
 * Created by touhid on 24/07/2016.
 */
public class Steps {


    WebDriver driver;

    @Before
    public void setup() {
        try {
            driver = new RemoteWebDriver(new URL("http://localhost:9515"), DesiredCapabilities.chrome());
        } catch (MalformedURLException e) {
            System.out.println("Error : " + e.getMessage());
        }
    }


    @Given("^open the url$")
    public void open_the_url() {
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("https://translate.google.com");
    }

    @When("^select from english language$")
    public void select_from_english_language() {
        WebElement englishTab = driver.findElement(By.id("gt-sl-sugg"));
        WebElement englishButton = englishTab.findElement(By.xpath("//*[@value=\"en\"]"));
        englishButton.click();

    }

    @Then("^select to bangla language$")
    public void select_to_bangla_language() {
        WebElement selectBangla = driver.findElement(By.xpath("//*[@id=\"gt-tl-gms\"]"));
        selectBangla.click();
        WebElement banglaButton = selectBangla.findElement(By.xpath("//*[@id=\":36\"]/div"));
        banglaButton.click();
    }

    @Then("^put the ([^\"]*) to input box$")
    public void put_the_to_input_box(String word) {
        WebElement textArea = driver.findElement(By.id("source"));
        textArea.sendKeys(word);
    }

    @Then("^press translate button$")
    public void press_translate_button(){
        WebElement translateButton = driver.findElement(By.id("gt-submit"));
        translateButton.click();
    }

    @Then("^save the ([^\"]*) result$")
    public void save_the_result(String word) {

        String result = findElementBy(By.xpath("//*[@id=\"result_box\"]/span"));

        if (findElementByRObject(By.className("cd-exp-ar")) != null){
            driver.findElement(By.className("cd-exp-ar")).click();
        }

        String pFp = findElementBy(By.className("gt-cd-pos"));
        String synonyms = findElementBy(By.className("gt-syn-span"));

        System.out.println();
        System.out.println("====================== RESULT ======================");
        System.out.println(result);
        System.out.println("word: " + word);



        System.out.println("pFp: " + MyFileWriter.toUpperFirst(pFp));
        System.out.println("synonyms: " + synonyms);
        System.out.println("====================== END RESULT ======================");

        String line =  MyFileWriter.toUpperFirst(word) + "," + result + "," + MyFileWriter.toUpperFirst(pFp) + ",\"" + MyFileWriter.commaToList(synonyms) + "\",,";

        MyFileWriter.appendToFile(line, "csv\\ielts_official_1_8.csv");

    }

    private String findElementBy(By by){
        try{
            WebElement result = driver.findElement(by);
            return result.getText();
        }catch (NoSuchElementException n){
            return "";
        }
    }

    private WebElement findElementByRObject(By by){
        try{
            WebElement result = driver.findElement(by);
            return result;
        }catch (NoSuchElementException n){
            return null;
        }
    }

    @After
    public void closeBrowser() {
        driver.quit();
    }
    
}
