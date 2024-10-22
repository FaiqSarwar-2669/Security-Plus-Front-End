import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Service } from 'src/app/services/client_services';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';


@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  audioPath = '../../../assets/ciren.mp3';
  @ViewChild('audio') audio!: ElementRef;
  contracts: any; guards: any;
  logedId: any

  constructor(private services: Service) {
    this.logedId = localStorage.getItem("UserID")
  }


  ngOnInit() {
    this.services.dashBoard().then((res: any) => {
      console.log(res)
      this.contracts = res.contracts;
      this.guards = res.total
    }).catch((err: any) => {
      console.log(err)
    })
    // this.setuppusher()
  }



  // setuppusher() {
  //   const Organization = localStorage.getItem("UserID")
  //   Pusher.logToConsole = true;
  //   var pusher = new Pusher('d44187673912a3531af2', {
  //     cluster: 'ap2'
  //   });

  //   const channel = pusher.subscribe('alram');
  //   channel.bind('alert-alram', (data: any) => {
  //     const responce = data.message
  //     console.log(responce)
  //     if (responce.target === this.logedId) {
  //       if (responce.message == '1') {
  //         this.audio.nativeElement.play();
  //       } else if (responce.message == '0') {
  //         this.audio.nativeElement.pause();
  //         this.audio.nativeElement.currentTime = 0;
  //       }
  //     } else {
  //       console.log('other company');
  //     }
  //   });
  // }
}
