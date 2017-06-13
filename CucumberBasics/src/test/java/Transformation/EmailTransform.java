package Transformation;

import cucumber.api.Transformer;

/**
 * Created by 35926 on 6/13/2017.
 */
public class EmailTransform extends Transformer<String> {

    @Override
    public String transform(String UserName) {

        return UserName.concat("@ea.com");
    }


}
