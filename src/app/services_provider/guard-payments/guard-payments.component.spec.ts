import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardPaymentsComponent } from './guard-payments.component';

describe('GuardPaymentsComponent', () => {
  let component: GuardPaymentsComponent;
  let fixture: ComponentFixture<GuardPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardPaymentsComponent]
    });
    fixture = TestBed.createComponent(GuardPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
