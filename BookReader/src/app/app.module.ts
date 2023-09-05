import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/container/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputViewComponent } from '../app/components/presentatoinal/input-view/input-view.component'

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    InputComponent,
    MatInputModule,
    InputViewComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
