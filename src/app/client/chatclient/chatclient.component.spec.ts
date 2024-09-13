import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatclientComponent } from './chatclient.component';

describe('ChatclientComponent', () => {
  let component: ChatclientComponent;
  let fixture: ComponentFixture<ChatclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatclientComponent]
    });
    fixture = TestBed.createComponent(ChatclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
