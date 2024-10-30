import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPaymentsComponent } from './company-payments.component';

describe('CompanyPaymentsComponent', () => {
  let component: CompanyPaymentsComponent;
  let fixture: ComponentFixture<CompanyPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyPaymentsComponent]
    });
    fixture = TestBed.createComponent(CompanyPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
