import { Component } from '@angular/core';
import { Service } from 'src/app/services/admin_services';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unregister-companies',
  templateUrl: './unregister-companies.component.html',
  styleUrls: ['./unregister-companies.component.scss']
})
export class UnregisterCompaniesComponent {

  unRegisterCompanies: any[] = [];
  constructor(private services: Service,
    private routes:Router
  ) {
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
        this.getData();
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
    // this.services.viewOrganizations(id).then((res: any) => {
    //   if (res && res.data && res.data.length > 0) {
    //     const organization = res.data[0];
    //     Swal.fire({
    //       icon: 'info',
    //       title: 'Organization Details',
    //       html: `
    //             <div class='custom-swal-content'>
    //                 <p><strong>First Name:</strong> ${organization.bussiness_fname}</p>
    //                 <p><strong>Last Name:</strong> ${organization.bussiness_lname}</p>
    //                 <p><strong>Business Name:</strong> ${organization.bussiness_owner}</p>
    //                 <p><strong>Area Code:</strong> ${organization.area_code}</p>
    //                 <p><strong>Phone Number:</strong> ${organization.phone_number}</p>
    //                 <p><strong>Address:</strong> ${organization.street_address}</p>
    //                 <p><strong>City:</strong> ${organization.city_name}</p>
    //                 <p><strong>Province:</strong> ${organization.province}</p>
    //                 <p><strong>Email:</strong> ${organization.email}</p>
    //                 <p><strong>Business Type:</strong> ${organization.bussiness_type}</p>
    //             </div>
    //         `,
    //         width: '80%',
    //     });
    //   }
    // }).catch((err: any) => {
    //   console.log(err)
    //   if (err && err.error) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: err.error.error
    //     })
    //   }
    // });
  }
}
