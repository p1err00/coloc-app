import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEvenementRecurrentComponent } from './modal-add-evenement-recurrent.component';

describe('ModalAddEvenementRecurrentComponent', () => {
  let component: ModalAddEvenementRecurrentComponent;
  let fixture: ComponentFixture<ModalAddEvenementRecurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEvenementRecurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddEvenementRecurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
