import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './services_provider/dashboard/dashboard.component';
import { MakeFormComponent } from './services_provider/make-form/make-form.component';
import { EditPortfolioComponent } from './services_provider/edit-portfolio/edit-portfolio.component';
import { HomeNevigationComponent } from './home-nevigation/home-nevigation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', component: HomePageComponent }, 
  { path: 'home-nevigation', component: HomeNevigationComponent },
  { path: 'registeration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },

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
