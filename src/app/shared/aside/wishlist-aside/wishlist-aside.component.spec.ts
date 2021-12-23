import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistAsideComponent } from './wishlist-aside.component';

describe('WishlistAsideComponent', () => {
  let component: WishlistAsideComponent;
  let fixture: ComponentFixture<WishlistAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
