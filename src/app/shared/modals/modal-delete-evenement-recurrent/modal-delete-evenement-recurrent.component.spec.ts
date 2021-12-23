import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteEvenementRecurrentComponent } from './modal-delete-evenement-recurrent.component';

describe('ModalDeleteEvenementRecurrentComponent', () => {
  let component: ModalDeleteEvenementRecurrentComponent;
  let fixture: ComponentFixture<ModalDeleteEvenementRecurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteEvenementRecurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteEvenementRecurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
