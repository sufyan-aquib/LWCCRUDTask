@isTest
public with sharing class AccountTriggerHandler_Test {
   @isTest
   static void duplicateRecordCheck() {
    try {
        Account accObj1 = TestDataFactory.createAccount(true);
        Account accObj2 = TestDataFactory.createAccount(true);

    List<Account> listOfAccount = new List<Account>();
    listOfAccount.add(accObj1);
    listOfAccount.add(accObj2);

    AccountTriggerHandler.validateDuplicateAccountWithName(listOfAccount);

    } catch (Exception ex) {
        Boolean expectedExceptionThrown =  ex.getMessage().contains('Account Already Exist.') ? true : false;
        System.assertEquals(expectedExceptionThrown, true);
    } 
    

   }

   @isTest
    static void createContactOnAccountCreationTest(){
        Account accObj1 = TestDataFactory.createAccount(true);

        List<Account> listOfAccount = new List<Account>();
        listOfAccount.add(accObj1);

        AccountTriggerHandler.createContactOnAccountCreation(listOfAccount);

    }

}