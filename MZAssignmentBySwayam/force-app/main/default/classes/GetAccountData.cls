public with sharing class GetAccountData {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAllAccount(){
            return [SELECT Id, Name, Type, Phone, Industry, AnnualRevenue FROM Account];
    }
}