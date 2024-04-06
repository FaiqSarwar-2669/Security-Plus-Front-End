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
import { FormsModule } from '@angular/forms';
import { HomeNevigationComponent } from './home-nevigation/home-nevigation.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CompaniesComponent } from './companies/companies.component';
import { FooterComponent } from './footer/footer.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavigationComponent,
    DashboardComponent,
    MakeFormComponent,
    EditPortfolioComponent,
    HomeNevigationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CompaniesComponent,
    FooterComponent,
    FaqsComponent,
    TermsAndConditionComponent,
    PrivacyPoliciesComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
