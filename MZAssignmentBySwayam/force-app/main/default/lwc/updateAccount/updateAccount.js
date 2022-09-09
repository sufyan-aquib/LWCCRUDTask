import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';



export default class UpdateAccount extends LightningElement {
    @api getrecordid;
    
    objName = ACCOUNT_OBJECT;

    handleClose(){
        window.location.reload();
    }

    handleSubmit(){
        this.dispatchEvent(new ShowToastEvent({
            title: 'Record Updated Successfully',
            variant: 'success'
        }));
        window.location.reload();
    }
}