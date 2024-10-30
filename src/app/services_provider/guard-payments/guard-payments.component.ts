import { Component } from '@angular/core';

@Component({
  selector: 'app-guard-payments',
  templateUrl: './guard-payments.component.html',
  styleUrls: ['./guard-payments.component.scss'],
})
export class GuardPaymentsComponent {
  openPaymentPopup() {
    const popup = document.getElementById('paymentPopup') as HTMLElement;
    popup.style.display = 'flex';
  }

  closePaymentPopup() {
    const popup = document.getElementById('paymentPopup') as HTMLElement;
    popup.style.display = 'none';
  }

  markAsPaid() {
    alert('Salary Paid Successfully!');
    // document.querySelector('.pay-btn').disabled = true;
    // document.querySelector('.pay-btn').textContent = 'Paid';
    // closePaymentPopup();
  }
}
