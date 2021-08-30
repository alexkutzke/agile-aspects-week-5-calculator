import { TestBed } from '@angular/core/testing';

import { SubtractService } from './subtract.service';

describe('SubtractService', () => {
  let subtractService: SubtractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    subtractService = TestBed.inject(SubtractService);
  });

  it('should be created', () => {
    expect(subtractService).toBeTruthy();
  });

  it('subtract(2,3) should return -1', () => {
    expect(subtractService.subtract(2,3)).toEqual(-1);
  });

  it('subtract(3,6) should return -3', () => {
    expect(subtractService.subtract(3,6)).toEqual(-3);
  })
});
