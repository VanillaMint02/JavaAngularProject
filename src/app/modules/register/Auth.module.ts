import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormComponent } from 'src/app/components/container/generic-form/generic-form.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginPageComponent } from 'src/app/pages/login-page.component';
import { RegisterPageComponent } from 'src/app/pages/register-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    GenericFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
  ],
  exports:[],
})
export class AuthModule { }
