import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSendFileComponent } from './modal-send-file.component';

describe('ModalSendFileComponent', () => {
  let component: ModalSendFileComponent;
  let fixture: ComponentFixture<ModalSendFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSendFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSendFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
