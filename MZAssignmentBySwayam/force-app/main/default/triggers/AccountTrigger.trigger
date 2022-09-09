trigger AccountTrigger on Account (before insert) {
    if(trigger.isBefore && trigger.isInsert){
        AccountTriggerHandler.validateDuplicateAccountWithName(trigger.new);
        AccountTriggerHandler.createContactOnAccountCreation(trigger.new);
    }
}