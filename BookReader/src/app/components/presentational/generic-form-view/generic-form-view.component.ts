import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { InputComponent } from '../../container/input/input.component';
import { CommonModule } from '@angular/common';
import { FormConfirmationButtonViewComponent } from '../form-confirmation-button-view/form-confirmation-button-view.component';
import { GenericButtonViewComponent } from '../generic-button-view/generic-button-view.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'generic-form-view',
  templateUrl: './generic-form-view.component.html',
  styleUrls: ['./generic-form-view.component.scss'],
  imports: [
    CommonModule,
    InputComponent,
    FormConfirmationButtonViewComponent,
    GenericButtonViewComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  standalone: true,
})
export class GenericFormViewComponent {
  @Input() givenInputs!: InputComponent[];
  @Input() formTitle?: string;
  @Input() confirmationButtonName?: string;
  @Input() formGroup!: FormGroup;
  @Output() buttonEvent= new EventEmitter<void>;

}
