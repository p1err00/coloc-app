import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageAsideComponent } from './stockage-aside.component';

describe('StockageAsideComponent', () => {
  let component: StockageAsideComponent;
  let fixture: ComponentFixture<StockageAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
