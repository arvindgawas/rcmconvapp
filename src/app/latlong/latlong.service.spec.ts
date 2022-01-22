import { TestBed } from '@angular/core/testing';

import { LatlongService } from './latlong.service';

describe('LatlongService', () => {
  let service: LatlongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatlongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
