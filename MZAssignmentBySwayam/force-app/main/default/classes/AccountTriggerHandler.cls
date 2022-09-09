public with sharing class AccountTriggerHandler {
    public static void validateDuplicateAccountWithName(List<Account> listOfAccount){
        Set<String> nameSet = new Set<String>();
        for(Account acc: listOfAccount){
            nameSet.add(acc.Name);
        }

        if(nameSet.size() > 0 ){
            List<Account> lstAccount = [select name ,id from account where name in :nameSet ];

            Map<String, Account> mapOfOldAccount = new Map<String, Account>();

            for(Account acc : lstAccount){
                mapOfOldAccount.put(acc.Name , acc);
            }

            for(Account accList :  listOfAccount){
                if(mapOfOldAccount.containsKey(accList.Name)){
                    accList.addError('Account Already Exist.');
                }
            }
        }
    }

    public static void createContactOnAccountCreation(List<Account> listOfAccount){

        if(listOfAccount.size() > 0){
        List<Contact> listOfContact = new List<Contact>();
        
        for(Account acc : listOfAccount){
            Contact con = new Contact();
            con.LastName = acc.Name;
            con.AccountId = acc.Id;
            listOfContact.add(con);
        }

        insert listOfContact;
    }
    }
}
