import { Component } from '@angular/core';
import { Service } from 'src/app/services/admin_services';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unregister-client',
  templateUrl: './unregister-client.component.html',
  styleUrls: ['./unregister-client.component.scss']
})
export class UnregisterClientComponent {
  unRegisterClientOrganization: any[] = [];
  constructor(private services: Service,
    private routes: Router
  ) {
    this.getdata();
  }

  getdata() {
    this.services.getAllUnRegisterCilentOrganization().then((res: any) => {
      if (res && res.data) {
        this.unRegisterClientOrganization = res.data;
        console.log(this.unRegisterClientOrganization);
      }
    }).catch((err: any) => {
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error
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
        this.getdata();
      }
    }).catch((err: any) => {
      console.log(err)
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        })
      }
    });
  }
  remindApplication(id: any) {
    this.services.remindOrganizations(id).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: 'success',
          title: res.message
        })
      }
    }).catch((err: any) => {
      console.log(err)
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        })
      }
    });
  }
  viewApplication(id: any) {
    this.services.getviewOrganizationid = id
    this.routes.navigate(['/view'])
  }
}
