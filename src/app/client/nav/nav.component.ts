import { Component } from '@angular/core';
import { Service } from 'src/app/services/client_services';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  selectedImg: string = "../../../assets/default.png";
  // ht
  name: any   
  access: any
  constructor(private services: Service, private routes: Router) {
    this.access = localStorage.getItem('activation')
    this.services.getsidebar().then((res: any) => {
      // console.log(res);
      if (res) {
        this.selectedImg = res.pic ? res.pic : this.selectedImg;
        this.name = res.name
      }
    }).catch((err: any) => {
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.message
        })
      }
    })
    let profileData: any = {}
    this.services.getClient().then((res: any) => {
      profileData.id = res.data.id
      profileData.bussines_name = res.data.bussiness_owner
      profileData.first_name = res.data.bussiness_fname
      profileData.last_name = res.data.bussiness_lname
      profileData.number = res.data.phone_number
      profileData.province = res.data.province
      profileData.adresss = res.data.street_address
      profileData.city = res.data.city_name
      profileData.postal = res.data.area_code
      if (res.data.profile === '') {
        this.selectedImg = '../../../assets/default.png';
      } else {
        this.selectedImg = res.data.profile
      }
      profileData.cnic = res.data.cnic
      profileData.image = res.data.profile
      console.clear()
      console.log(profileData)
      localStorage.setItem('user', JSON.stringify(profileData))

    })
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
