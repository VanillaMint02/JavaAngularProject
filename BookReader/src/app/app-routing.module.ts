import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { ProfilePageComponent } from './pages/profile-page.component';
import { LibraryPageComponent } from './pages/library-page.component';

const routes: Routes = [
  {path:'register',component:RegisterPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'profile/:id',component:ProfilePageComponent},
  {path:'library',component:LibraryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
