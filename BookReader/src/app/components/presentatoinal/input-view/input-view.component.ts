import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
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
   @Input() erorrMessage?: string;
   @Input() isMandatoryField!:boolean;
   @Input() value?:string;
   constructor(){
    this.isMandatoryField=false;
    this.inputType="Dark Clouds In The sky";
    this.erorrMessage="NalalaLon";
    this.value="I like Turtles";
   }
}
