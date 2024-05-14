import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGuardsComponent } from './register-guards.component';

describe('RegisterGuardsComponent', () => {
  let component: RegisterGuardsComponent;
  let fixture: ComponentFixture<RegisterGuardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterGuardsComponent]
    });
    fixture = TestBed.createComponent(RegisterGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
