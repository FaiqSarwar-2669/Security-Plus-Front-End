import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { registration } from '../models/model';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Service } from '../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  ImageFile: any;
  selectedImg: any = '../../../assets/default.png';

  constructor(private services: Service) { }

  registration: registration = {
    bussiness_fname: "",
    bussiness_lname: "",
    bussiness_owner: "",
    area_code: "",
    phone_number: "",
    street_adress: "",
    city_name: "",
    provice: "",
    bussiness_type: "",
    password: "",
    conform_password: "",
    logo: "",
    email: "",
  }
  submitForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.registration.bussiness_fname?.trim()) {
      Swal.fire("Fill Business First Name !!");
    } else if (/\d/.test(this.registration.bussiness_fname)) {
      Swal.fire("Business First Name Cannot Contain Integers !!");
    } else if (!this.registration.bussiness_lname?.trim()) {
      Swal.fire("Fill Business Last Name !!");
    } else if (/\d/.test(this.registration.bussiness_lname)) {
      Swal.fire("Business Last Name Cannot Contain Integers !!");
    } else if (!this.registration.bussiness_owner?.trim()) {
      Swal.fire("Fill Business Owner Name !!");
    } else if (/\d/.test(this.registration.bussiness_owner)) {
      Swal.fire("Business Owner Name Cannot Contain Integers !!");
    } else if (!this.registration.area_code?.trim()) {
      Swal.fire("Fill Area Code !!");
    } else if (!Number.isInteger(Number(this.registration.area_code))) {
      Swal.fire("Area Code Cannot Contain Alphabets !!");
    } else if (!this.registration.phone_number?.trim()) {
      Swal.fire("Fill Contact Number !!");
    } else if (!Number.isInteger(Number(this.registration.phone_number))) {
      Swal.fire("Contact Number Cannot Contain Alphabets !!");
    } else if (this.registration.phone_number.length != 11) {
      Swal.fire("Enter 11 digit Number !!");
    } else if (!this.registration.street_adress?.trim()) {
      Swal.fire("Fill The Address !!");
    } else if (!this.registration.city_name?.trim()) {
      Swal.fire("Fill The City Name !!");
    } else if (/\d/.test(this.registration.city_name)) {
      Swal.fire("City Name Cannot Contain Integers !!");
    } else if (!this.registration.provice?.trim()) {
      Swal.fire("Fill The Province Name !!");
    } else if (/\d/.test(this.registration.provice)) {
      Swal.fire("Province Name Cannot Contain Integers !!");
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
          this.registration.bussiness_fname = "";
          this.registration.bussiness_lname= "";
          this.registration.bussiness_owner= "";
          this.registration.area_code= "";
          this.registration.phone_number= "";
          this.registration.street_adress= "";
          this.registration.city_name= "";
          this.registration.provice= "";
          this.registration.bussiness_type= "";
          this.registration.password= "";
          this.registration.conform_password= "";
          this.registration.logo= "";
          this.registration.email= "";
        } else if (res.error) {
          Swal.fire({
            icon: "error",
            title: res.error,
          });
        }
      }).catch((err: any) => {
        console.log(err);
      });
      // Swal.fire({
      //   icon: "success",
      //   title: "Your request has been saved wait for approval",
      // });
      // console.log(this.registration);
    }
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      allowEditing: true,
      quality: 90
    });

    this.selectedImg = `data:image/jpeg;base64,${image.base64String}`;
    const blobData = this.base64ToBlob(image.base64String, 'image/jpeg');
    this.ImageFile = new File([blobData], 'image.jpeg', { type: 'image/jpeg' });
    if (this.ImageFile) {
      this.registration.logo = this.ImageFile;
      console.log(this.ImageFile);
    }
  }
  base64ToBlob(base64: any, type: string) {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blobData = new Blob(byteArrays, { type });
    return blobData;
  }
}
