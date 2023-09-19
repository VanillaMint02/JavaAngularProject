import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import {MatTabsModule} from'@angular/material/tabs';

@Component({
  selector: 'header',
  imports:[MatTabsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  encapsulation:ViewEncapsulation.None,
})
export class HeaderComponent {
@Input() isAdminHeader?:boolean;

}
