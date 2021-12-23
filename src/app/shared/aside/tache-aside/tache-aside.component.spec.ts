import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheAsideComponent } from './tache-aside.component';

describe('TacheAsideComponent', () => {
  let component: TacheAsideComponent;
  let fixture: ComponentFixture<TacheAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
