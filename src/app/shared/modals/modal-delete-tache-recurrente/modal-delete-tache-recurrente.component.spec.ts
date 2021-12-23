import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteTacheRecurrenteComponent } from './modal-delete-tache-recurrente.component';

describe('ModalDeleteTacheRecurrenteComponent', () => {
  let component: ModalDeleteTacheRecurrenteComponent;
  let fixture: ComponentFixture<ModalDeleteTacheRecurrenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteTacheRecurrenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteTacheRecurrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
