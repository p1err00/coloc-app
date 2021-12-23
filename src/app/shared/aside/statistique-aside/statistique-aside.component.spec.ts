import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueAsideComponent } from './statistique-aside.component';

describe('StatistiqueAsideComponent', () => {
  let component: StatistiqueAsideComponent;
  let fixture: ComponentFixture<StatistiqueAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
