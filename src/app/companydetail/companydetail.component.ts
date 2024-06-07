import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private route: ActivatedRoute,
    private services: Service,
  ) { }

  ngOnInit() {
    this.pagaData=this.services.getData();
    this.selectedImg=this.pagaData.logo;
    this.selectedImg1=this.pagaData.Banner_image;
    this.htmlContent=this.pagaData.portfolio;
  }

  Form(id:any){
    console.log(id)
  }
}
