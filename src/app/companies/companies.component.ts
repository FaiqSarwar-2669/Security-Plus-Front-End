import { Component, OnInit } from '@angular/core';
import { Service } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  rating: number = 0;
  portfolios:any
  constructor(
    private services: Service,
    private router: Router
  ){}
  ngOnInit() {
    this.services.AllPortfolios().then((res:any)=>{
      console.log(res.data)
      this.portfolios = res.data;
      this.rating = Math.round(res.data.rating / 20);
    }).catch((err:any)=>{
      console.log(err)
    })
  }


  learnmore(data:any){
    this.services.setData(data)
    this.router.navigate(['/company-detal']);
  }
}
