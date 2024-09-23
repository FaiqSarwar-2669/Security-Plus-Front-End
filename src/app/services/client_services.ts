import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class Service {

    baseUrl = 'http://127.0.0.1:8000/api/';

    Heads = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })

    constructor(private http: HttpClient) {

    }

    private data: any;

    setData(data: any) {
        this.data = data;
    }

    getData() {
        return this.data;
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
                .get(this.baseUrl + 'dashBoardClient/', { headers: header })
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

    getPortfolios() {
        const header = this.getHeaders()
        return new Promise((resolve, reject) => {
            this.http
                .get(this.baseUrl + 'get-Portfolios/', { headers: header })
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

    // get organization
    getClient() {
        const header = this.getHeaders()
        return new Promise((resolve, reject) => {
            this.http
                .get(this.baseUrl + 'get-client/', { headers: header })
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


    // get side nav
    getsidebar() {
        const header = this.getHeaders()
        return new Promise((resolve, reject) => {
            this.http
                .get(this.baseUrl + 'get-sidebar/', { headers: header })
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
    updateClient(form: FormData) {
        const header = this.getHeaders()
        return new Promise((resolve, reject) => {
            this.http
                .post(this.baseUrl + 'update-client/', form, { headers: header })
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

    //add the reviews
    AddReview(form: FormData) {
        const header = this.getHeaders()
        return new Promise((resolve, reject) => {
            this.http
                .post(this.baseUrl + 'submit-review/', form, { headers: header })
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

    // get the reviews 
    getReviews(id: any) {
        const header = this.getHeaders()
        return new Promise((resolve, reject) => {
            this.http
                .get(this.baseUrl + 'get-review/' + id, { headers: header })
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

    // make the chat members
    makeChatMember(form: FormData) {
        const header = this.getHeaders()
        return new Promise((resolve, reject) => {
            this.http
                .post(this.baseUrl + 'makeMember/', form, { headers: header })
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

    // send message
    sendMessage(data: any) {
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

    // get guards contracts
    getContracts() {
        const header = this.getHeaders()
        return new Promise((resolve, reject) => {
            this.http
                .get(this.baseUrl + 'getContracts/', { headers: header })
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