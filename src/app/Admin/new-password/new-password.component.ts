import { Component } from '@angular/core';
import { changePassword } from 'src/app/models/model';
import Swal from 'sweetalert2';
import { Service } from 'src/app/services/admin_services';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {


  constructor(private services:Service){

  }
  
  data: changePassword ={
    password: '',
    confirm_password: '',

  }
  type: any = 'password';
  
  display() {
    this.type = (this.type === 'text') ? 'password' : 'text';
  }
  display1() {
    this.type = (this.type === 'text') ? 'password' : 'text';
  }

  changePassword(){
    if(this.data.password?.trim() === ''){
      Swal.fire('Enter Password');
    } else if(this.data.confirm_password?.trim() === ''){
      Swal.fire('Enter Confirm Password');
    }else if(this.data.password != this.data.confirm_password){
      Swal.fire('Password not match');
    }else{
      this.services.changePassword(this.data).then((res:any)=>{
        if(res && res.message){
          Swal.fire({
            icon: 'success',
            title: res.message
          })
        }
        // console.log(res)
      }).catch((err:any)=>{
        if(err && err.error){
          Swal.fire({
            icon: 'error',
            title: err.message
          })
        }
        // console.log(err);
      })
      // console.log(this.data);
    }
    // console.log(this.data)
    // Swal.fire('hello')
  }
}
