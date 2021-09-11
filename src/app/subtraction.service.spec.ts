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

  it('sum(3,2) should return 1', () => {
    expect(service.subtract(3,2)).toEqual(1);
  });

  it('sum(1,1) should return 0', () => {
    const subtractionService = new SubtractionService();
    expect(subtractionService.subtract(1,1)).toEqual(0);
  })
});
