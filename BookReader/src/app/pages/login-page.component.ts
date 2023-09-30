import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericFormComponent } from 'src/app/components/container/generic-form/generic-form.component';
import { InputComponent } from 'src/app/components/container/input/input.component';
import { Variables } from 'src/app/variables/variables';
import { GenericDrawerComponent } from '../components/presentational/generic-drawer/generic-drawer.component';

@Component({
  selector: 'login',
  imports: [InputComponent, GenericFormComponent, GenericDrawerComponent],
  standalone: true,
  template: `
    <generic-form
      [givenInputs]="loginInputs"
      [formTitle]="variables.SIGN_IN_NOW"
      [confirmationButtonName]="variables.LOGIN"
      [formGroup]="loginFormGroup"
      (buttonEvent)="onLoginClick()"
    ></generic-form>
    <generic-drawer
      [opened]="drawerOpened"
      [drawerTitle]="'I want to brek fri'"
      [formGroupArray]="genericFormGroupArray"
      [confirmationButtonName]="variables.LOGIN"
      (buttonEvent)="onLoginClick()"
    ></generic-drawer>`,
})
export class LoginPageComponent implements OnInit {
  password?: FormControl;
  email?: FormControl;
  loginInputs!: InputComponent[];
  loginFormGroup!: FormGroup;
  drawerOpened: boolean = true;
  genericFormGroupArray!: GenericFormComponent[];
  testFormGroup!:FormGroup;
  testInputs!:InputComponent[];
  email2?:FormControl;
  password2?:FormControl;

  constructor(protected variables: Variables) {}
  ngOnInit(): void {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.email2=new FormControl('', Validators.required);
    this.password2=new FormControl('', Validators.required);
    
    this.loginFormGroup = new FormGroup({
      email: this.email,
      password: this.password,
    });
    this.loginInputs = [
      {
        errorMessages: ['This field is required'],
        value: this.email,
        isMandatoryField: true,
        inputType: 'Email',
        formControlName: '',
      },
      {
        errorMessages: ['This field is required'],
        value: this.password,
        isMandatoryField: true,
        inputType: 'Password',
        formControlName: '',
      },
    ];
    
   
    this.genericFormGroupArray = [
      {
        givenInputs: this.loginInputs,
        formTitle: this.variables.SIGN_IN_NOW,
        confirmationButtonName: this.variables.LOGIN,
        formGroup: this.loginFormGroup,
        buttonEvent: new EventEmitter<void>(),
      },
    ];
  }
  onLoginClick() {
    this.drawerOpened = !this.drawerOpened;
  }
}
