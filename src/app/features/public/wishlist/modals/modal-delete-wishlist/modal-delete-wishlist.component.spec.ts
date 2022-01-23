import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteWishlistComponent } from './modal-delete-wishlist.component';

describe('ModalDeleteWishlistComponent', () => {
  let component: ModalDeleteWishlistComponent;
  let fixture: ComponentFixture<ModalDeleteWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
