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

const routes: Routes = [
  // { path: '', component: HomePageComponent }, 
  { path: 'home-nevigation', component: HomeNevigationComponent },
  { path: 'registeration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionComponent },
  { path: 'privacy-policies', component: PrivacyPoliciesComponent },
  { path: 'features', component: FeaturesComponent },

  // for service provider
  { path: 'dashboard', component: DashboardComponent },
  { path: 'make-form', component: MakeFormComponent },
  { path: 'edit-portfolio', component: EditPortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
