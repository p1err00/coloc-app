import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategorieDeleteComponent } from './modal-categorie-delete.component';

describe('ModalCategorieDeleteComponent', () => {
  let component: ModalCategorieDeleteComponent;
  let fixture: ComponentFixture<ModalCategorieDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCategorieDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCategorieDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
