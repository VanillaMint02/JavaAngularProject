import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormComponent } from 'src/app/components/container/generic-form/generic-form.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    GenericFormComponent,
  ],
  exports:[LoginPageComponent],
})
export class RegisterModule { }
