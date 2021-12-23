import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAsideComponent } from './event-aside.component';

describe('EventAsideComponent', () => {
  let component: EventAsideComponent;
  let fixture: ComponentFixture<EventAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
