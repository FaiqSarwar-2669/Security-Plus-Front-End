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
import { GuardRegisterationsComponent } from './services_provider/guard-registerations/guard-registerations.component';
import { ProviderChatComponent } from './services_provider/provider-chat/provider-chat.component';
import { CompanydetailComponent } from './companydetail/companydetail.component';
import { JobapplicationComponent } from './services_provider/jobapplication/jobapplication.component';
import { RegisterGuardsComponent } from './services_provider/register-guards/register-guards.component';
import { ProfileComponent } from './services_provider/profile/profile.component';
import { JobFormComponent } from './job-form/job-form.component';
import { GuardsDataComponent } from './services_provider/guards-data/guards-data.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { ToComponent } from './client/to/to.component';
import { NavComponent } from './client/nav/nav.component';
import { ViewOrganizationComponent } from './client/view-organization/view-organization.component';
import { SpecificOrganizationComponent } from './client/specific-organization/specific-organization.component';
import { ClientProfileComponent } from './client/client-profile/client-profile.component';
import { ChatclientComponent } from './client/chatclient/chatclient.component';
import { ViewOrganizationsComponent } from './Admin/view-organizations/view-organizations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { ViewJobApplicationComponent } from './Modaal/view-job-application/view-job-application.component';
import { GuardsClientComponent } from './client/guards-client/guards-client.component';
import { ViewGuardsComponent } from './Modaal/view-guards/view-guards.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { ChatService } from './services/firebase';
import { AttendenceComponent } from './client/attendence/attendence.component';
import { TeamMemberComponent } from './Component/team-member/team-member.component';
import { ReviewsComponent } from './services_provider/reviews/reviews.component';
import { PaymentComponent } from './client/payment/payment.component';
import { GuardPaymentsComponent } from './services_provider/guard-payments/guard-payments.component';
import { CompanyPaymentsComponent } from './services_provider/company-payments/company-payments.component';

const firebaseConfig = {
  apiKey: "AIzaSyD0vwv6U3qMdNZBVCuOzbZNZlPYaQRNFAw",
  authDomain: "chat-system-cb753.firebaseapp.com",
  projectId: "chat-system-cb753",
  storageBucket: "chat-system-cb753.appspot.com",
  messagingSenderId: "950287806778",
  appId: "1:950287806778:web:875950959a5356bd686003"
};


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
    GuardRegisterationsComponent,
    ProviderChatComponent,
    CompanydetailComponent,
    JobapplicationComponent,
    RegisterGuardsComponent,
    ProfileComponent,
    JobFormComponent,
    GuardsDataComponent,
    ClientDashboardComponent,
    ToComponent,
    NavComponent,
    ViewOrganizationComponent,
    SpecificOrganizationComponent,
    ClientProfileComponent,
    ChatclientComponent,
    ViewOrganizationsComponent,
    ViewJobApplicationComponent,
    GuardsClientComponent,
    ViewGuardsComponent,
    AttendenceComponent,
    TeamMemberComponent,
    ReviewsComponent,
    PaymentComponent,
    GuardPaymentsComponent,
    CompanyPaymentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
