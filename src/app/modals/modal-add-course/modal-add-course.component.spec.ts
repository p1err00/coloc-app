import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCourseComponent } from './modal-add-course.component';

describe('ModalAddCourseComponent', () => {
  let component: ModalAddCourseComponent;
  let fixture: ComponentFixture<ModalAddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
