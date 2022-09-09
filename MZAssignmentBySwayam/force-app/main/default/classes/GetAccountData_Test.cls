@isTest
public with sharing class GetAccountData_Test {
    @isTest
    public static void getAllAccountTest(){
        Account accObj1 = TestDataFactory.createAccount(true);
        Account accObj2 = TestDataFactory.createAccount(false);
        accObj2.Name = 'Account Test';
        insert accObj2;
        
        List<Account> varAccountData = GetAccountData.getAllAccount();
        system.Assert(varAccountData.size() > 0);
    }
}