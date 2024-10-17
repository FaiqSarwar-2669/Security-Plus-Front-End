import { Component } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview-portfolio',
  templateUrl: './preview-portfolio.component.html',
  styleUrls: ['./preview-portfolio.component.scss']
})
export class PreviewPortfolioComponent {


  selectedImg: any;
  selectedImg1: any;
  htmlContent: any;
  responcedata: any
  constructor(private services: Service) {
    this.services.getAndUpdatePortfolio().then((res: any) => {
      if (res && res.data && res.data.length > 0) {
        this.responcedata = res.data
        const data = res.data[0];
        this.selectedImg = data.logo ? data.logo : '../../../assets/default.png';
        this.selectedImg1 = data.Banner_image ? data.Banner_image : '../../../assets/default banner.png';
        this.htmlContent = data.portfolio ? data.portfolio : '<h1>No content available</h1>';
      }
    }).catch((err: any) => {
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        })
      }
    })
  }


}
