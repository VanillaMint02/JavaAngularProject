import { Component, EventEmitter, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-view',
  templateUrl: './input-view.component.html',
  styleUrls: ['./input-view.component.scss'],
  imports: [MatInputModule,MatFormFieldModule,FormsModule,CommonModule,],
  standalone:true
})
export class InputViewComponent {

   @Input() inputType! : string;
   @Input() errorMessage?: string;
   @Input() isMandatoryField!:boolean;
   @Input() value!:FormControl;
   

   onErrorCaught(value: FormControl, errorMessage: string): string {
    if (value.hasError('required')) {
      return errorMessage;
    }
    else return"";
  }
}
