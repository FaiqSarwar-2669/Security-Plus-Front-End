import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPortfolioComponent } from './preview-portfolio.component';

describe('PreviewPortfolioComponent', () => {
  let component: PreviewPortfolioComponent;
  let fixture: ComponentFixture<PreviewPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewPortfolioComponent]
    });
    fixture = TestBed.createComponent(PreviewPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
