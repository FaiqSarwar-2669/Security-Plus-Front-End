import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './services_provider/dashboard/dashboard.component';
import { MakeFormComponent } from './services_provider/make-form/make-form.component';
import { EditPortfolioComponent } from './services_provider/edit-portfolio/edit-portfolio.component';
import { HomeNevigationComponent } from './home-nevigation/home-nevigation.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CompaniesComponent } from './companies/companies.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { FeaturesComponent } from './features/features.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavigationComponent } from './services_provider/navigation/navigation.component';
import { AdmindashboardComponent } from './Admin/admindashboard/admindashboard.component';
import { RegisterCompaniesComponent } from './Admin/register-companies/register-companies.component';
import { UnregisterCompaniesComponent } from './Admin/unregister-companies/unregister-companies.component';
import { RegisterClientComponent } from './Admin/register-client/register-client.component';
import { UnregisterClientComponent } from './Admin/unregister-client/unregister-client.component';
import { NewPasswordComponent } from './Admin/new-password/new-password.component';
import { PreviewPortfolioComponent } from './services_provider/preview-portfolio/preview-portfolio.component';
import { TopNavComponent } from './services_provider/top-nav/top-nav.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-nevigation', component: HomeNevigationComponent },
  { path: 'registeration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionComponent },
  { path: 'privacy-policies', component: PrivacyPoliciesComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'top-navigation', component: TopNavComponent },

  // for service provider
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nevigation', component: NavigationComponent },
  { path: 'make-form', component: MakeFormComponent },
  { path: 'edit-portfolio', component: EditPortfolioComponent },
  { path: 'preview-portfolio', component: PreviewPortfolioComponent },


  // for admin
  { path: 'admin/dashboard', component: AdmindashboardComponent },
  { path: 'registerCompanies', component: RegisterCompaniesComponent },
  { path: 'unRegisterCompanies', component: UnregisterCompaniesComponent },
  { path: 'registerClient', component: RegisterClientComponent },
  { path: 'UnRegisterClient', component: UnregisterClientComponent },
  { path: 'admin/newpassword', component: NewPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
