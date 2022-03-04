import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTachesItemComponent } from './delete-taches-item.component';

describe('DeleteTachesItemComponent', () => {
  let component: DeleteTachesItemComponent;
  let fixture: ComponentFixture<DeleteTachesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTachesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTachesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
