import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/services/admin_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-organizations',
  templateUrl: './view-organizations.component.html',
  styleUrls: ['./view-organizations.component.scss']
})
export class ViewOrganizationsComponent {

  profiledata = {
    id: '',
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
  id: any;

  constructor(private router: Router,
    private services: Service
  ) { }
  ngOnInit() {

    this.services.viewOrganizations(this.services.getviewOrganizationid).then((res: any) => {
      if (res && res.data && res.data.length > 0) {
        const organization = res.data[0];
        this.profiledata.id = organization.id
        this.profiledata.bussines_name = organization.bussiness_owner
        this.profiledata.first_name = organization.bussiness_fname
        this.profiledata.last_name = organization.bussiness_lname
        this.profiledata.number = organization.phone_number
        this.profiledata.province = organization.province
        this.profiledata.adresss = organization.street_address
        this.profiledata.city = organization.city_name
        this.profiledata.postal = organization.area_code
        this.profiledata.cnic = organization.cnic
        this.frontimage = organization.front ? organization.front : '../../../assets/default.png';
        this.backtimage = organization.back ? organization.back : '../../../assets/default.png';
        this.certificateimage = organization.certificate ? organization.certificate : '../../../assets/default.png';
        console.log(organization)
      }
    }).catch((err: any) => {
      console.log(err)
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        })
      }
    })
  }

  activate(id: any) {
    this.services.inActivationOrganizations(id).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: 'success',
          title: res.message
        })
      }
    }).catch((err: any) => {
      console.log(err)
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        })
      }
    });
  }

  back(){
    this.router.navigate(['/unRegisterCompanies'])
  }
}

