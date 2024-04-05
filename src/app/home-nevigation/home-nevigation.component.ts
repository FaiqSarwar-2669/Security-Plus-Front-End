import { Component } from '@angular/core';

@Component({
  selector: 'app-home-nevigation',
  templateUrl: './home-nevigation.component.html',
  styleUrls: ['./home-nevigation.component.scss']
})
export class HomeNevigationComponent {


  showMore(event: MouseEvent) {
    const mydive = event.currentTarget as HTMLElement;
    const up = mydive.querySelector('.fa-angle-up') as HTMLElement | null;
    const down = mydive.querySelector('.fa-angle-down') as HTMLElement | null;
    if (up && down) {
      if (mydive.style.height === '40px') {
        mydive.style.height = 'auto';
        up.style.display = 'block';
        down.style.display = 'none';
      } else {
        mydive.style.height = '40px';
        up.style.display = 'none';
        down.style.display = 'block';
      }
    }
  }
  responsive() {
    const result = document.getElementById('main-section') as HTMLElement;
    if (result.style.left === '-100%') {
      result.style.display='block';
      result.style.left = '0px';
    } else {
      result.style.left = '-100%';
      result.style.display='none';
    }
  }
}
