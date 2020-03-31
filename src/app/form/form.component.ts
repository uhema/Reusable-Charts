import { Component, OnInit } from '@angular/core';

import { Userdata } from '../Model/User.model'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'CustomerApplication';
  CustomerModel : Userdata = new Userdata();
  CustomerModels :Array<Userdata> = new Array<Userdata>();


  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Userdata();
    // clear UI
  }
  hasError(typeofvalidator:string,
    controlname:string) : boolean{
      return this.CustomerModel
            .formCustomerGroup
            .controls[controlname]
            .hasError(typeofvalidator);
}
  constructor() { }

  ngOnInit() {
  }

}
