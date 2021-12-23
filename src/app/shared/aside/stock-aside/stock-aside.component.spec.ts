import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAsideComponent } from './stock-aside.component';

describe('StockAsideComponent', () => {
  let component: StockAsideComponent;
  let fixture: ComponentFixture<StockAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
