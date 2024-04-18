import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class Service {

    baseUrl = 'http://192.168.10.7:80/api/';

    Heads = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })

    constructor(private http: HttpClient) {

    }

    getAllCompanies() {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + 'organizations/', { headers: this.Heads })
                .pipe()
                .subscribe({
                    next: (res) => {
                        resolve(res)
                    },
                    error: (err) => {
                        reject(err)
                    },
                })
        })

    }
}

// registeration(formdata: registration) {

//     console.log(formdata);
//     return new Promise((resolve, reject) => {
//       this.http
//         .post(this.baseUrl + 'registeration/', formdata, { headers: this.Heads })
//         .pipe()
//         .subscribe({
//           next: (res) => {
//             resolve(res);
//           },
//           error: (err) => {
//             reject(err);
//           },
//         });
//     });
//   }
