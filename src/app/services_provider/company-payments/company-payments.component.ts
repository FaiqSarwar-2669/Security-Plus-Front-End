import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';

@Component({
  selector: 'app-company-payments',
  templateUrl: './company-payments.component.html',
  styleUrls: ['./company-payments.component.scss']
})
export class CompanyPaymentsComponent implements OnInit{

  years: any
  filter_data: any
  constructor(private service: Service) { }
  ngOnInit(): void {
    this.service.getoldcompanypayments().then((res: any) => {
      this.years = res.months
      console.log(res.months)
    }).catch((err: any) => {
      console.log(err)
    })
    this.getfilterData()
  }

  getfilterData() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    let startDate = year + '-' + month + '-01';
    let endDate = '';
    if (month === '01' || month === '03' || month === '05' || month === '07' || month === '08' || month === '10' || month === '12') {
      endDate = year + '-' + month + '-31';
    } else if (month === '02') {
      endDate = year + '-' + month + '-28'
    } else {
      endDate = year + '-' + month + '-30'
    }
    const formdata = new FormData()
    formdata.append('start-date', startDate)
    formdata.append('end-date', endDate)
    this.service.filtercompanypayments(formdata).then((res: any) => {
      this.filter_data = res.data
      // console.log(res)
    }).catch((err: any) => {
      console.log(err)
    })

  }

  filterSalaries() {
    let months = document.getElementById('month-select') as HTMLSelectElement;
    let year = document.getElementById('year-select') as HTMLSelectElement;
    let startDate = year.value + '-' + months.value + '-01';
    let endDate = '';

    if (months.value === '01' || months.value === '03' || months.value === '05' || months.value === '07' || months.value === '08' || months.value === '10' || months.value === '12') {
      endDate = year.value + '-' + months.value + '-31';
    } else if (months.value === '02') {
      endDate = year.value + '-' + months.value + '-28';
    } else {
      endDate = year.value + '-' + months.value + '-30';
    }
    const formdata = new FormData()
    formdata.append('start-date', startDate)
    formdata.append('end-date', endDate)
    this.service.filtercompanypayments(formdata).then((res: any) => {
      this.filter_data = res.data
      console.log(res)
    }).catch((err: any) => {
      console.log(err)
    })
  }
}
