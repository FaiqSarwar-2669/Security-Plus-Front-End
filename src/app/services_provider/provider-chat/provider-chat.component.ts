import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import { ChatService } from 'src/app/services/firebase';

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
  chatId:string = ''
  selectedUser:any = {}
  constructor(private services: Service,
    private chatS: ChatService
  ) {

  }

  ngOnInit() {
    this.currentUserId = Number(localStorage.getItem('UserID'));
    this.chatS.getConverstions(this.currentUserId).subscribe({
      next: (conversations) => {
        this.chatMembers = conversations
      },error:(err) =>{
        console.error(err)
      }
    })

    // this.services.getChatMembers().then((res: any) => {
    //   this.chatMembers = res.data
    //   console.log(res.data)
    // }).catch((err: any) => {
    //   console.log(err)
    // })
  }

  specificUser(user: any) {
    console.log(user)
    this.selectedUser = user
    this.receiverId = user.id
    let currentUser = JSON.parse(localStorage.getItem('user') || '')
    // this.setuppusher();
    // this.setupEcho();
    this.chatId =user.id + currentUser.id
    this.getMessageChat(this.chatId);
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


  setupEcho() {
    Pusher.logToConsole = true;

    const echo = new Echo({
      broadcaster: 'pusher',
      key: 'd44187673912a3531af2',
      cluster: 'ap2',
      forceTLS: true,
      authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
      auth: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('B_Token')}`
        }
      }
    });

    echo.private(`chat.${this.receiverId}`)
      .listen('.message', (data: any) => {
        console.log(data);
        alert(data.message);
      });
  }

  sendMessage() {
    const messageData = {
      receiver_id: this.receiverId,
      sender_id: this.currentUserId,
      message: this.newMessage,
      created_at:new Date().toISOString(),
      seen: false
    };

    this.chatS.sendMessage(this.chatId,messageData).then(() =>{
      this.newMessage = ''
    })

    // this.services.sendmessage(messageData).then((message: any) => {
    //   this.messages.push(message.data)
    //   this.newMessage = '';
    //   console.log(message)
    // }).catch((err: any) => {
    //   console.log(err)
    // });
  }


  getMessageChat(chatId:string) {
    this.chatS.getChat(chatId).subscribe({
      next:(chat) =>{
        console.log(chat)
        this.messages = chat
      },
      error:(err) =>{
        console.error(err)
      }
    })
  }


}
