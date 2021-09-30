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

  it('divide(2, 3) should return 1', () => {
    expect(service.divide(2, 3)).toEqual(1);
  });

  it('divide(6, 3) should return 2', () => {
    const divisionService = new DivisionService();
    expect(divisionService.divide(6, 3)).toEqual(2);
  });
});
