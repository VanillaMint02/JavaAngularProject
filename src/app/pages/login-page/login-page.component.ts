import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GenericFormComponent } from 'src/app/components/container/generic-form/generic-form.component';
import { InputComponent } from 'src/app/components/container/input/input.component';
import { Variables } from 'src/app/variables/variables';

@Component({
  selector: 'login',
  imports: [InputComponent, GenericFormComponent],
  standalone: true,
  template: `<generic-form
    [givenInputs]="loginInputs"
    [formTitle]="variables.SIGN_IN_NOW"
    [confirmationButtonName]="variables.REGISTER"
  ></generic-form>`,
})
export class LoginPageComponent implements OnInit {
  password?: FormControl;
  email?: FormControl;
  loginInputs!: InputComponent[];

  constructor(protected variables: Variables) {}
  ngOnInit(): void {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.loginInputs = [
      {
        errorMessages: ['This field is required'],
        value: this.email,
        isMandatoryField: true,
        inputType: 'Email',
      },
      {
        errorMessages: ['This field is required'],
        value: this.password,
        isMandatoryField: true,
        inputType: 'Password',
      },
    ];
  }
}
