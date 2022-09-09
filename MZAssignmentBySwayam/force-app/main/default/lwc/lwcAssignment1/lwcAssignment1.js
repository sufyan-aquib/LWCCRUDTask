import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import calculateSum from '@salesforce/apex/Assignment1.calculateSum';
import getValueFromMapAccordingToKey from '@salesforce/apex/Assignment1.getValueFromMapAccordingToKey';
import getStringValueFromCmp from '@salesforce/apex/Assignment1.getStringValueFromCmp';



export default class LwcAssignment1 extends LightningElement {

    num1;
    num2;
    sumResult;
    keyForMap;
    valueFromMap;
    valuesToBePass;
    displayArrayValues;

    callme(event){
        const eventName = event.target.name;

        if(eventName === 'aval'){
            this.num1 = event.target.value;    
        }else{
            this.num2 = event.target.value;
        }
    }


    handleClick(){
        calculateSum({num1 : this.num1, num2 : this.num2})
        .then(result => {
            this.sumResult = result;
        }).catch(error => {
            console.log(error);
            const evt = new ShowToastEvent({
                title: 'Error',
                message:'Error:'+error.body.message,
                variant: 'error'
            });
            this.dispatchEvent(evt);
        });
    }

    getValue(event){
        this.keyForMap = event.target.value;
    }

    handleMapOperation(){
        getValueFromMapAccordingToKey({keyForMap : this.keyForMap})
        .then(result =>{
            console.log('Result : '+result);
            if(result === null){
                const evt = new ShowToastEvent({
                title: 'Enter Value between 1 to 5',
                variant: 'error'
                });
                this.dispatchEvent(evt);
            }else{
                this.valueFromMap = result;
            }
        }).catch(error => {
            console.log(error);
            const evt = new ShowToastEvent({
               title: 'Error',
               message:'Error:'+error.body.message,
               variant: 'error'
           });
           this.dispatchEvent(evt);
        });
    }

    getArrayValue(event){
        this.valuesToBePass = event.target.value;
    }

    handleArrayOperation(){
        if(this.validateArrayList() === false){
            console.log('IN Validations');
            return;
        }
        getStringValueFromCmp({passedValue : this.valuesToBePass})
        .then(result => {
            this.displayArrayValues = result;
            console.log('this.displayArrayValues : '+this.displayArrayValues);
        }).catch(error => {
            console.log(error);
            const evt = new ShowToastEvent({
               title: 'Error',
               message:'Error:'+error.body.message,
               variant: 'error'
           });
           this.dispatchEvent(evt);
        });
    }

    validateArrayList(){
        var format = /[0-9\,]/g ;
        var isValid = false;

        if(format.test(this.valuesToBePass)){
            isValid = true;
        }
        if(isValid === false){
            const evt = new ShowToastEvent({
                title: 'Value should be in the form of 1,2,3,4,5....',
                variant: 'error'
            });
            this.dispatchEvent(evt);
        }
        return isValid;
    }
}