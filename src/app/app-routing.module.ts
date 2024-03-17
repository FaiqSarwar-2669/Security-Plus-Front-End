import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './services_provider/dashboard/dashboard.component';
import { MakeFormComponent } from './services_provider/make-form/make-form.component';

const routes: Routes = [
  // { path: '', component: HomePageComponent }, 
  { path: 'registeration', component: RegistrationComponent }, 

  // for service provider
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'make-form', component: MakeFormComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
