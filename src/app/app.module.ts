import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortHeader, MatSortModule} from "@angular/material/sort";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthorizetedGuardGuard} from "./guards/authorizeted.guard";

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    LoginComponent,
    ProfilComponent,
    DashboardComponent,
    StudentsComponent,
    PaymentsComponent,
    LoadPaymentsComponent,
    LoadStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatIconButton,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatDrawerContainer,
    MatNavList,
    MatListItem,
    MatDrawer,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSort,
    MatSortHeader,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
      BrowserAnimationsModule

  ],
  providers: [
    AuthGuard,AuthorizetedGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
