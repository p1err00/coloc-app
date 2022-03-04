import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheUserHomeComponent } from './tache-user-home.component';

describe('TacheUserHomeComponent', () => {
  let component: TacheUserHomeComponent;
  let fixture: ComponentFixture<TacheUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
