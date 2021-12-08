import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectColocComponent } from './select-coloc.component';

describe('SelectColocComponent', () => {
  let component: SelectColocComponent;
  let fixture: ComponentFixture<SelectColocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectColocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectColocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
