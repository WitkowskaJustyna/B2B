import { LightningElement, wire, api } from 'lwc';
import getAllOpinions from '@salesforce/apex/OpinionController.getOpinions';

export default class ShowAllOpinions extends LightningElement {

    @wire(getAllOpinions, {recordId: '$recordId', fields: FIELDS}) opinions;

    @track clickedButtonLabel = 'Show';  
    @track boolVisible = false;  

    handleClick(event){
        this.tvSerieId = event.target.value;
       }

       handleClick(event) {  
        const label = event.target.label;  
        const annoucement = this.template.querySelector('p').key;
        if ( label === 'Show' ) {  
        
            this.clickedButtonLabel = 'Hide';  
            this.boolVisible = true;  
        
        } else if  ( label === 'Hide' ) {  
                
            this.clickedButtonLabel = 'Show';  
            this.boolVisible = false;  
        
        }

}}