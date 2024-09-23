import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsClientComponent } from './guards-client.component';

describe('GuardsClientComponent', () => {
  let component: GuardsClientComponent;
  let fixture: ComponentFixture<GuardsClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardsClientComponent]
    });
    fixture = TestBed.createComponent(GuardsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
