import { TestBed } from '@angular/core/testing';

import { SubtractionService } from './subtraction.service';

describe('SubtractionService', () => {
  let service: SubtractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sub(3, 1) should return 2', () => {
    expect(service.sub(3, 1)).toEqual(2);
  });

  it('sub(6, 6) should return 0', () => {
    expect(service.sub(6, 6)).toEqual(0);
  });

  it('sub(2, 6) should return -4', () => {
    expect(service.sub(2, 6)).toEqual(-4);
  });
});
