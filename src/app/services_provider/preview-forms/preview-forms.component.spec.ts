import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFormsComponent } from './preview-forms.component';

describe('PreviewFormsComponent', () => {
  let component: PreviewFormsComponent;
  let fixture: ComponentFixture<PreviewFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewFormsComponent]
    });
    fixture = TestBed.createComponent(PreviewFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
