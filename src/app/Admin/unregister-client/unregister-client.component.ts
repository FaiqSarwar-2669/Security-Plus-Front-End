import { Component } from '@angular/core';
import { Service } from 'src/app/services/admin_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unregister-client',
  templateUrl: './unregister-client.component.html',
  styleUrls: ['./unregister-client.component.scss']
})
export class UnregisterClientComponent {
  unRegisterClientOrganization: any[] = [];
  constructor(private services: Service) {
    this.getdata();
  }

  getdata(){
    this.services.getAllUnRegisterCilentOrganization().then((res: any) => {
      if (res && res.data) {
        this.unRegisterClientOrganization = res.data;
        console.log(this.unRegisterClientOrganization);
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
    this.services.activationOrganizations(id).then((res:any)=>{
      if(res){
        Swal.fire({
          icon: 'success',
          title: res.message
        })
        this.getdata();
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
    alert(id)
  }
}
