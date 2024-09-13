import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Pusher from 'pusher-js';
import { literalMap } from '@angular/compiler';

@Component({
  selector: 'app-provider-chat',
  templateUrl: './provider-chat.component.html',
  styleUrls: ['./provider-chat.component.scss']
})
export class ProviderChatComponent implements OnInit {

  chatMembers: any
  chatHeaderProfile: any
  chatHeadername: any
  receiverId: any
  newMessage: any
  messages: any
  currentUserId: any;
  constructor(private services: Service) {

  }

  ngOnInit() {
    this.currentUserId = localStorage.getItem('UserID');
    this.services.getChatMembers().then((res: any) => {
      this.chatMembers = res.data
      console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })
  }

  specificUser(id: any) {
    console.log(id)
    this.receiverId = id
    this.setuppusher();
    this.getMessageChat();
    const data = this.chatMembers.find((member: any) => member.id === id);
    this.chatHeaderProfile = data.profile
    this.chatHeadername = data.name
  }

  setuppusher() {
    Pusher.logToConsole = true;
    const pusher = new Pusher('d44187673912a3531af2', {
      cluster: 'ap2',
      authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
      auth: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('B_Token')}`
        }
      }
    });

    // const channel = pusher.subscribe(`chat`);
    const channel = pusher.subscribe(`chat.${this.receiverId}`);

    // Bind to the event
    channel.bind('message', (data: any) => {
      console.log('Received data:', data.message);
      alert(data.message)
    });
  }

  sendMessage() {
    const messageData = {
      receiver_id: this.receiverId,
      message: this.newMessage
    };

    this.services.sendmessage(messageData).then((message: any) => {
      this.messages.push(message.data)
      this.newMessage = '';
      console.log(message)
    }).catch((err: any) => {
      console.log(err)
    });
  }


  getMessageChat() {
    this.services.getmessage(this.receiverId).then((res: any) => {
      console.log(res)
      this.messages = res.data;
    }).catch((err: any) => {
      console.log(err)
    })
  }


}
