import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { GenericFormViewComponent } from '../../presentational/generic-form-view/generic-form-view.component';

@Component({
  imports:[GenericFormViewComponent],
  selector: 'generic-form',
  template:`<generic-form-view
  [givenInputs]="givenInputs"
  [formTitle]="formTitle"
  [confirmationButtonName]="confirmationButtonName"
  ></generic-form-view>
  `,
  standalone:true
})
export class GenericFormComponent {

@Input() givenInputs!:InputComponent[];
@Input() formTitle!:string; 
@Input() confirmationButtonName!:string;
}
