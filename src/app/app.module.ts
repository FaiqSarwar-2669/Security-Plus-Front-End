import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './services_provider/navigation/navigation.component';
import { DashboardComponent } from './services_provider/dashboard/dashboard.component';
import { MakeFormComponent } from './services_provider/make-form/make-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavigationComponent,
    DashboardComponent,
    MakeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
