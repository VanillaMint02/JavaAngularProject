import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { GenericFormComponent } from '../../container/generic-form/generic-form.component';
import { FormConfirmationButtonViewComponent } from '../form-confirmation-button-view/form-confirmation-button-view.component';

@Component({
  selector: 'generic-drawer',
  templateUrl: 'generic-drawer.component.html',
  styleUrls: ['generic-drawer.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    GenericFormComponent,
    FormConfirmationButtonViewComponent,
  ],
})
export class GenericDrawerComponent  implements OnInit{
  ngOnInit(): void {
    console.log(this.formGroupArray);
  }
  @Input()confirmationButtonName!:string;
  @Input() drawerTitle!:string;
  @Input() opened: boolean = true;
  @Input() formGroupArray!: GenericFormComponent[];
  @Output() buttonEvent:EventEmitter<void>= new EventEmitter<void>;
}
