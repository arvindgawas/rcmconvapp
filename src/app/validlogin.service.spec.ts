import { TestBed } from '@angular/core/testing';

import { ValidloginService } from './validlogin.service';

describe('ValidloginService', () => {
  let service: ValidloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
