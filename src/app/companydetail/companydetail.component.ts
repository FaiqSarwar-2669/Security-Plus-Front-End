import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../services';

@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.scss']
})
export class CompanydetailComponent implements OnInit {

  pagaData: any
  selectedImg: any;
  selectedImg1: any;
  htmlContent: any;
  reviews:any
  constructor(
    private route: Router,
    private services: Service,
  ) { }

  ngOnInit() {
    this.pagaData = this.services.getData();
    this.selectedImg = this.pagaData.logo;
    this.selectedImg1 = this.pagaData.Banner_image;
    this.htmlContent = this.pagaData.portfolio;
    this.getreviews(this.pagaData.id)
  }

  Form(id: any) {
    localStorage.setItem('FormID', id);
    this.route.navigate(['/form']);
  }
  getreviews(id: any) {
    this.services.getReviews(id).then((res: any) => {
      console.log(res.data)
      this.reviews = res.data
    }).catch((err: any) => {
      console.log(err)
    })
  }
}
