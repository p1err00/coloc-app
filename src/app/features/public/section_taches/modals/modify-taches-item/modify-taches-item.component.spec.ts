import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTachesItemComponent } from './modify-taches-item.component';

describe('ModifyTachesItemComponent', () => {
  let component: ModifyTachesItemComponent;
  let fixture: ComponentFixture<ModifyTachesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTachesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTachesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
