import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatPath = '/chat';
  private conversationsPath = '/conversations';
  
  constructor(private db: AngularFireDatabase) { }


  sendMessage(chatId:string,msgBody:any){
    return this.db.list(`${this.chatPath}/${chatId}`).push(msgBody)
  }

  getConverstions(userId:string){
    return this.db.list(`${this.conversationsPath}/${userId}`).valueChanges()
  }

  getChat(chatId:string){
    return this.db.list(`${this.chatPath}/${chatId}`).valueChanges()
  }

  updateConversationForClient(clientId:string,providersData:any){
    return this.db.object(`${this.conversationsPath}/${clientId}/${providersData.id}`).set(providersData)
  }

  updateConversationForProvider(providerId:string,clientData:any){
    return this.db.object(`${this.conversationsPath}/${providerId}/${clientData.id}`).set(clientData)
  }

  checkConversation(userId:string,targetUserId:string){
    return this.db.database.ref(this.conversationsPath).child(userId).orderByChild('id').equalTo(targetUserId)
  }

  getUnseenMessageCountForChat(chatId: string): Observable<number> {
    return this.db.list(`${this.chatPath}/${chatId}`, ref => ref.orderByChild('seen').equalTo(false))
      .valueChanges()
      .pipe(map(messages => messages.length));
  }

}