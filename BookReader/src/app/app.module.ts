import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/container/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputViewComponent } from '../app/components/presentational/input-view/input-view.component';
import { AuthModule } from './modules/register/Auth.module';
import { GenericFormViewComponent } from './components/presentational/generic-form-view/generic-form-view.component';
import { GenericFormComponent } from './components/container/generic-form/generic-form.component';
import { Variables } from './variables/variables';
import { LibraryPageComponent } from './pages/library-page.component';
import { GenericTableComponent } from './components/presentational/generic-table/generic-table.component';
import { GenericDrawerComponent } from './components/presentational/generic-drawer/generic-drawer.component';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    GenericDrawerComponent,
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
    AuthModule,
    GenericFormComponent,
    GenericFormViewComponent,
    GenericTableComponent,
    LibraryPageComponent,
  ],
  providers: [Variables],
  bootstrap: [AppComponent],
})
export class AppModule {}
