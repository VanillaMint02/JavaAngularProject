import { Component, Input } from '@angular/core';
import { InputViewComponent } from '../../presentatoinal/input-view/input-view.component';

@Component({
  selector: 'app-input',
  imports:[InputViewComponent,],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone:true
})
export class InputComponent {
  @Input() inputType! : string;
  @Input() erorrMessage!: string;
  @Input() isMandatoryField!:boolean;

}
