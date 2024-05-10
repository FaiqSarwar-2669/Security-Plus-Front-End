import { Component } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview-forms',
  templateUrl: './preview-forms.component.html',
  styleUrls: ['./preview-forms.component.scss']
})
export class PreviewFormsComponent {
  
  constructor(private services:Service){
    this.services.getAndUpdateform().then((res:any)=>{
      console.log(res)
    }).catch((err:any)=>{
      console.log(err)
    })
  }
}
