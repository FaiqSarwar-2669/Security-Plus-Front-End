import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCompaniesComponent } from './register-companies.component';

describe('RegisterCompaniesComponent', () => {
  let component: RegisterCompaniesComponent;
  let fixture: ComponentFixture<RegisterCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCompaniesComponent]
    });
    fixture = TestBed.createComponent(RegisterCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
