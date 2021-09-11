import { TestBed } from '@angular/core/testing';

import { SubtractionService } from './subtraction.service';
import { DivisionBySubtractionService } from './division-by-subtraction.service';

describe('DivisionBySubtractionService', () => {
  let subtractionServiceSpy: jasmine.SpyObj<SubtractionService>;
  let divisionBySubtractionService: DivisionBySubtractionService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['subtraction']);

    TestBed.configureTestingModule({
      providers:[
        DivisionBySubtractionService,
        { provide: SubtractionService, useValue: spy }
      ]
    });
   subtractionServiceSpy = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
   divisionBySubtractionService = TestBed.inject(DivisionBySubtractionService);
  });

  it('should be created', () => {
    expect(divisionBySubtractionService).toBeTruthy();
  });

  it('division(9,3) should return 3', () => {
    subtractionServiceSpy.subtraction.and.returnValues(9,6,3);
    expect(divisionBySubtractionService.division(9,3)).toEqual(3);
    expect(subtractionServiceSpy.subtraction.calls.count())
      .toBe(3, 'spy method was called three times');
  });

  it('division(20,5) should return 4', () => {
    subtractionServiceSpy.subtraction.and.returnValues(20,16,12,8,4);
    expect(divisionBySubtractionService.division(20,5)).toEqual(4);
  });

  it('division(15,3) should return 5', () => {
    subtractionServiceSpy.subtraction.and.returnValues(15,10,5);
    expect(divisionBySubtractionService.division(15,3)).toEqual(5);
  });

});
