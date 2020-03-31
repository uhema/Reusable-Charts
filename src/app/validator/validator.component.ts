import { Component, OnInit } from '@angular/core';
import { Userdata} from '../Model/User.model'
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';

import { CustomValidator} from '../A/custom.validator'
  import { from } from 'rxjs';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
  employeeForm: FormGroup;
  fullNameLengnth = 0;

  // VALIDATION MESSAGES COMPONENET WISE
  validationMessesages = {
    'fullname': {
      'required': 'required full name',
      'minlength': 'minumum charecters should be 2 letters',
      'maxlength': 'maximum chareters are 10 letters'
    },
    'email': {
      'required': 'required email',
      'emailDomain': 'email domain should ne wrong'
    },
    'phone': {
      'required': 'required email'
    },
    'skillName': {
      'required': 'Skill name is required'
    },
    'expInYears': {
      'required': 'experience is required'
    },
    'proficiency': {
      'required': 'Proficiency is required'
    }
  };
  formError = {
    'fullname': '',
    'email': '',
    'phone': '',
    'skillName': '',
    'expInYears': '',
    'proficiency': ''

  }
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
     
    this.employeeForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contractPreference: ['email'],

      emailGroup: this.fb.group({
        email: ['',[Validators.required, CustomValidator.emailDomain('del.com')]],
        confirmEmail: ['', Validators.required],
      }),
     
      phone: [''],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        expInYears: ['', Validators.required],
        proficiency: ['', [Validators.required]]

      })

    });
    this.employeeForm.valueChanges.subscribe((data)=>{
      this.logValidationError(this.employeeForm);

    });  
  }

  onContactperformence( SelectedValue : String) {
    const phoneControl = this.employeeForm.get('phone');
    if(SelectedValue === 'phone'){
      phoneControl.setValidators(Validators.required);
    } else{
      phoneControl.clearValidators();
    }

  }
  logValidationError( group: FormGroup = this.employeeForm): void {
   Object.keys(group.controls).forEach(( Key: string)=>{
     const abstractcontrol = group.get(Key);
     if( abstractcontrol instanceof FormGroup){
       this.logValidationError(abstractcontrol);
 
     } else{
     
      this.formError[Key] = '';
      if( abstractcontrol && !abstractcontrol.valid && abstractcontrol.touched || abstractcontrol.dirty){
        const messages = this.validationMessesages[Key];
        console.log(messages);
        for(const errorkey in  abstractcontrol.errors){
          if(errorkey){
            this.formError[Key] += messages[errorkey] + '' ;
          }
        }
      }
     }
     
      
   })

  }

  onLoaddataclick(): void {
  


  }
  onSubmit(): void {
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);

    console.log(this.employeeForm.controls.fullname.touched);
    console.log(this.employeeForm.get('fullname').value);
    
  }


}
