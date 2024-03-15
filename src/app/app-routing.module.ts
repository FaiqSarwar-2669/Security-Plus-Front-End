import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './services_provider/dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', component: HomePageComponent }, 
  { path: 'registeration', component: RegistrationComponent }, 
  { path: 'dashboard', component: DashboardComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
