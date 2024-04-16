import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisterCompaniesComponent } from './unregister-companies.component';

describe('UnregisterCompaniesComponent', () => {
  let component: UnregisterCompaniesComponent;
  let fixture: ComponentFixture<UnregisterCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnregisterCompaniesComponent]
    });
    fixture = TestBed.createComponent(UnregisterCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
