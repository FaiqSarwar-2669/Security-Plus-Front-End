import { Component } from '@angular/core';
import { Service } from 'src/app/services/admin_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unregister-companies',
  templateUrl: './unregister-companies.component.html',
  styleUrls: ['./unregister-companies.component.scss']
})
export class UnregisterCompaniesComponent {

  unRegisterCompanies: any[] = [];
  constructor(private services: Service) {
    this.getData();
  }

  getData() {
    this.services.getAllUnRegisterCompanies().then((res: any) => {
      if (res && res.data) {
        this.unRegisterCompanies = res.data;
        console.log(this.unRegisterCompanies);
      }
    }).catch((err: any) => {
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.message
        })
      }
    })
  }

  Active(id: any) {
    this.services.inActivationOrganizations(id).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: 'success',
          title: res.message
        })
        this.getData();
      }
    }).catch((err: any) => {
      console.log(err)
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.message
        })
      }
    });
  }
  viewApplication(id: any) {
    alert(id)
  }
}
