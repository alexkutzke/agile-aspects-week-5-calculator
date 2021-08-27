import { TestBed } from '@angular/core/testing';

import { SumService } from './sum.service';

describe('SumService', () => {
  let service: SumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sum(2,3) should return 5', () => {
    expect(service.sum(2,3)).toEqual(5);
  });

  it('sum(3,6) should return 9', () => {
    const sumService = new SumService();
    expect(sumService.sum(3,6)).toEqual(9);
  })
});
