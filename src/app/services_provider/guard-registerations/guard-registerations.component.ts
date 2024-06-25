import { Component } from '@angular/core';
import { Service } from 'src/app/services/provider_services';

@Component({
  selector: 'app-guard-registerations',
  templateUrl: './guard-registerations.component.html',
  styleUrls: ['./guard-registerations.component.scss']
})
export class GuardRegisterationsComponent {

  data = {
    fname: '',
    lname:'',
    dob:'',
    gender:'',
  }
  constructor(
    private services: Service
  ) { }

  SUBMIT() {

  }
}
