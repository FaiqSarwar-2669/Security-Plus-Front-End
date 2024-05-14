import { Component } from '@angular/core';
import { Service } from 'src/app/services/admin_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent {
  registerClients: any[] = [];
  constructor(private services: Service) {
    this.getData();
  }

  getData(){
    this.services.getRegisterCilentOrganization().then((res: any) => {
      if (res && res.data) {
        this.registerClients = res.data;
        console.log(this.registerClients);
      }
    }).catch((err: any) => {
      if(err && err.error){
        Swal.fire({
          icon:'error',
          title: err.error.error
        })
      }
    })
  }
  Active(id:any) {
    this.services.ActivationOrganizations(id).then((res:any)=>{
      if(res){
        Swal.fire({
          icon: 'success',
          title: res.message
        })
        this.getData();
      }
    }).catch((err:any)=>{
      console.log(err)
      if(err && err.error){
        Swal.fire({
          icon: 'error',
          title: err.error.message
        })
      }
    });
  }
  viewApplication(id:any) {
    this.services.viewOrganizations(id).then((res: any) => {
      if (res && res.data && res.data.length > 0) {
        const organization = res.data[0];
        Swal.fire({
          icon: 'info',
          title: 'Organization Details',
          html: `
                <div>
                    <p><strong>First Name:</strong> ${organization.bussiness_fname}</p>
                    <p><strong>Last Name:</strong> ${organization.bussiness_lname}</p>
                    <p><strong>Business Name:</strong> ${organization.bussiness_owner}</p>
                    <p><strong>Area Code:</strong> ${organization.area_code}</p>
                    <p><strong>Phone Number:</strong> ${organization.phone_number}</p>
                    <p><strong>Address:</strong> ${organization.street_address}</p>
                    <p><strong>City:</strong> ${organization.city_name}</p>
                    <p><strong>Province:</strong> ${organization.province}</p>
                    <p><strong>Email:</strong> ${organization.email}</p>
                    <p><strong>Business Type:</strong> ${organization.bussiness_type}</p>
                    <!-- Add other fields here -->
                </div>
            `
        });
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
}
