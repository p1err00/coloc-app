import { TestBed } from '@angular/core/testing';

import { SectionEventsService } from './section-events.service';

describe('SectionEventsService', () => {
  let service: SectionEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
