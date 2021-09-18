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

  it('should return 9', () => {
    expect(service.subtract(18, 9)).toEqual(9);
  });

  it('should return 0', () => {
    expect(service.subtract(4, 4)).toEqual(0);
  });

  it('should return -5', () => {
    expect(service.subtract(10, 15)).toEqual(-5);
  });

  it('should return 10', () => {
    expect(service.subtract(5, -5)).toEqual(10);
  });

});
