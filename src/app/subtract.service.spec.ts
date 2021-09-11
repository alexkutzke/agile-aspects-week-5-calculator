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

  it('subtract(5,5) should return 0', () => {
    expect(service.subtract(5,5)).toEqual(0);
  });

  it('subtract(500,230) should return 270', () => {
    expect(service.subtract(500,230)).toEqual(270);
  });

  it('subtract(23,7) should return 16', () => {
    expect(service.subtract(23,7)).toEqual(16);
  });

  it('subtract(32,5) should return 27', () => {
    const subtractService = new SubtractService();
    expect(subtractService.subtract(32,5)).toEqual(27);
  });
});
