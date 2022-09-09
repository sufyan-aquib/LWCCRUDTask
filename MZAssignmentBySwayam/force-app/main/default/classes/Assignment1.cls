public with sharing class Assignment1 {
    
    @AuraEnabled
    public static Integer calculateSum(Integer num1,Integer num2){
        try {
            Integer result;
            if(num1 != null || num2 != null){
                result = num1 + num2;
            }
            return result;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Integer getValueFromMapAccordingToKey(Integer keyForMap){
        try {
            Map<Integer,Integer> newMap = new Map<Integer,Integer>{
                1 => 1,
                2 => 3,
                3 => 5,
                4 => 7,
                5 => 9
            };
            
            return newMap.get(keyForMap);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<String> getStringValueFromCmp(String passedValue){
        try {
            String str = passedValue;
            String[] str2 = str.split(',');
            List<String> listOfString = new List<String>();
            for(Integer i = 0; i<str2.size(); i++){
                listOfString.add(str2[i]);
            }
            System.debug('List of String : '+listOfString);

            return listOfString;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
