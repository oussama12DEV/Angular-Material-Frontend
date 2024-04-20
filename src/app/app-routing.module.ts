import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ProfilComponent} from "./profil/profil.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentsComponent} from "./students/students.component";
import {PaymentsComponent} from "./payments/payments.component";
import {LoadPaymentsComponent} from "./load-payments/load-payments.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizetedGuardGuard} from "./guards/authorizeted.guard";

const routes: Routes = [
  {path:"login" ,component:LoginComponent},
  {path:"" ,component:LoginComponent},
  {path:"admin" ,component:AdminTemplateComponent,canActivate: [AuthGuard] ,children:[
      {path:"home" ,component:HomeComponent},
      {path:"profile" ,component:ProfilComponent},
      {path:"dashboard" ,component:DashboardComponent},
      {path:"students" ,component:StudentsComponent},
      {path:"payement" ,component:PaymentsComponent},
      {path:"load-payement" ,component:LoadPaymentsComponent,canActivate:[AuthorizetedGuardGuard],data:{roles :['ADMIN']}},
      {path:"load-students" ,component:LoadStudentsComponent,canActivate:[AuthorizetedGuardGuard],data:{roles :['ADMIN']}}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
