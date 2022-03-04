import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTachesItemComponent } from './add-taches-item.component';

describe('AddTachesItemComponent', () => {
  let component: AddTachesItemComponent;
  let fixture: ComponentFixture<AddTachesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTachesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTachesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
