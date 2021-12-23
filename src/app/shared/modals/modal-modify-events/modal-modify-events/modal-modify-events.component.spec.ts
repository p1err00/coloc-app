import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifyEventsComponent } from './modal-modify-events.component';

describe('ModalModifyEventsComponent', () => {
  let component: ModalModifyEventsComponent;
  let fixture: ComponentFixture<ModalModifyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifyEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
