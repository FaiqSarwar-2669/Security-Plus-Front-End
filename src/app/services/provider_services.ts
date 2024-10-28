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
      'Authorization': `Bearer ${token}`,
    };
  }


  getHeaders() {
    const token = localStorage.getItem('B_Token');
    return {
      'Accept': 'application/json',
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


  dashBoard() {
    const header = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'dashBoardData/', { headers: header })
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

  addAndUpdatePortfolio(portfolioData: FormData) {
    return new Promise((resolve, reject) => {
      const header = this.getFormHeaders();
      console.log(portfolioData)
      this.http.post(this.baseUrl + 'makePortfolio/', portfolioData, { headers: header })
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

  // for getting the job apllications
  getAllJobApplications() {
    const header = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'getApplications/', { headers: header }).pipe()
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

  //active the job application
  activeJobApplication(id: any) {
    const header = this.getHeaders();
    const payload = {
      'id': id
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'activejobApplication/', payload, { headers: header }).pipe()
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

  //reject the job application
  rejectJobApplication(id: any) {
    const header = this.getHeaders();
    const payload = {
      'id': id
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'rejectjobApplication/', payload, { headers: header }).pipe()
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

  //download the job application 
  viewJobApplication(id: any) {
    const header = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'viewApplications/' + id, { headers: header }).pipe()
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        });
    });
  }

  //view the job application 
  viewJob(id: any) {
    const header = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + 'viewApp/' + id, { headers: header }).pipe()
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        });
    });
  }

  // get organization
  getProvider() {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'get-provider/', { headers: header })
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

  // update client
  updateProvider(form: FormData) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'update-provider/', form, { headers: header })
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

  // register guards
  registerGuard(form: FormData) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'registerGuard/', form, { headers: header })
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

  // get the all chat members
  getChatMembers() {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'chatmembers/', { headers: header })
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

  sendmessage(data: any) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'messages/', data, { headers: header })
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

  // get message
  getmessage(id: any) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'getmessages/' + id, { headers: header })
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


  // get guards
  getguardse() {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'getAllGuards/', { headers: header })
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

  // get the client organization for giving the guards
  getDataForGivingGuads(data: FormData) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'getComapanyForGuards/', data, { headers: header })
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

  // get the client organization for giving the guards
  assignContracts(data: FormData) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'assignContrct/', data, { headers: header })
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

  // get the contract organization for giving the guards
  getContracts() {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'getcontract/', { headers: header })
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

  // fired the guards
  firedDuard(id: any) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'firedGuard/' + id, { headers: header })
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

  // deactivate the guard from contract
  deactivateGuard(id: any) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'deactivateGuard/' + id, { headers: header })
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

  // deactivate the guard from contract
  specificGuard(id: any) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'viewGuard/' + id, { headers: header })
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

  // get reviews of the organzation
  getReviews(id: any) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'get-reviews/' + id, { headers: header })
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

  // get data for filter
  getoldcompanypayments() {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'get-old-company-payments/', { headers: header })
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
  // get the filter data of companies
  filtercompanypayments(formData: FormData) {
    const header = this.getHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'get-filter-data/', formData, { headers: header })
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

}