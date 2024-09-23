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
import { GuardRegisterationsComponent } from './services_provider/guard-registerations/guard-registerations.component';
import { AdminChatComponent } from './Admin/admin-chat/admin-chat.component';
import { ProviderChatComponent } from './services_provider/provider-chat/provider-chat.component';
import { PreviewFormsComponent } from './services_provider/preview-forms/preview-forms.component';
import { CompanydetailComponent } from './companydetail/companydetail.component';
import { JobapplicationComponent } from './services_provider/jobapplication/jobapplication.component';
import { RegisterGuardsComponent } from './services_provider/register-guards/register-guards.component';
import { ProfileComponent } from './services_provider/profile/profile.component';
import { JobFormComponent } from './job-form/job-form.component';
import { GuardsDataComponent } from './services_provider/guards-data/guards-data.component';
import { ViewOrganizationComponent } from './client/view-organization/view-organization.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { SpecificOrganizationComponent } from './client/specific-organization/specific-organization.component';
import { ClientProfileComponent } from './client/client-profile/client-profile.component';
import { ChatclientComponent } from './client/chatclient/chatclient.component';
import { ViewOrganizationsComponent } from './Admin/view-organizations/view-organizations.component';
import { ViewJobApplicationComponent } from './Modaal/view-job-application/view-job-application.component';
import { GuardsClientComponent } from './client/guards-client/guards-client.component';

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
  { path: 'company-detal', component: CompanydetailComponent },
  { path: 'form', component: JobFormComponent },

  { path: 'test', component: ViewJobApplicationComponent },

  
  

  // for service provider
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nevigation', component: NavigationComponent },
  { path: 'make-form', component: MakeFormComponent },
  { path: 'preview-form', component: PreviewFormsComponent },
  { path: 'edit-portfolio', component: EditPortfolioComponent },
  { path: 'preview-portfolio', component: PreviewPortfolioComponent },
  { path: 'guardregisteration', component: GuardRegisterationsComponent },
  { path: 'provider-chat', component: ProviderChatComponent },
  { path: 'job-application', component: JobapplicationComponent },
  { path: 'register-guards', component: RegisterGuardsComponent },
  { path: 'guards-data', component: GuardsDataComponent },
  { path: 'profile', component: ProfileComponent },

  // for admin
  { path: 'admin/dashboard', component: AdmindashboardComponent },
  { path: 'registerCompanies', component: RegisterCompaniesComponent },
  { path: 'unRegisterCompanies', component: UnregisterCompaniesComponent },
  { path: 'registerClient', component: RegisterClientComponent },
  { path: 'UnRegisterClient', component: UnregisterClientComponent },
  { path: 'admin/newpassword', component: NewPasswordComponent },
  { path: 'view', component: ViewOrganizationsComponent },

  //for client
  
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'chat-client', component: ChatclientComponent },
  { path: 'view-organization', component: ViewOrganizationComponent },
  { path: 'specific-organization', component: SpecificOrganizationComponent },
  { path: 'Client-profile', component: ClientProfileComponent },
  { path: 'Client-contracts', component: GuardsClientComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
