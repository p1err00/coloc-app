import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesHomeComponent } from './taches-home.component';

describe('TachesHomeComponent', () => {
  let component: TachesHomeComponent;
  let fixture: ComponentFixture<TachesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
