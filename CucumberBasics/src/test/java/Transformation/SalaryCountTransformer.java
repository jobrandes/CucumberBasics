package Transformation;

import cucumber.api.Transformer;

/**
 * Created by 35926 on 6/13/2017.
 */
public class SalaryCountTransformer  extends Transformer <Integer>{

    @Override
    public Integer transform(String salary){

        return salary.length();
    }
}
