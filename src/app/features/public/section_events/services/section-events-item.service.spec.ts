import { TestBed } from '@angular/core/testing';

import { SectionEventsItemService } from './section-events-item.service';

describe('SectionEventsItemService', () => {
  let service: SectionEventsItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionEventsItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
