import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  slideIndex: number = 0;

  ngOnInit(): void {
    this.showSlides();
  }

  

  showSlides(): void {
    let i;
    const slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1; }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" act", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " act";
    setTimeout(() => this.showSlides(), 4000);
  }


  

}
