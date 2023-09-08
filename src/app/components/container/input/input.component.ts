import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { InputViewComponent } from '../../presentational/input-view/input-view.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [InputViewComponent],
  templateUrl: './input.component.html',
  standalone: true,
})
export class InputComponent {
  @Input() inputType!: string;
  @Input() errorMessage!: string;
  @Input() isMandatoryField!: boolean;
  @Input() value!: FormControl;

}
