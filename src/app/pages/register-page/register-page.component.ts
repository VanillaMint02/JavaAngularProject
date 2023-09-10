import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GenericFormComponent } from 'src/app/components/container/generic-form/generic-form.component';
import { InputComponent } from 'src/app/components/container/input/input.component';
import { Variables } from 'src/app/variables/variables';

@Component({
  selector: 'register',
  standalone: true,
  imports: [GenericFormComponent, InputComponent],
  template: `<generic-form
    [givenInputs]="registerInputs"
    [formTitle]="variables.SIGN_IN_NOW"
    [confirmationButtonName]="variables.REGISTER"
  ></generic-form>`,
  providers: [Variables],
})
export class RegisterPageComponent implements OnInit {
  password?: FormControl;
  email?: FormControl;
  confirmEmail?: FormControl;
  registerInputs!: InputComponent[];

  constructor(protected variables: Variables) {}

  ngOnInit(): void {
    this.password = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.confirmEmail = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.registerInputs = [
      {
        errorMessages: ['This field is required', 'Invalid Email'],
        value: this.email,
        isMandatoryField: true,
        inputType: 'Email',
      },
      {
        errorMessages: ['This field is required', 'Invalid Email'],
        value: this.confirmEmail,
        isMandatoryField: true,
        inputType: 'Confirm Your Email',
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
