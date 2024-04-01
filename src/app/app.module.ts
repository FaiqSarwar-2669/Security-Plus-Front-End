import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './services_provider/navigation/navigation.component';
import { DashboardComponent } from './services_provider/dashboard/dashboard.component';
import { MakeFormComponent } from './services_provider/make-form/make-form.component';
import { EditPortfolioComponent } from './services_provider/edit-portfolio/edit-portfolio.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavigationComponent,
    DashboardComponent,
    MakeFormComponent,
    EditPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
