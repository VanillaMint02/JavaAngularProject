import { Component } from "@angular/core";
import { GenericFormComponent } from "../components/container/generic-form/generic-form.component";
import { InputComponent } from "../components/container/input/input.component";

@Component({
    selector: 'profile',
    imports: [InputComponent, GenericFormComponent],
    standalone: true,
    template: '<p>I work Blyat</p>'
  })
  export class ProfilePageComponent{
    
  }