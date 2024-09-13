import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profiledata = {
    first_name: '',
    last_name: '',
    bussines_name: '',
    number: '',
    province: '',
    adresss: '',
    city: '',
    postal: '',
    cnic: '',
    front: '',
    back: '',
    certificate: '',
  }

  frontimage: any = '../../../assets/default.png'
  backtimage: any = '../../../assets/default.png'
  certificateimage: any = '../../../assets/default.png'
  imageFile1: any
  imageFile2: any
  imageFile3: any
  access: any

  constructor(
    private services: Service
  ) {
  }
  ngOnInit() {
    this.access = localStorage.getItem('activation')
    this.services.getProvider().then((res: any) => {
      this.profiledata.bussines_name = res.data.bussiness_owner
      this.profiledata.first_name = res.data.bussiness_fname
      this.profiledata.last_name = res.data.bussiness_lname
      this.profiledata.number = res.data.phone_number
      this.profiledata.province = res.data.province
      this.profiledata.adresss = res.data.street_address
      this.profiledata.city = res.data.city_name
      this.profiledata.postal = res.data.area_code
      this.profiledata.cnic = res.data.cnic
      this.frontimage = res.data.front ? res.data.front : '../../../assets/default.png';
      this.backtimage = res.data.back ? res.data.back : '../../../assets/default.png';
      this.certificateimage = res.data.certificate ? res.data.certificate : '../../../assets/default.png';

    }).catch((err: any) => {
      console.log(err)
    })
  }
  Update() {
    const postalPattern = /^[0-9]+$/;
    const numberPattern = /^[0-9]{11}$/;
    if (!this.profiledata.postal.match(postalPattern)) {
      Swal.fire({
        icon: 'error',
        title: 'Postal code must contain only numbers'
      });
    } else if (!this.profiledata.number.match(numberPattern)) {
      Swal.fire({
        icon: 'error',
        title: 'Phone number must be exactly 11 digits'
      });
    } else {
      const formdata = new FormData()
      formdata.append('bussiness_owner', this.profiledata.bussines_name)
      formdata.append('bussiness_fname', this.profiledata.first_name)
      formdata.append('bussiness_lname', this.profiledata.last_name)
      formdata.append('area_code', this.profiledata.postal)
      formdata.append('phone_number', this.profiledata.number)
      formdata.append('street_address', this.profiledata.adresss)
      formdata.append('city_name', this.profiledata.city)
      formdata.append('province', this.profiledata.province)
      formdata.append('cnic', this.profiledata.cnic)
      formdata.append('front', this.profiledata.front)
      formdata.append('back', this.profiledata.back)
      formdata.append('certificate', this.profiledata.certificate)
      this.services.updateProvider(formdata).then((res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message
        });
        this.ngOnInit()
      }).catch((err: any) => {
        console.log(err)
      })
    }
  }


  async frontPic() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      allowEditing: true,
      quality: 90
    });

    this.frontimage = `data:image/jpeg;base64,${image.base64String}`;
    const blobData = this.base64ToBlob(image.base64String, 'image/jpeg');
    this.imageFile1 = new File([blobData], 'image.jpeg', { type: 'image/jpeg' });
    if (this.imageFile1) {
      this.profiledata.front = this.imageFile1
    }
  }

  async backPic() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      allowEditing: true,
      quality: 90
    });

    this.backtimage = `data:image/jpeg;base64,${image.base64String}`;
    const blobData = this.base64ToBlob(image.base64String, 'image/jpeg');
    this.imageFile2 = new File([blobData], 'image.jpeg', { type: 'image/jpeg' });
    if (this.imageFile2) {
      this.profiledata.back = this.imageFile2
    }
  }

  async certPic() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      allowEditing: true,
      quality: 90
    });

    this.certificateimage = `data:image/jpeg;base64,${image.base64String}`;
    const blobData = this.base64ToBlob(image.base64String, 'image/jpeg');
    this.imageFile3 = new File([blobData], 'image.jpeg', { type: 'image/jpeg' });
    if (this.imageFile3) {
      this.profiledata.certificate = this.imageFile3
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
