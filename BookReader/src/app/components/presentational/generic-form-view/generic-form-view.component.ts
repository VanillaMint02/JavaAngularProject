import { Component, Input } from '@angular/core';
import { InputComponent } from '../../container/input/input.component';
import { InputViewComponent } from '../input-view/input-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-form-view',
  templateUrl: './generic-form-view.component.html',
  styleUrls: ['./generic-form-view.component.scss'],
  imports:[CommonModule,InputComponent],
  standalone:true
})
export class GenericFormViewComponent {

  @Input() givenInputs!:InputComponent[];
  @Input() formTitle!:string;
}
