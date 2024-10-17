import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: any
  constructor(private services: Service) {

  }

  ngOnInit() {
    const userId = localStorage.getItem("UserID");
    this.services.getReviews(userId).then((res: any) => {
      this.reviews = res.data
      console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })
  }
  
  generateStars(rating: string): boolean[] {
    const totalStars = 5;
    const filledStars = parseInt(rating, 10);
    return Array.from({ length: totalStars }, (_, i) => i < filledStars);
  }
}
