import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisterClientComponent } from './unregister-client.component';

describe('UnregisterClientComponent', () => {
  let component: UnregisterClientComponent;
  let fixture: ComponentFixture<UnregisterClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnregisterClientComponent]
    });
    fixture = TestBed.createComponent(UnregisterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
