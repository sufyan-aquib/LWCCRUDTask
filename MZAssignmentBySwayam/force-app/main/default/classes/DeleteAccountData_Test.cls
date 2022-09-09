@isTest
public class DeleteAccountData_Test {
	@isTest
    public static void deleteAccountTest(){
        Account accObj = TestDataFactory.createAccount(false);
        accObj.Name = 'Account Test';
        insert accObj;
        
        String numberOfRecord = DeleteAccountData.deleteAccountNameFromLWC('Account Test');
        
      	System.Assert(String.isNotBlank(numberOfRecord));
    }
}