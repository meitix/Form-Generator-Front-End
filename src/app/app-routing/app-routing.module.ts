import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
  {path: 'forms' , loadChildren: '../modules/forms/forms.module#FormGeneratorModule'},
  {path: 'users' , loadChildren: '../modules/users/users.module#UsersModule' },
  {path: 'authentication' , loadChildren: '../modules/authentication/authentication.module#AuthenticationModule'},
  {path: '' , loadChildren: '../modules/dashboard/dashboard.module#DashboardModule' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
