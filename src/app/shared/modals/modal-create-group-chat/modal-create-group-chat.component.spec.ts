import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateGroupChatComponent } from './modal-create-group-chat.component';

describe('ModalCreateGroupChatComponent', () => {
  let component: ModalCreateGroupChatComponent;
  let fixture: ComponentFixture<ModalCreateGroupChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateGroupChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateGroupChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
