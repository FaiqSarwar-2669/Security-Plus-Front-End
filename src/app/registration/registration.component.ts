import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { registration } from '../models/model';
import { Service } from '../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  ImageFile: any;
  selectedImg: any = '../../../assets/default.png';
  type:any = 'password'

  constructor(private services: Service) { }

  registration: registration = {
    bussiness_owner: "",
    bussiness_type: "",
    password: "",
    conform_password: "",
    email: "",
  }

  display() {
    this.type = (this.type === 'text') ? 'password' : 'text';
  }
  submitForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.registration.bussiness_owner?.trim()) {
      Swal.fire("Fill Company  Name !!");
    } else if (/\d/.test(this.registration.bussiness_owner)) {
      Swal.fire("Company Name Cannot Contain Integers !!");
    } else if (!this.registration.bussiness_type?.trim()) {
      Swal.fire("Fill The Type of Bussiness !!");
    } else if (!this.registration.password?.trim()) {
      Swal.fire("Fill The Password !!");
    } else if (!this.registration.conform_password?.trim()) {
      Swal.fire("Fill The Confirm Password !!");
    } else if (this.registration.password?.trim() !== this.registration.conform_password?.trim()) {
      Swal.fire("Password Does Not Match !!");
    } else if (!this.registration.email?.trim()) {
      Swal.fire("Fill Email !!");
    } else if (!emailPattern.test(this.registration.email)) {
      Swal.fire("Invalid Email Address !!");
    } else {

      this.services.registeration(this.registration).then((res: any) => {
        if (res.message) {
          Swal.fire({
            icon: "success",
            title: res.message,
          });
          this.registration.bussiness_owner = "";
          this.registration.bussiness_type = "";
          this.registration.password = "";
          this.registration.conform_password = "";
          this.registration.email = "";
        } else if (res.error) {
          Swal.fire({
            icon: "error",
            title: res.error,
          });
        }
      }).catch((err: any) => {
        console.log(err);
      });
    }
  }

}
