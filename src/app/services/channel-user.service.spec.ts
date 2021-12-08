import { TestBed } from '@angular/core/testing';

import { ChannelUserService } from './channel-user.service';

describe('ChannelUserService', () => {
  let service: ChannelUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
