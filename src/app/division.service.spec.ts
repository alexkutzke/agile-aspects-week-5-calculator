import { TestBed } from '@angular/core/testing';

import { DivisionService } from './division.service';

describe('DivisionService', () => {
  let service: DivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(2, 2) should return 1', () => {
    expect(service.divide(2, 2)).toEqual(1);
  });

  it('(8, 2) should return 4', () => {
    expect(service.divide(8, 2)).toEqual(4);
  });

});
