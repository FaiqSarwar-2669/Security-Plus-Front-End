import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss'],
})
export class AdmindashboardComponent {
  constructor() {}

  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  data1 = [{ count: 80 }, { count: 20 }];

  ngOnInit(): void {
    this.initializeBarChart();
    this.doughnutChart();
    this.lineChart();
    this.pieChart();
    this.percentageGraph();
  }

  doughnutChart() {
    const ctx = document.getElementById('secondgraph') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Abdur Rehman',
            data: this.data.map((item) => item.count),
            backgroundColor: 'pink',
            borderColor: 'rgba(54, 162, 235, 1)',
          },
        ],
      },
      options: {
        layout: {
          padding: 20,
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }

  pieChart() {
    const ctx = document.getElementById('piechart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            label: 'Abdur Rehman',
            data: this.data.map((item) => item.count),
            backgroundColor: 'pink',
            borderColor: 'rgba(54, 162, 235, 1)',
          },
        ],
      },
      options: {
        layout: {
          padding: 20,
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }

  percentageGraph() {
    const ctx = document.getElementById('percentageGraph') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            label: 'Qasim Farooq',
            data: this.data1.map((item) => item.count),
            backgroundColor: ['#55efc4', '#e7eefa'],
          },
        ],
      },
      options: {
        layout: {
          padding: 20,
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }

  initializeBarChart() {
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
            borderColor: 'rgba(54, 162, 235, 1)',
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
          padding: 20,
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }

  lineChart() {
    const ctx = document.getElementById('Linegraph') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.data.map((item) => item.year),
        datasets: [
          {
            label: 'Abdur Rehman',
            data: this.data.map((item) => item.count),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
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
          padding: 20,
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }
}
