import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardRegisterationsComponent } from './guard-registerations.component';

describe('GuardRegisterationsComponent', () => {
  let component: GuardRegisterationsComponent;
  let fixture: ComponentFixture<GuardRegisterationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardRegisterationsComponent]
    });
    fixture = TestBed.createComponent(GuardRegisterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
