import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { portfolio } from "../models/model";

@Injectable({ providedIn: "root" })
export class Service {

  baseUrl = 'http://192.168.100.42:80/api/';

  Heads = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {

  }
  getFormHeaders() {
    const token = localStorage.getItem('B_Token');
    return {
      'Accept': 'multipart/form data',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  }
  getHeaders() {
    const token = localStorage.getItem('B_Token');
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  }


  logout() {
    const header = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'logout/', { headers: header })
        .pipe()
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }


  // add and update the portfolio

  // addAndUpdatePortfolio(portfolioData: portfolio) {

  //     const formData = new FormData();

  //     if (portfolioData.logo) {
  //         formData.append('logo', portfolioData.logo);
  //     }

  //     if (portfolioData.Banner_image) {
  //         formData.append('Banner_image', portfolioData.Banner_image);
  //     }
  //     if(portfolioData.portfolio){
  //         formData.append('portfolio', portfolioData.portfolio);
  //     }

  //     console.log(formData)
  //     console.log(portfolioData.logo)


  //     const header = this.getHeaders();
  //     return new Promise((resolve, reject) => {
  //         this.http.post(this.baseUrl + 'makePortfolio/', formData, { headers: header }).pipe()
  //             .subscribe({
  //                 next: (res) => {
  //                     resolve(res);
  //                 },
  //                 error: (err) => {
  //                     reject(err);
  //                 }
  //             });
  //     });
  // }
  async addAndUpdatePortfolio(portfolioData: portfolio) {
    const formData = new FormData();

    if (portfolioData.logo) {
      formData.append('logo', portfolioData.logo);
    }

    if (portfolioData.Banner_image) {
      formData.append('Banner_image', portfolioData.Banner_image);
    }
    if (portfolioData.portfolio) {
      formData.append('portfolio', portfolioData.portfolio);
    }

    const header = this.getFormHeaders();

    try {
      const response = await fetch(this.baseUrl + 'makePortfolio/', {
        method: 'POST',
        headers: header,
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('There was an error!', error);
      throw error;
    }
  }

  // get the portfolio of the company
  getAndUpdatePortfolio() {
    const header = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'getPortfolio/', { headers: header }).pipe()
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        });
    });
  }

  // add and update  the form of the company
  addAndUpdateform(data: any) {
    const payload = {
      'form_content': data
    }
    const header = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'makeForm/', payload, { headers: header }).pipe()
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        });
    });
  }

  // get   the form of the company
  getAndUpdateform() {
    const header = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'getForm/', { headers: header }).pipe()
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        });
    });
  }

}