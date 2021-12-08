import { TestBed } from '@angular/core/testing';

import { ServerStockService } from './server-stock.service';

describe('ServerStockService', () => {
  let service: ServerStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
