import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategorieModifComponent } from './modal-categorie-modif.component';

describe('ModalCategorieModifComponent', () => {
  let component: ModalCategorieModifComponent;
  let fixture: ComponentFixture<ModalCategorieModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCategorieModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCategorieModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
