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

  it('subtract(5,2) should return 3', () => {
    expect(service.subtract(5,2)).toEqual(3);
  });

  it('subtract(15,5) should return 10', () => {
    expect(service.subtract(15, 5)).toEqual(10);
  });

  it('subtract(5,5) should return 0', () => {
    expect(service.subtract(5, 5)).toEqual(0);
  });

  it('subtract(15,20) should return -5', () => {
    expect(service.subtract(15, 20)).toEqual(-5);
  });
});
