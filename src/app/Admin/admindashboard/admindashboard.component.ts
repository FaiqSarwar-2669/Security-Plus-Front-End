import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss'],
})
export class AdmindashboardComponent {
  constructor() {}

  // data[] = []
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

  data1 = [
    { count: 80 },
    { count: 20 },
  ]

  ngOnInit(): void {
    this.initializeBarChart();
    this.doughnutchart();
    this.lineChart();
    this.Piechart();
    this.percentageGraphOne();
  }

  doughnutchart() {
    // doughnut
    const ctx = document.getElementById('secondgraph') as HTMLCanvasElement;
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
            right: 20,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
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
            right: 20,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }


  percentageGraphOne() {
    // doughnut
    const ctx = document.getElementById('percentageGraph') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            label: 'Qasim Farooq',
            data: this.data1.map((item) => item.count),
            backgroundColor: [
              '#55efc4',
              '#e7eefa'
            ]
          },
        ],
      },
      options: {
        layout: {
          padding: {
            top: 0,
            bottom: 20,
            left: 20,
            right: 20,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
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
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
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
            right: 20,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }

  lineChart(): void {
    const ctx = document.getElementById('Linegraph') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.data.map((item) => item.year),
        datasets: [
          {
            label: 'Abdur Rehman',
            data: this.data.map((item) => item.count),
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Example background color
            borderColor: 'rgba(54, 162, 235, 1)', // Example border color
            borderWidth: 5,
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
            right: 20,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }
}
