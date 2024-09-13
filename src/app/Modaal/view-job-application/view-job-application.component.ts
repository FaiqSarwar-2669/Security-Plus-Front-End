import { Component ,Input,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-job-application',
  templateUrl: './view-job-application.component.html',
  styleUrls: ['./view-job-application.component.scss']
})
export class ViewJobApplicationComponent implements OnInit{

  @Input() value?: number;
  data:any
  constructor(private modalController: ModalController,
    private services: Service
  ) {

  }

  ngOnInit(): void {
    this.services.viewJob(this.value).then((res: any) => {
      if (res && res.data) {
        console.log(res.data[0].Form)
        this.data = res.data[0].Form
      }
    }).catch((err: any) => {
      console.log(err)
    })
  }

  closeModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  download(){
    this.services.viewJobApplication(this.value).then((res: any) => {
      const blob = new Blob([res], { type: 'application/pdf' });
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'example.pdf';
      link.click();
    }).catch((err: any) => {
      if (err && err.error.errors) {
        Swal.fire({
          icon: "error",
          title: err.error.errors.message,
        });
      }
    })
  }
}
