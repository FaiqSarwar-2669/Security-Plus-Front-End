import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registration, login, forgetPassword } from "./models/model";

@Injectable({ providedIn: "root" })
export class Service {

  baseUrl = 'http://127.0.0.1:8000/api/';

  Heads = new HttpHeaders({
    'Accept': 'application/json'
  })

  token: any = '';
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('B_Token');
  }

  getHeaders() {
    const token = localStorage.getItem('B_Token');
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  private data: any;

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }




  registeration(formdata: registration) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'registeration/', formdata, { headers: this.Heads })
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

  uploadApplication(formdata: FormData) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'jobAppication/', formdata, { headers: this.Heads })
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

  login(login: login) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'login/', login, { headers: this.Heads })
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

  forgetPassword(forgetPassword: forgetPassword) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'forgetPassword/', forgetPassword, { headers: this.Heads })
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

  AllPortfolios() {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'All-Portfolios/', { headers: this.Heads })
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

  getForm() {
    const id = localStorage.getItem('FormID');
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + 'get-form/' + id, { headers: this.Heads })
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

}