import { Component } from '@angular/core';
import { Service } from 'src/app/services/admin_services';

@Component({
  selector: 'app-register-companies',
  templateUrl: './register-companies.component.html',
  styleUrls: ['./register-companies.component.scss']
})
export class RegisterCompaniesComponent {


  registerCompanies: any[] = [];
  constructor(private services: Service) {
    this.services.getAllCompanies().then((res: any) => {
      if (res && res.data) {
        this.registerCompanies = res.data;
        console.log(this.registerCompanies);
      }
    }).catch((err: any) => {
      console.log(err)
    })
  }

  Active() {

  }
  viewApplication() {

  }
}
