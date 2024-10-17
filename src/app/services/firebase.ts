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


  sendMessage(chatId: string, msgBody: any, userId: string, receiverId: string) {

    this.db.object(`${this.conversationsPath}/${receiverId}/${userId}`).query.ref.transaction((conversation: any) => {
      if (conversation) {
        conversation.unseenMessages = (conversation.unseenMessages || 0) + 1;
      } else {
        conversation = { unseenMessages: 1 };
      }
      return conversation;
    });

    return this.db.list(`${this.chatPath}/${chatId}`).push(msgBody)
  }

  getConverstions(userId: string) {
    return this.db.list(`${this.conversationsPath}/${userId}`).valueChanges()
  }

  getChat(chatId: string, userId: string, receiverId: string) {
    this.db.object(`${this.conversationsPath}/${userId}/${receiverId}`).query.ref.once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.db.object(`${this.conversationsPath}/${userId}/${receiverId}/unseenMessages`).set(0);
      }
    });
    return this.db.list(`${this.chatPath}/${chatId}`).valueChanges()
  }

  updateConversationForClient(clientId: string, providersData: any) {
    const updatedData = {
      ...providersData,
      unseenMessages: providersData.unseenMessages || 0
    };
    return this.db.object(`${this.conversationsPath}/${clientId}/${providersData.id}`).set(updatedData)
  }

  updateConversationForProvider(providerId: string, clientData: any) {
    const updatedData = {
      ...clientData,
      unseenMessages: clientData.unseenMessages || 0
    };
    return this.db.object(`${this.conversationsPath}/${providerId}/${clientData.id}`).set(updatedData)
  }

  checkConversation(userId: string, targetUserId: string) {
    return this.db.database.ref(this.conversationsPath).child(userId).orderByChild('id').equalTo(targetUserId)
  }


  getUnseenMessages(clientId: string, conversationId: string) {
    return this.db.object(`${this.conversationsPath}/${clientId}/${conversationId}/unseenMessages`).valueChanges();
  }

}