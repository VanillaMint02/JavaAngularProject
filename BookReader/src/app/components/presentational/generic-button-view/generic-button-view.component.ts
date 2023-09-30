import { CommonModule } from '@angular/common';
import { Component, Input,} from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon';

@Component({
  standalone:true,
  imports:[MatButtonModule,MatIconModule,CommonModule],
  selector: 'generic-button',
  templateUrl: './generic-button-view.component.html',
  styleUrls: ['./generic-button-view.component.scss']
})
export class GenericButtonViewComponent{
  
  @Input() buttonName!:string;
  @Input() iconName!:string;

}
