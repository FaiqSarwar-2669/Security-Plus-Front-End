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
    this.services.getRegisterCilentOrganization().then((res: any) => {
      if (res && res.data) {
        this.registerClients = res.data;
        console.log(this.registerClients);
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
