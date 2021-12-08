import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifyWishlistComponent } from './modal-modify-wishlist.component';

describe('ModalModifyWishlistComponent', () => {
  let component: ModalModifyWishlistComponent;
  let fixture: ComponentFixture<ModalModifyWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifyWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifyWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
