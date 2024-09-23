import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Service } from 'src/app/services/provider_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  onduty: any; available: any; total: any; contracts: any;
  constructor(private service: Service) { }


  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
    { year: 2016, count: 28 },
  ];
  ngOnInit(): void {
    this.doughnutchart();
    this.initializeBarChart();
    this.Piechart();
    this.dashboardData()

  }

  dashboardData() {
    this.service.dashBoard().then((res: any) => {
      this.total = res.total;
      this.onduty = res.duty;
      this.available = res.remaining;
      this.contracts = res.totalcontract;
    }).catch((err: any) => {
      console.log(err)
    })
  }
  doughnutchart() {
    // doughnut
    const ctx = document.getElementById('doughnutchart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: this.data.map((item) => item.year),
        datasets: [
          {
            label: 'Abdur Rehman',
            data: this.data.map((item) => item.count),
            backgroundColor: 'pink', // Example background color
            borderColor: 'rgba(54, 162, 235, 1)', // Example border color
            // borderColor: 'pink', // Example border color
            // borderWidth: 1,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            top: 0,
            bottom: 20,
            left: 20,
            right: 20
          }
        },
        maintainAspectRatio: false,
        responsive: true
      },
    });
  }
  initializeBarChart(): void {
    const ctx = document.getElementById('acquisitions') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.map((item) => item.year),
        datasets: [
          {
            label: 'Abdur Rehman',
            data: this.data.map((item) => item.count),
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Example background color
            borderColor: 'rgba(54, 162, 235, 1)', // Example border color
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20
          }
        },
        maintainAspectRatio: false,
        responsive: true
      },
    });
  }
  Piechart() {
    // doughnut
    const ctx = document.getElementById('piechart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        // labels: this.data.map((item) => item.year),
        datasets: [
          {
            label: 'Abdur Rehman',
            data: this.data.map((item) => item.count),
            backgroundColor: 'pink', // Example background color
            borderColor: 'rgba(54, 162, 235, 1)', // Example border color
            // borderColor: 'pink', // Example border color
            // borderWidth: 1,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            top: 0,
            bottom: 20,
            left: 20,
            right: 20
          }
        },
        maintainAspectRatio: false,
        responsive: true
      },
    });
  }
}
