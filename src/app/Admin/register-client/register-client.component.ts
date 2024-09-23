import { Component } from '@angular/core';
import { Service } from 'src/app/services/admin_services';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent {
  registerClients: any[] = [];
  constructor(private services: Service,
    private routes:Router
  ) {
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
  viewApplication(id: any) {
    this.services.getviewOrganizationid = id
    this.routes.navigate(['/view'])
  }
}
