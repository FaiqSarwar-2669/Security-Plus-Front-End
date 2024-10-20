import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services';
import Swal from 'sweetalert2';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.scss']
})
export class ToComponent implements OnInit {
  audioPath = '../../../assets/ciren.mp3';
  @ViewChild('audio') audio!: ElementRef;
  logedId: any
  constructor(private services: Service, private routes: Router) {

  }
  ngOnInit() {
    this.logedId = localStorage.getItem("UserID")
    this.setuppusher()
  }

  setuppusher() {
    Pusher.logToConsole = true;
    var pusher = new Pusher('d44187673912a3531af2', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('alram');
    channel.bind('alert-alram', (data: any) => {
      const responce = data.message
      const bellIcon = document.getElementById('bellIcon') as HTMLElement;
      console.log(responce)
      if (responce.target === this.logedId) {
        if (responce.message == '1') {
          this.audio.nativeElement.play();
          bellIcon.classList.add('blink')
        } else if (responce.message == '0') {
          this.audio.nativeElement.pause();
          bellIcon.classList.remove('blink');
          this.audio.nativeElement.currentTime = 0;
        }
      } else {
        console.log('other company');
      }
    });
  }

  logout() {
    this.services.logout().then((res: any) => {
      if (res) {
        Swal.fire({
          icon: 'success',
          title: res.message
        })
        this.routes.navigate(['/login']);
        localStorage.clear();
      }
    }).catch((err: any) => {
      if (err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.message
        })
      }
      console.log(err)
    });
  }
}
