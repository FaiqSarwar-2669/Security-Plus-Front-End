import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { portfolio } from "../models/model";

@Injectable({ providedIn: "root" })
export class Service {

  baseUrl = 'http://127.0.0.1:8000/api/';

  Heads = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {

  }
  getFormHeaders() {
    const token = localStorage.getItem('B_Token');
    return {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
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

  addAndUpdatePortfolio(portfolioData: portfolio) {
    return new Promise((resolve, reject) => {


      // const formData = new FormData();

      // if (portfolioData.logo) {
      //   formData.append('logo', portfolioData.logo, portfolioData.logo.name);
      // }

      // if (portfolioData.Banner_image) {
      //   formData.append('Banner_image', portfolioData.Banner_image, portfolioData.Banner_image.name);
      // }

      // if (portfolioData.portfolio) {
      //   formData.append('portfolio', JSON.stringify(portfolioData.portfolio));
      // }

      const header = this.getFormHeaders();


      this.http.post<any>(this.baseUrl + 'makePortfolio/', portfolioData, { headers: header })
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



  // async addAndUpdatePortfolio(portfolioData: portfolio) {
  //   const formData = new FormData();

  //   if (portfolioData.logo) {
  //     formData.append('logo', portfolioData.logo);
  //   }

  //   if (portfolioData.Banner_image) {
  //     formData.append('Banner_image', portfolioData.Banner_image);
  //   }
  //   if (portfolioData.portfolio) {
  //     formData.append('portfolio', portfolioData.portfolio);
  //   }

  //   const header = this.getFormHeaders();

  //   try {
  //     const response = await fetch(this.baseUrl + 'makePortfolio/', {
  //       method: 'POST',
  //       headers: header,
  //       body: formData
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     return await response.json();
  //   } catch (error) {
  //     console.error('There was an error!', error);
  //     throw error;
  //   }
  // }

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