import { LightningElement,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';

import getAllAccount from '@salesforce/apex/GetAccountData.getAllAccount';

const columnsStructure =[
    {label:'Name', fieldName: 'Name'},
    {label:'Type', fieldName: 'Type'},
    {label:'Phone', fieldName: 'Phone'},
    {label:'Industry', fieldName: 'Industry'},
    {label:'AnnualRevenue', fieldName: 'AnnualRevenue'}
];

export default class AccountsLWCTab extends LightningElement {
    columnsList = columnsStructure;
    dataList;
    error;
    showAddAccount = false;
    showDeleteAccount = false;
    selectedRecords;
    recordIdTemp = [];
    showUpdateAccount = false;
    wireResult;
    recordId;

    @wire(getAllAccount)
    allAccountData(result){
        const {data,error} = result;
        this.wireResult = result;
        if(data){
            this.dataList = data;
        }else if(error){
            this.error = error;
         }
    }

    handleAdd(){
        this.showAddAccount = true;
    }

    handleDelete(){
        this.showDeleteAccount = true;
    }

    handleUpdate(){

        this.selectedRecords = this.template.querySelector("lightning-datatable").getSelectedRows();

        //validation check
        if(this.validateOneRecordOnly() === true || this.validateCheckBox() === true){
            
             return;
        }

        this.selectedRecords.forEach(element => {
            this.recordIdTemp.push(element.Id);
        });

        this.recordId = this.recordIdTemp.toString();

        this.showUpdateAccount = true;
    }

    validateOneRecordOnly(){
        var isValid = false;        
        if(Object.keys(this.selectedRecords).length > 1){
            isValid = true;
        }
        if(isValid === true){
             const evt = new ShowToastEvent({
                 title: 'Select 1 record at a time.',
                 variant: 'error'
             });
             this.dispatchEvent(evt);
         }
        return isValid;
    }

    validateCheckBox(){
        var isValid = false;
        if(this.selectedRecords === null || this.selectedRecords === '' || this.selectedRecords.length <= 0){
            isValid = true;
        }
        if(isValid === true){
            const evt = new ShowToastEvent({
                title: 'Please Select a record which you want to Update',
                variant: 'error'
            });
            this.dispatchEvent(evt);
        }
        return isValid;
    }

    handleRefresh(){
        return refreshApex(this.wireResult);
    }
}