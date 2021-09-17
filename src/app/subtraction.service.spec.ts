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

  it('sub(3,2) should return 1', () => {
    expect(service.subtraction(3,2)).toEqual(1);
  });

  it('sub(9,6) should return 3', () => {
    const subService = new SubtractionService();
    expect(subService.subtraction(9,6)).toEqual(3);
  })
});
