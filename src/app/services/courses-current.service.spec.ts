import { TestBed } from '@angular/core/testing';

import { CoursesCurrentService } from './courses-current.service';

describe('CoursesCurrentService', () => {
  let service: CoursesCurrentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesCurrentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
