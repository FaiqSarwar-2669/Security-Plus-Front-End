import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {


  constructor(private services: Service, private routes: Router) {

  }
  chat() {
    this.routes.navigate(['/provider-chat'])
  }

  logout() {
    this.services.logout().then((res: any) => {
      if (res) {
        Swal.fire({
          icon: 'success',
          title: res.message
        })
        this.routes.navigate(['/login']);
        localStorage.clear();
      }
    }).catch((err: any) => {
      if (err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.message
        })
      }
      console.log(err)
    });
  }

}
