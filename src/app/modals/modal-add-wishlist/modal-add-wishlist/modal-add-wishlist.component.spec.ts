import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddWishlistComponent } from './modal-add-wishlist.component';

describe('ModalAddWishlistComponent', () => {
  let component: ModalAddWishlistComponent;
  let fixture: ComponentFixture<ModalAddWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
