import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategorieAddComponent } from './modal-categorie-add.component';

describe('ModalCategorieAddComponent', () => {
  let component: ModalCategorieAddComponent;
  let fixture: ComponentFixture<ModalCategorieAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCategorieAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCategorieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
