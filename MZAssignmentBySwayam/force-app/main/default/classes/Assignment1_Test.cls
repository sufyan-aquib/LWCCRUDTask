@isTest
public class Assignment1_Test {
    @IsTest
    static void calculateSumTest(){
        Integer a = 20;
        Integer b = 20;

        Integer result = Assignment1.calculateSum(a, b);
        System.assertEquals(40 ,result);
    }

    @IsTest
    static void getValueFromMapAccordingToKeyTest(){
        
        Integer mapKey = 4;
        Integer result = Assignment1.getValueFromMapAccordingToKey(mapKey);

        System.assertEquals(7 ,result);
    }

    @IsTest
    static void getStringValueFromCmp(){
        
        String str = '1,2,3,4,5';

        List<String> listOfValues = Assignment1.getStringValueFromCmp(str);
        System.assertEquals(true,listOfValues!=null);

        
    }
}
