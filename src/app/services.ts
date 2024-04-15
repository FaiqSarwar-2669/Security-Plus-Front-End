import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registration } from "./models/model";

@Injectable({ providedIn: "root" })
export class Service {

    baseUrl = 'http://127.0.0.1:8000/api/';

    Heads = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })

    constructor(private http: HttpClient) {

    }

    registeration(formdata: registration) {

        console.log(formdata);
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
}