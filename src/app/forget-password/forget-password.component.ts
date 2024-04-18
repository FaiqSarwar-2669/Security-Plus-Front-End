import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../services';
import Swal from 'sweetalert2';
import { forgetPassword } from '../models/model';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  forgetPasswordData: forgetPassword = {
    'email': ''
  }

  constructor(private services: Service, private routes: Router) {

  }

  forget() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = this.forgetPasswordData.email || '';
    if (this.forgetPasswordData.email?.trim() === '') {
      Swal.fire('Enter the Email');
      return;
    } else if (!emailPattern.test(email)) {
      Swal.fire('Invalid Email');
      return;
    } else {
      this.services.forgetPassword(this.forgetPasswordData).then((res: any) => {
        if (res && res.message) {
          Swal.fire({
            icon: 'success',
            title: res.message
          })
          this.forgetPasswordData.email = '';
          this.routes.navigate(['/login']);
        }
      }).catch((err: any) => {
        console.log(err)
        if(err && err.error){

          Swal.fire({
            icon: 'error',
            title: err.error.error
          })
        }
      })
    }
  }
}
