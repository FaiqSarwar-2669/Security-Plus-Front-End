import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/client_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.scss']
})
export class ViewOrganizationComponent implements OnInit{

  portfolios:any
  constructor(
    private services: Service,
    private router: Router
  ){}
  ngOnInit() {
    this.services.getPortfolios().then((res:any)=>{
      console.log(res.data)
      this.portfolios = res.data;
    }).catch((err:any)=>{
      console.log(err)
    })
  }


  learnmore(data:any){
    this.services.setData(data)
    this.router.navigate(['/specific-organization']);
  }
}
