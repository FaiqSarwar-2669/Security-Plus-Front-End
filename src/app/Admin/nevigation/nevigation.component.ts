// nevigation.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { Service } from 'src/app/services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nevigation',
  templateUrl: './nevigation.component.html',
  styleUrls: ['./nevigation.component.scss']
})
export class NevigationComponent implements OnInit {
  private isExpanded = false;
  loading = false;

  constructor(private services: Service, private routes: Router) {}

  ngOnInit(): void {
    this.resizeListener();
  }

  showMore(event: MouseEvent) {
    const mydive = event.currentTarget as HTMLElement;
    const up = mydive.querySelector('.fa-angle-up') as HTMLElement | null;
    const down = mydive.querySelector('.fa-angle-down') as HTMLElement | null;
    if (up && down) {
      this.isExpanded = !this.isExpanded;
      mydive.style.height = this.isExpanded ? 'auto' : '40px';
      up.style.display = this.isExpanded ? 'block' : 'none';
      down.style.display = this.isExpanded ? 'none' : 'block';
    }
  }

  responsive() {
    const result = document.getElementById('main-section') as HTMLElement;
    const left = document.getElementById('left') as HTMLElement;
    const right = document.getElementById('right') as HTMLElement;
    const isHidden = result.style.left === '-250px';
    result.style.left = isHidden ? '0px' : '-250px';
    left.style.display = isHidden ? 'block' : 'none';
    right.style.display = isHidden ? 'none' : 'block';
  }

  @HostListener('window:resize')
  resizeListener() {
    const screenWidth = window.innerWidth;
    const mainSection = document.getElementById('main-section') as HTMLElement;
    mainSection.style.left = screenWidth < 800 ? '-250px' : '0px';
  }

  logout() {
    this.loading = true;
    this.services.logout()
      .then((res: any) => {
        if (res) {
          Swal.fire({
            icon: 'success',
            title: res.message
          });
          this.routes.navigate(['/login']);
          localStorage.clear();
        }
      })
      .catch((err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error?.message || 'Logout failed, please try again'
        });
        console.error('Logout error:', err);
      })
      .finally(() => this.loading = false);
  }
}
