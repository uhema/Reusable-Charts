import {NgForm,
    FormGroup,
        FormControl,
                Validators,
    FormBuilder } from '@angular/forms'
// Create :- We create the validation object model
// Connect :- We connect the validation to the UI
// Check :- IsValid , IsDirty
export class Userdata{
   
    CustomerName:string;
    CustomerDOB:number;
    CustomerEmail:string;



    formCustomerGroup: FormGroup = null; // Create object of FormGroup
    constructor(){
        
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({}); // Use the builder to create 
        
        this.formCustomerGroup.
        addControl("CustomerNameControl",
                    new FormControl('',Validators.required)
        );

        // this.formCustomerGroup.
        // addControl("CustomerEmailControl",
        //             new FormControl('',Validators.required)
        // );

        this.formCustomerGroup.
        addControl("CustomerDOBControl", new FormControl('', Validators.required));




        // Customer code control --> 
        // Required , 4 letter numeric
       var validationcollection = [];
       validationcollection.push(Validators.required);
       validationcollection.push(Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"))

       this.formCustomerGroup.
       addControl("CustomerEmailControl",
                   new FormControl('',Validators.compose(validationcollection))
       );
    }

}