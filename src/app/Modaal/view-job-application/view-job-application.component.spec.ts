import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobApplicationComponent } from './view-job-application.component';

describe('ViewJobApplicationComponent', () => {
  let component: ViewJobApplicationComponent;
  let fixture: ComponentFixture<ViewJobApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewJobApplicationComponent]
    });
    fixture = TestBed.createComponent(ViewJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
