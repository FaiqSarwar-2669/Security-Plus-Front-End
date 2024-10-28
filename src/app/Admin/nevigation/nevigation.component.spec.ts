// nevigation.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NevigationComponent } from './nevigation.component';

describe('NevigationComponent', () => {
  let component: NevigationComponent;
  let fixture: ComponentFixture<NevigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NevigationComponent]
    });
    fixture = TestBed.createComponent(NevigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle height correctly in showMore', () => {
    const eventMock = {
      currentTarget: {
        style: { height: '40px' },
        querySelector: (selector: string) => ({ style: { display: 'none' } })
      }
    } as unknown as MouseEvent & { currentTarget: HTMLElement };
    component.showMore(eventMock);
    expect(eventMock.currentTarget.style.height).toBe('auto');
  });
});
