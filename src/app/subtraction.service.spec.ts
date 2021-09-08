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
  it('sum(2,3) should return 5', () => {
    expect(service.subtraction(10,4)).toEqual(6);
  });

  it('sum(3,6) should return 9', () => {
    const subService = new SubtractionService();
    expect(subService.subtraction(18,6)).toEqual(12);
  })
});
