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
    getHeaders() {
        const token = localStorage.getItem('B_Token');
        return new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
    }

    //all register companies
    getAllCompanies() {
        const header = this.getHeaders();
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + 'registerCompanies/', { headers: header })
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

    //get the unregister or in active companies
    getAllUnRegisterCompanies() {
        const header = this.getHeaders();
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + 'unRegisterCompanies/', { headers: header })
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

    // for all the register client organizations
    getRegisterCilentOrganization() {
        const header = this.getHeaders();
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + 'registerClientOrganization/', { headers: header })
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

    // for all the un-register or inactive organizations client organizations
    getAllUnRegisterCilentOrganization() {
        const header = this.getHeaders();
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + 'unRegisterClient/', { headers: header })
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

    // Activate the  all the un-register or inactive organizations and companies
    activationOrganizations(id: any) {
        const header = this.getHeaders();
        return new Promise((resolve, reject) => {
            this.http.put(this.baseUrl + 'activation/' + id, { headers: header })
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

    // in-Activate the  all the un-register or inactive organizations and companies
    inActivationOrganizations(id: any) {
        const payload = {
            'id' : id
        }
        const header = this.getHeaders();
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl + 'inActivation/', payload, { headers: header })
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

    // Activate the  all the un-register or inactive organizations and companies
    ActivationOrganizations(id: any) {
        const payload = {
            'id' : id
        }
        const header = this.getHeaders();
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl + 'activation/', payload, { headers: header })
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

