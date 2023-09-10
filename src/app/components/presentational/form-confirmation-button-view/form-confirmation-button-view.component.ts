import { Component, Input } from '@angular/core';
import { MatButton,MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'confirmation-button',
  templateUrl: './form-confirmation-button-view.component.html',
  styleUrls: ['./form-confirmation-button-view.component.scss'],
  providers :[MatButton],
  imports:[MatButtonModule],
  standalone:true,
})
export class FormConfirmationButtonViewComponent {
@Input() buttonName!:string;
 
}
