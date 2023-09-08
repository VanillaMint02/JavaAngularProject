import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GenericFormComponent } from 'src/app/components/container/generic-form/generic-form.component';
import { InputComponent } from 'src/app/components/container/input/input.component';
import { Variables } from 'src/app/variables/variables';


@Component({
  selector: 'register',
  standalone: true,
  imports: [GenericFormComponent,InputComponent,],
  template: '<generic-form [givenInputs]="registerInputs" [formTitle]="variables.SIGN_IN_NOW"></generic-form>',
  providers:[Variables],
})
export class RegisterPageComponent implements OnInit {
  password?:FormControl;
  email?:FormControl;
  confirmEmail?:FormControl;
  registerInputs!:InputComponent[];

   constructor(protected variables:Variables){};

  ngOnInit(): void {
    this.password=new FormControl('');
    this.email=new FormControl('');
    this.confirmEmail=new FormControl('');
    this.registerInputs=[{
      errorMessage:"",
      value:this.email,
      isMandatoryField:true,
      inputType:"Email",
    },
    { errorMessage:"",
    value:this.confirmEmail,
    isMandatoryField:true,
    inputType:"Confirm Your Email",
  },
  {
    errorMessage:"",
    value:this.password,
    isMandatoryField:true,
    inputType:"Password", 
  }];
  }
  
 
  
}
