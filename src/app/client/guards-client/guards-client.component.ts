import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/client_services';

@Component({
  selector: 'app-guards-client',
  templateUrl: './guards-client.component.html',
  styleUrls: ['./guards-client.component.scss']
})
export class GuardsClientComponent implements OnInit {

  contractcompanies: any
  constructor(private services: Service) { }
  ngOnInit(): void {
    this.services.getContracts().then((res: any) => {
      this.contractcompanies = res.data
      console.log(res)
    }).catch((err: any) => {
      console.log(err)
    })
  }

  contrctview(id:any){
    
  }
}
