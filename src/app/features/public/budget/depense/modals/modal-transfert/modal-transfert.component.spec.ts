import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTransfertComponent } from './modal-transfert.component';

describe('ModalTransfertComponent', () => {
  let component: ModalTransfertComponent;
  let fixture: ComponentFixture<ModalTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTransfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
