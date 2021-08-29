import { TestBed } from '@angular/core/testing';

import { DivBySubService } from './div-by-sub.service';

describe('DivBySubService', () => {
  let service: DivBySubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivBySubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
