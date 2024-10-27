import { Component } from '@angular/core';
import { Service } from '../services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { login } from '../models/model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  type: any = 'password';
  logindetail: login = {
    email: '',
    password: ''
  }

  constructor(private services: Service, private routes: Router) {

  }

  display() {
    this.type = (this.type === 'text') ? 'password' : 'text';
  }

  login() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = this.logindetail.email || '';
    if (this.logindetail.email?.trim() === '') {
      Swal.fire('Enter the Email');
    } else if (!emailPattern.test(email)) {
      Swal.fire('Invalid Email');
    } else if (this.logindetail.password?.trim() === '') {
      Swal.fire('Enter the password');
    } else {
      this.services.login(this.logindetail).then((res: any) => {
        if (res) {
          Swal.fire({
            icon: 'success',
            title: res.message
          });
          localStorage.setItem('B_Token', res.token);
          localStorage.setItem('activation', res.activation);
          localStorage.setItem('UserID', res.userLoged);
          if (res.role.toLowerCase() === 'admin') {
            this.routes.navigate(['/admin/dashboard']);
          } else if (res.role.toLowerCase() === 'provider') {
            if (res.activation == 1) {
              this.routes.navigate(['/dashboard']);
            } else if (res.activation == 0) {
              this.routes.navigate(['/profile']);
            }
          } else if (res.role.toLowerCase() === 'taker') {
            if (res.activation == 1) {
              this.routes.navigate(['/client-dashboard'])
            } else if (res.activation == 0) {
              this.routes.navigate(['/Client-profile']);
            }
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login failed'
          });
        }
        console.log(res)
      }).catch((err: any) => {
        if (err && err.error) {
          Swal.fire({
            icon: 'error',
            title: err.error.error
          });
        }
        console.log(err)
      });
    }
  }
}
