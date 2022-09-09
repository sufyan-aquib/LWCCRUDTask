public with sharing class DeleteAccountData {
    @AuraEnabled
    public static string deleteAccountNameFromLWC(String accountName){
            if(accountName != null || accountName != ''){
            	List<Account> accListToBeDeleted = [SELECT Id, Name FROM Account WHERE Name =: accountName];
            	delete accListToBeDeleted;
            }
            return accountName;
    }
}