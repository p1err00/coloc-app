import { TestBed } from '@angular/core/testing';

import { RecurentEventService } from './recurent-event.service';

describe('RecurentEventService', () => {
  let service: RecurentEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecurentEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
