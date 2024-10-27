import { Component, OnInit } from '@angular/core';
declare const faceapi: any;
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'security_Plus_Front_End';

  ngOnInit() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/assets/models')
    ])
    this.sendBeep();
  }


  sendBeep() {
    Pusher.logToConsole = true;
    var pusher = new Pusher('d44187673912a3531af2', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('Attendence');
    channel.bind('attention', (data: any) => {
      console.log(data);
    });
  }

}
