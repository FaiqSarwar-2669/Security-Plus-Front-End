import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';
import { ModalController } from '@ionic/angular';
import { ViewJobApplicationComponent } from 'src/app/Modaal/view-job-application/view-job-application.component';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.scss']
})
export class JobapplicationComponent implements OnInit {

  renderApplication: any
  originalApplications: any
  constructor(
    private services: Service,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.services.getAllJobApplications().then((res: any) => {
      if (res && res.data) {
        console.log(res.data)
        this.renderApplication = res.data;
        this.originalApplications = res.data;
      }
    }).catch((err: any) => {
      console.log(err)
    })
  }

  Accepted(id: any) {
    this.services.activeJobApplication(id).then((res: any) => {
      if (res && res.message) {
        Swal.fire({
          icon: "success",
          title: res.message,
        });
        this.ngOnInit()
      }
    }).catch((err: any) => {
      if (err && err.error.errors) {
        Swal.fire({
          icon: "error",
          title: err.error.errors.message,
        });
      }
    })
  }
  
  Rejected(id: any) {
    this.services.rejectJobApplication(id).then((res: any) => {
      if (res && res.message) {
        Swal.fire({
          icon: "success",
          title: res.message,
        });
        this.ngOnInit()
      }
    }).catch((err: any) => {
      if (err && err.error.errors) {
        Swal.fire({
          icon: "error",
          title: err.error.errors.message,
        });
      }
    })
  }

  async view(id: any) {
    console.log(id)
    const modal = await this.modalController.create({
      component: ViewJobApplicationComponent,
      componentProps: { value: id }
    });
    await modal.present();
  }

  filter(evt: any) {
    const value = evt.target.value;
    if (value === 'all') {
      this.renderApplication = this.originalApplications;
    } else {
      this.renderApplication = this.originalApplications.filter((item: any) => item.status === value);
    }
  }


}
