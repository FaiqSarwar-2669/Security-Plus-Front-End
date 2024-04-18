import { Component } from '@angular/core';
import { Service } from 'src/app/services/admin_services';
import Swal from 'sweetalert2';

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
      if(err && err.error){
        Swal.fire({
          icon:'error',
          title: err.error.message
        })
      }
    })
  }

  Active(id:any) {
    alert(id)
  }
  viewApplication(id:any) {
    alert(id)
  }
}
