import {Component, EventEmitter, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf, NgFor} from '@angular/common';

@Component({
  selector: 'generic-drawer',
  templateUrl: 'generic-drawer.component.html',
  styleUrls: ['generic-drawer.component.scss'],
  standalone: true,
  imports: [NgIf, MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, NgFor],
})
export class GenericDrawerComponent {
  events: string[] = [];
  opened: boolean=true;
  shouldRun = true;
  @Input() toggleDrawer!:EventEmitter<void>;
}