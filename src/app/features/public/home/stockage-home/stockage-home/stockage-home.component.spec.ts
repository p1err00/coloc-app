import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageHomeComponent } from './stockage-home.component';

describe('StockageHomeComponent', () => {
  let component: StockageHomeComponent;
  let fixture: ComponentFixture<StockageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
