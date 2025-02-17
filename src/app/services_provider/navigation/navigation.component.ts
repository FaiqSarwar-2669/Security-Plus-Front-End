import { Block, HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  selectedImg: string = "../../../assets/default.png";

  access: any
  constructor(private services: Service, private routes: Router) {
    this.access = localStorage.getItem('activation')
    this.services.getAndUpdatePortfolio().then((res: any) => {
      if (res && res.data && res.data.length > 0) {
        const data = res.data[0];
        this.selectedImg = data.logo ? data.logo : this.selectedImg;
      }
    }).catch((err: any) => {
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.message
        })
      }
    })
    console.log(this.access)
    let profileData: any = {}
    this.services.getProvider().then((res: any) => {
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
