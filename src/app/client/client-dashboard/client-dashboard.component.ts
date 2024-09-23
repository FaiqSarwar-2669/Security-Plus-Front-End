import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/client_services';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  contracts: any; guards: any;
  constructor(private services: Service) {

  }
  ngOnInit() {
    this.services.dashBoard().then((res: any) => {
      console.log(res)
      this.contracts = res.contracts;
      this.guards = res.total
    }).catch((err: any) => {
      console.log(err)
    })
  }
}
