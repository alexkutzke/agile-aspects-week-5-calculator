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

  it('subtraction(4,2) should return 2', () => {
    expect(service.subtraction(4,2)).toEqual(2);
  });

  it('subtraction(12,7) should return 5', () => {
    expect(service.subtraction(12,7)).toEqual(5);
  });

  it('subtraction(4,5) should return -1', () => {
    expect(service.subtraction(4,5)).toEqual(-1);
  });



});
