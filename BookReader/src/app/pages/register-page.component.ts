import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericFormComponent } from 'src/app/components/container/generic-form/generic-form.component';
import { InputComponent } from 'src/app/components/container/input/input.component';
import { HeaderComponent } from 'src/app/components/presentational/header/header.component';
import { Variables } from 'src/app/variables/variables';
import { NavigationService } from '../services/navigation-service';
import { BookComponent } from "../components/container/book/book.component";

@Component({
    selector: 'register',
    standalone: true,
    template: ` 
    <generic-form
      [givenInputs]="registerInputs"
      [formTitle]="variables.SIGN_IN_NOW"
      [confirmationButtonName]="registrationString"
      [formGroup]="registerFormGroup"
      (buttonEvent)="onRegisterClick()"
    ></generic-form> <book></book>`,
    providers: [Variables, NavigationService],
    imports: [GenericFormComponent, InputComponent, HeaderComponent, BookComponent]
})
export class RegisterPageComponent implements OnInit {
  username?: FormControl;
  password?: FormControl;
  email?: FormControl;
  confirmEmail?: FormControl;
  registerInputs!: InputComponent[];
  registrationString!: string;
  registerButtonEvent!: EventEmitter<void>;
  registerFormGroup!: FormGroup;

  constructor(protected variables: Variables,private navigationService:NavigationService) {}

  ngOnInit(): void {
    this.registrationString = this.variables.REGISTER;
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.confirmEmail = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.registerFormGroup = new FormGroup({
      username: this.username,
      password: this.password,
      email: this.email,
      confirmEmail: this.confirmEmail,
    });
    this.registerInputs = [
      {
        errorMessages: ['This field is required', 'Invalid Email'],
        value: this.username,
        isMandatoryField: true,
        inputType: 'Username',
        formControlName: '',
      },
      {
        errorMessages: ['This field is required', 'Invalid Email'],
        value: this.email,
        isMandatoryField: true,
        inputType: 'Email',
        formControlName: '',
      },
      {
        errorMessages: ['This field is required', 'Invalid Email'],
        value: this.confirmEmail,
        isMandatoryField: true,
        inputType: 'Confirm Your Email',
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
  }
  onRegisterClick(): void {
    console.log(this.registerFormGroup.value);
    this.navigationService.navigateToLogin();
  }
}
