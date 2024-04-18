import { Component } from '@angular/core';
import { Service } from 'src/app/services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nevigation',
  templateUrl: './nevigation.component.html',
  styleUrls: ['./nevigation.component.scss']
})
export class NevigationComponent {


  constructor(private services: Service, private routes: Router) {

  }
  showMore(event: MouseEvent) {
    const mydive = event.currentTarget as HTMLElement;
    const up = mydive.querySelector('.fa-angle-up') as HTMLElement | null;
    const down = mydive.querySelector('.fa-angle-down') as HTMLElement | null;
    if (up && down) {
      if (mydive.style.height === '40px') {
        mydive.style.height = 'auto';
        up.style.display = 'block';
        down.style.display = 'none';
      } else {
        mydive.style.height = '40px';
        up.style.display = 'none';
        down.style.display = 'block';
      }
    }
  }
  responsive() {
    const result = document.getElementById('main-section') as HTMLElement;
    const left = document.getElementById('left') as HTMLElement;
    const right = document.getElementById('right') as HTMLElement;

    if (result?.style.left === '-250px') {
      result.style.left = '0px';
      right.style.display = 'none';
      left.style.display = 'block';
    } else {
      result.style.left = '-250px';
      left.style.display = 'none';
      right.style.display = 'block';
    }
  }

  logout() {
    this.services.logout().then((res: any) => {
      if(res){
        Swal.fire({
          icon:'success',
          title: res.message
        })
        this.routes.navigate(['/login']);
        localStorage.clear();
      }
    }).catch((err: any) => {
      if(err.error){
        Swal.fire({
          icon:'error',
          title: err.error.message
        })
      }
      console.log(err)
    });
  }
}
