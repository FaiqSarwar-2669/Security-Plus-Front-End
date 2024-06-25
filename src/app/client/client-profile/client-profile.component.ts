import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/client_services';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  profiledata = {
    first_name: '',
    last_name: '',
    bussines_name: '',
    number: '',
    province: '',
    adresss: '',
    city: '',
    postal: '',
    image: '',

  }
  selectedImg: any = '../../../assets/default.png';
  ImageFile:any
  constructor(
    private services: Service
  ) { 
  }

  ngOnInit() {
    this.services.getClient().then((res: any) => {
      console.log(res)
      this.profiledata.bussines_name = res.data.bussiness_owner
      this.profiledata.first_name = res.data.bussiness_fname
      this.profiledata.last_name = res.data.bussiness_lname
      this.profiledata.number = res.data.phone_number
      this.profiledata.province = res.data.province
      this.profiledata.adresss = res.data.street_address
      this.profiledata.city = res.data.city_name
      this.profiledata.postal = res.data.area_code
      if(res.data.profile === ''){
        this.selectedImg = '../../../assets/default.png';
      }else{
        this.selectedImg = res.data.profile
      }
      this.profiledata.image = res.data.profile

    }).catch((err: any) => {
      console.log(err)
    })
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
     this.profiledata.image = this.ImageFile
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

  Update(){
    const postalPattern = /^[0-9]+$/;
    const numberPattern = /^[0-9]{11}$/;
    if (!this.profiledata.postal.match(postalPattern)) {
      Swal.fire({
        icon: 'error',
        title: 'Postal code must contain only numbers'
      });
    }else if(!this.profiledata.number.match(numberPattern)){
      Swal.fire({
        icon: 'error',
        title: 'Phone number must be exactly 11 digits'
      });
    }else{
      const formdata = new FormData()
      formdata.append('bussiness_owner',this.profiledata.bussines_name)
      formdata.append('bussiness_fname',this.profiledata.first_name)
      formdata.append('bussiness_lname',this.profiledata.last_name)
      formdata.append('area_code',this.profiledata.postal)
      formdata.append('phone_number',this.profiledata.number)
      formdata.append('street_address',this.profiledata.adresss)
      formdata.append('city_name',this.profiledata.city)
      formdata.append('province',this.profiledata.province)
      formdata.append('profile',this.profiledata.image)
      this.services.updateClient(formdata).then((res:any)=>{
        Swal.fire({
          icon: 'success',
          title: res.message
        });
        this.ngOnInit()
      }).catch((err:any)=>{
        console.log(err)
      })
    }
  }
}
