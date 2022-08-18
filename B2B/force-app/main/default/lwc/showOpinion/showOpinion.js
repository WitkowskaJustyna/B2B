import { LightningElement, wire, api } from 'lwc';
import getOpinions from '@salesforce/apex/OpinionController.getOpinions';

//import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = [
    {label:'Opinion about product', fieldName: 'Opinion_about_product__c', type: 'text'},
    {label:'Opinion from 1 to 5', fieldName: 'Opinion15__c', type: 'number'},
  ]

export default class ShowOpinion extends LightningElement {

    @api recordId;
    @api opinions;
    @api displayTable = false;

    //@wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    //@wire(getOpinions, {recordId: '$recordId', fields: FIELDS}) opinions;

    connectedCallback(){
       // console.log('qwert');
       // console.log(this.recordId);
        getOpinions( {recordId: this.recordId}).then(res =>{
            console.log('CCCC')
            this.opinions = res;
            this.displayTable = true;
            console.log(this.displayTable);
            console.log("XXXXXXX");
            console.log("result" , res)}).catch(res =>{ console.log(res)});

         }

         
        // get opinionAboutProduct() {
        //     return (this.opinions.Opinion_about_product__c);
        // }
        // get opinionAboutProductInNumber() {
        //     return (this.opinions.Opinion15__c);
        // }




}