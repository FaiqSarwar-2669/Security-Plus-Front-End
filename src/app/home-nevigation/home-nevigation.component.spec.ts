import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNevigationComponent } from './home-nevigation.component';

describe('HomeNevigationComponent', () => {
  let component: HomeNevigationComponent;
  let fixture: ComponentFixture<HomeNevigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNevigationComponent]
    });
    fixture = TestBed.createComponent(HomeNevigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
