import { TestBed } from '@angular/core/testing';

import { SubtractService } from './subtract.service';

describe('SubtractService', () => {
  let service: SubtractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('subtract(5,3) should return 2', () => {
    expect(service.subtract(5,3)).toEqual(2);
  });

  it('subtract(3,-3) should return 0', () => {
    const sumService = new SubtractService();
    expect(sumService.subtract(3,3)).toEqual(0);
  })
});
