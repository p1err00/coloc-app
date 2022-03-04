import { TestBed } from '@angular/core/testing';

import { SectionEventsUsersService } from './section-events-users.service';

describe('SectionEventsUsersService', () => {
  let service: SectionEventsUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionEventsUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
