import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/client_services';
import { ChatService } from 'src/app/services/firebase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-specific-organization',
  templateUrl: './specific-organization.component.html',
  styleUrls: ['./specific-organization.component.scss']
})
export class SpecificOrganizationComponent implements OnInit {

  pagaData: any
  selectedImg: any;
  selectedImg1: any;
  htmlContent: any;
  reviews: any
  constructor(
    private route: Router,
    private services: Service,
    private chatS: ChatService
  ) {
  }

  ngOnInit() {
    this.pagaData = this.services.getData();
    this.selectedImg = this.pagaData.logo;
    this.selectedImg1 = this.pagaData.Banner_image;
    this.htmlContent = this.pagaData.portfolio;
    this.getreviews(this.pagaData.id)
    console.log(this.pagaData)
  }

  getreviews(id: any) {
    this.services.getReviews(id).then((res: any) => {
      console.log(res.data)
      this.reviews = res.data
    }).catch((err: any) => {
      console.log(err)
    })
  }

  Review(event: Event) {
    event.preventDefault();
    const ratingElement = document.querySelector('input[name="rating"]:checked') as HTMLInputElement;
    const feedbackElement = document.querySelector('.feedback-textarea') as HTMLTextAreaElement;

    if (ratingElement && feedbackElement) {
      const rating = ratingElement.value;
      const feedback = feedbackElement.value;
      const formdata = new FormData()
      formdata.append('client_id', this.pagaData.id)
      formdata.append('rating', rating)
      formdata.append('comment', feedback)
      this.services.AddReview(formdata).then((res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message
        });
        this.getreviews(this.pagaData.id)
      }).catch((err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        });
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please provide a rating and feedback.'
      });
    }
  }

  chat(data: any) {
    
    console.log(data)
    // const formdata = new FormData()
    // formdata.append('member', data.id);
    let clientData = JSON.parse(localStorage.getItem('user') || '')
    this.chatS.checkConversation(clientData.id, data.id).once('value', val => {
      if (val.exists()) {
        //conversation already exists
        // clientData.updated_at = new Date().toISOString()
        this.chatS.updateConversationForProvider(data.id, clientData)
        this.chatS.updateConversationForClient(clientData.id, data).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Conversation already exists!'
          });
        });
      } else {
        //new conversation
        clientData.updated_at = new Date().toISOString()
        this.chatS.updateConversationForProvider(data.id, clientData)
        this.chatS.updateConversationForClient(clientData.id, data).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Conversation has started!'
          });
        });
      }
    })

    // this.services.makeChatMember(formdata).then((res: any) => {
    //   Swal.fire({
    //     icon: 'success',
    //     title: res.message
    //   });
    // }).catch((err: any) => {
    //   console.log(err)
    // })
    // })

  }

}
