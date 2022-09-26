import { TestBed } from '@angular/core/testing';

import { LogingsService } from './logings.service';

describe('LogingsService', () => {
  let service: LogingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
