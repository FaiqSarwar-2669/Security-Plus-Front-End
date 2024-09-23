import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Service } from 'src/app/services/provider_services';

@Component({
  selector: 'app-view-guards',
  templateUrl: './view-guards.component.html',
  styleUrls: ['./view-guards.component.scss']
})
export class ViewGuardsComponent {

  @Input() value?: number;
  data: any
  constructor(private modalController: ModalController,
    private services: Service
  ) {

  }

  ngOnInit(): void {
    this.services.specificGuard(this.value).then((res: any) => {
      if (res && res.data) {
        this.data = res.data;
        console.log(this.data)
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
}
