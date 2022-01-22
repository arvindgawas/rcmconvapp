import { TestBed } from '@angular/core/testing';

import { LatlongreportService } from './latlongreport.service';

describe('LatlongreportService', () => {
  let service: LatlongreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatlongreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
