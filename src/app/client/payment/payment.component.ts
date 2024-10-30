import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/client_services';
declare const Stripe: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  stripe = Stripe('pk_test_51QCioMRbH6l7KrnPtpivD6OybQWHOl32co2nYtLYe4Q3ysKBZCqt0adl6ENc2TMRqtUpwymohf0kmzLMi1e7NV9400GYUgNVid');
  user: any
  cardElement: any;
  amount: any
  company_id: any

  companies: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;

  responceMessage: any
  imageLink: any

  constructor(private service: Service) { }
  ngOnInit() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      console.log(this.user);
    }
    this.getCompanies();
    const elements = this.stripe.elements();


    // this.cardElement = elements.create('card');
    // this.cardElement.mount('#card-element');


    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount('#card-number');

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount('#card-expiry');

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount('#card-cvc');
  }

  getCompanies() {
    this.service.getContracts().then((res: any) => {
      this.companies = res.data
      console.log(res)
    }).catch((err: any) => {
      console.log(err)
    })
  }

  async handlePayment(event: Event) {
    event.preventDefault();
    const { token, error } = await this.stripe.createToken(this.cardNumber);
    this.amount = document.getElementById("cardName") as HTMLElement
    this.company_id = document.getElementById("selected-Company") as HTMLElement


    if (error) {
      Swal.fire({
        'icon': 'error',
        'text': error.message
      })
      console.error(error.message);
    } else {
      if (this.company_id.value.trim() === "") {
        Swal.fire({
          'icon': 'error',
          'text': 'select the Organization'
        })
        return
      }
      const formData = new FormData();
      formData.append('stripeToken', token.id);
      formData.append('amount', this.amount.value);
      formData.append('id', this.company_id.value);

      this.service.OnlinePayment(formData).then((res: any) => {
        this.responceMessage = res.status
        this.imageLink = res.charge.receipt_url
        this.openPaymentPopup()
      }).catch((err: any) => {
        Swal.fire({
          'icon': 'error',
          'title': err.error.status
        })
        console.log(err)
      });
    }
  }


  closePaymentPopup() {
    const element = document.getElementById('paymentPopup') as HTMLElement;
    element.style.display = 'none';
  }
  openPaymentPopup() {
    const element = document.getElementById('paymentPopup') as HTMLElement;
    element.style.display = 'flex';
  }
}
