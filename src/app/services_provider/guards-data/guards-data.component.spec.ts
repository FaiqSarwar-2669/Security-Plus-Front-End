import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsDataComponent } from './guards-data.component';

describe('GuardsDataComponent', () => {
  let component: GuardsDataComponent;
  let fixture: ComponentFixture<GuardsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardsDataComponent]
    });
    fixture = TestBed.createComponent(GuardsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
