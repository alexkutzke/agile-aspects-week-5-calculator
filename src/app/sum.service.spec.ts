import { TestBed } from '@angular/core/testing';

import { SumService } from './sum.service';

describe('SumService', () => {
  let sumService: SumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sumService = TestBed.inject(SumService);
  });

  it('should be created', () => {
    expect(sumService).toBeTruthy();
  });

  it('sum(2,3) should return 5', () => {
    expect(sumService.sum(2,3)).toEqual(5);
  });

  it('sum(3,6) should return 9', () => {
    expect(sumService.sum(3,6)).toEqual(9);
  })
});
