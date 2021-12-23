import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddTacheRecurrenteComponent } from './modal-add-tache-recurrente.component';

describe('ModalAddTacheRecurrenteComponent', () => {
  let component: ModalAddTacheRecurrenteComponent;
  let fixture: ComponentFixture<ModalAddTacheRecurrenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddTacheRecurrenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddTacheRecurrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
