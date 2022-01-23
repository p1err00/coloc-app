import { TestBed } from '@angular/core/testing';

import { UtilsCourseService } from './utils-course.service';

describe('UtilsCourseService', () => {
  let service: UtilsCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
