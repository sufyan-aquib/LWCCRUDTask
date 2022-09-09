import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class InsertAccount extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    myFields = [NAME_FIELD,TYPE_FIELD,PHONE_FIELD,INDUSTRY_FIELD,ANNUALREVENUE_FIELD];

    handleClose(){
        window.location.reload();
    }
}

