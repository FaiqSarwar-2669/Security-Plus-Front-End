import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminChatComponent } from './admin-chat.component';

describe('AdminChatComponent', () => {
  let component: AdminChatComponent;
  let fixture: ComponentFixture<AdminChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminChatComponent]
    }).compileComponents(); // Ensures async compilation

    fixture = TestBed.createComponent(AdminChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AdminChat component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have default chatTitle initialized', () => {
    expect(component.chatTitle).toEqual('Default Chat'); 
  });
});
