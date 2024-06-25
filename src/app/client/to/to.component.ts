import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.scss']
})
export class ToComponent {

  constructor(private services: Service, private routes: Router) {

  }
  display(event: MouseEvent) {
    const mydive = event.currentTarget as HTMLElement;
    const element = mydive.querySelector('.drop-down') as HTMLElement | null;
    if (element) {
      if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
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
