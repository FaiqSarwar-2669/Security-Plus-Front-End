import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registration, login, forgetPassword } from "./models/model";

@Injectable({ providedIn: "root" })
export class Service {

  baseUrl = 'http://192.168.10.7:80/api/';

  Heads = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
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