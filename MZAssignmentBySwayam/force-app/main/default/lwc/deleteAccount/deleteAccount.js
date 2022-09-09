import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import deleteAccountNameFromLWC from '@salesforce/apex/DeleteAccountData.deleteAccountNameFromLWC';

export default class DeleteAccount extends LightningElement {
    nameValue;

    handleChange(event) {
        const eventName = event.target.name;

        if (eventName === 'name') {
            this.nameValue = event.target.value;
        }
    }

    handleDelete() {
        if (this.nameValue.length <= 0 || this.nameValue === null || this.nameValue === '') {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Enter the Name to delete',
                variant: 'error'
            }));
        } else {
            deleteAccountNameFromLWC({ accountName: this.nameValue })
                .then(data => {
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Success',
                        message: data + ' Account Deleted Successfully',
                        variant: 'success'
                    }));

                    window.location.reload();
                }).catch(error => {
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    }));
                })
        }

    }

    handleClose() {
        window.location.reload();
    }
}