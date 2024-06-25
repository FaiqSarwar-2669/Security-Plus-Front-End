import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';
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

  }

  constructor(
    private services: Service
  ) {
  }
  ngOnInit() {
    this.services.getProvider().then((res: any) => {
      console.log(res)
      this.profiledata.bussines_name = res.data.bussiness_owner
      this.profiledata.first_name = res.data.bussiness_fname
      this.profiledata.last_name = res.data.bussiness_lname
      this.profiledata.number = res.data.phone_number
      this.profiledata.province = res.data.province
      this.profiledata.adresss = res.data.street_address
      this.profiledata.city = res.data.city_name
      this.profiledata.postal = res.data.area_code

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
}
