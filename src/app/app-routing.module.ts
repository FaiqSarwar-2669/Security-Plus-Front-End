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
<<<<<<< HEAD
import { GuardRegisterationsComponent } from './services_provider/guard-registerations/guard-registerations.component';
import { ClientDashboardComponent } from './client_organization/client-dashboard/client-dashboard.component';
=======
import { AdminChatComponent } from './Admin/admin-chat/admin-chat.component';
import { ProviderChatComponent } from './services_provider/provider-chat/provider-chat.component';
import { PreviewFormsComponent } from './services_provider/preview-forms/preview-forms.component';
import { JobapplicationComponent } from './services_provider/jobapplication/jobapplication.component';
import { RegisterGuardsComponent } from './services_provider/register-guards/register-guards.component';
import { ProfileComponent } from './services_provider/profile/profile.component';

>>>>>>> e262174737e63d90b26cae328571c46851a1a7a6
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
  { path: 'preview-form', component: PreviewFormsComponent },
  { path: 'edit-portfolio', component: EditPortfolioComponent },
  { path: 'preview-portfolio', component: PreviewPortfolioComponent },
<<<<<<< HEAD
  { path: 'guardregisteration', component: GuardRegisterationsComponent },

=======
  { path: 'provider-chat', component: ProviderChatComponent },
  { path: 'job-application', component: JobapplicationComponent },
  { path: 'register-guards', component: RegisterGuardsComponent },
  { path: 'profile', component: ProfileComponent },
>>>>>>> e262174737e63d90b26cae328571c46851a1a7a6

  // for admin
  { path: 'admin/dashboard', component: AdmindashboardComponent },
  { path: 'registerCompanies', component: RegisterCompaniesComponent },
  { path: 'unRegisterCompanies', component: UnregisterCompaniesComponent },
  { path: 'registerClient', component: RegisterClientComponent },
  { path: 'UnRegisterClient', component: UnregisterClientComponent },
  { path: 'admin/newpassword', component: NewPasswordComponent },
<<<<<<< HEAD
  //for client
  { path: 'clientdashboard', component: ClientDashboardComponent },
=======
  { path: 'admin/chat', component: AdminChatComponent },
>>>>>>> e262174737e63d90b26cae328571c46851a1a7a6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
