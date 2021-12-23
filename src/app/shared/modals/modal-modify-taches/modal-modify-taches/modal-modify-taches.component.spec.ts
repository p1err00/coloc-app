import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifyTachesComponent } from './modal-modify-taches.component';

describe('ModalModifyTachesComponent', () => {
  let component: ModalModifyTachesComponent;
  let fixture: ComponentFixture<ModalModifyTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifyTachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
