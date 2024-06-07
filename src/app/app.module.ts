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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeNevigationComponent } from './home-nevigation/home-nevigation.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CompaniesComponent } from './companies/companies.component';
import { FooterComponent } from './footer/footer.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { FeaturesComponent } from './features/features.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NevigationComponent } from './Admin/nevigation/nevigation.component';
import { RegisterCompaniesComponent } from './Admin/register-companies/register-companies.component';
import { UnregisterCompaniesComponent } from './Admin/unregister-companies/unregister-companies.component';
import { UnregisterClientComponent } from './Admin/unregister-client/unregister-client.component';
import { RegisterClientComponent } from './Admin/register-client/register-client.component';
import { AdmindashboardComponent } from './Admin/admindashboard/admindashboard.component';
import { NewPasswordComponent } from './Admin/new-password/new-password.component';
import { PreviewPortfolioComponent } from './services_provider/preview-portfolio/preview-portfolio.component';
import { PreviewFormsComponent } from './services_provider/preview-forms/preview-forms.component';
import { TopNavComponent } from './services_provider/top-nav/top-nav.component';
import { ProviderChatComponent } from './services_provider/provider-chat/provider-chat.component';
import { CompanydetailComponent } from './companydetail/companydetail.component';


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
    FeaturesComponent,
    BenefitsComponent,
    AboutUsComponent,
    HomeComponent,
    NevigationComponent,
    RegisterCompaniesComponent,
    UnregisterCompaniesComponent,
    UnregisterClientComponent,
    RegisterClientComponent,
    AdmindashboardComponent,
    NewPasswordComponent,
    PreviewPortfolioComponent,
    PreviewFormsComponent,
    TopNavComponent,
    ProviderChatComponent,
    CompanydetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
