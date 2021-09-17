import { TestBed } from '@angular/core/testing';

import { DivisionBySubtractionService } from './division-by-subtraction.service';
import { SubtractService } from './subtract.service';

describe('DivisionBySubtractionService', () => {
  let subServiceSpy: jasmine.SpyObj<SubtractService>;
  let divisionBySubService: DivisionBySubtractionService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['sub']);

    TestBed.configureTestingModule({
      providers: [DivisionBySubtractionService, { provide: SubtractService, useValue: spy }],
    });
    subServiceSpy = TestBed.inject(SubtractService) as jasmine.SpyObj<SubtractService>;
    divisionBySubService = TestBed.inject(DivisionBySubtractionService);
  });

  it('should be created', () => {
    expect(divisionBySubService).toBeTruthy();
  });

  it('division(6,3) should return 2', () => {
    subServiceSpy.subtract.and.returnValues(6,3);
    expect(divisionBySubService.division(6,3)).toEqual(2);
    expect(subServiceSpy.subtract.calls.count()).toEqual(2);
  });

  it('division(60,12) should return 5', () => {
    subServiceSpy.subtract.and.returnValues(60,48,36,24,12,);
    expect(divisionBySubService.division(60,12)).toEqual(5);
    expect(subServiceSpy.subtract.calls.count()).toEqual(5);
  });
});
