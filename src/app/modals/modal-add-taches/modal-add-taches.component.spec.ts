import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddTachesComponent } from './modal-add-taches.component';

describe('ModalAddTachesComponent', () => {
  let component: ModalAddTachesComponent;
  let fixture: ComponentFixture<ModalAddTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddTachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
