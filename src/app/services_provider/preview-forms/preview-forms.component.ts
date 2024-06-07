import { Component,OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import { formContent } from 'src/app/models/model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview-forms',
  templateUrl: './preview-forms.component.html',
  styleUrls: ['./preview-forms.component.scss']
})
export class PreviewFormsComponent implements OnInit{
  
  formContent: formContent[] = []
  constructor(private services:Service){
    
  }
  ngOnInit(){
    this.services.getAndUpdateform().then((res:any)=>{
      if(res && res.data[0]){
        console.log(res.data[0].form_content)
        this.formContent = res.data[0].form_content
      }

    }).catch((err:any)=>{
      console.log(err)
    })
  }

  onInputChange(event:any){
    console.log('Input value changed to:',  event.target.value);

  }

  onCheckboxChange(event:any){

  }
}
