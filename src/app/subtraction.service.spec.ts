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

  it('subtraction(2,3) should return 1', () => {
    expect(service.subtraction(3,2)).toEqual(1);
  });

  it('subtraction(6,3) should return 3', () => {
    const subtractionService = new SubtractionService();
    expect(subtractionService.subtraction(6,3)).toEqual(3);
  })

});
