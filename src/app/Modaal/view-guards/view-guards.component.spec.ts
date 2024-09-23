import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardsComponent } from './view-guards.component';

describe('ViewGuardsComponent', () => {
  let component: ViewGuardsComponent;
  let fixture: ComponentFixture<ViewGuardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewGuardsComponent]
    });
    fixture = TestBed.createComponent(ViewGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
