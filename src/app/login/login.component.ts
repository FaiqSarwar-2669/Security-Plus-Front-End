import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  type:any='password';
  display(){
    this.type = (this.type === 'text') ? 'password' : 'text';
  }
}
