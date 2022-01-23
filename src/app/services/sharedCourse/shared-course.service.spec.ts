import { TestBed } from '@angular/core/testing';

import { SharedCourseService } from './shared-course.service';

describe('SharedCourseService', () => {
  let service: SharedCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
