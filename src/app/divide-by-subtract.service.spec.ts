import { TestBed } from '@angular/core/testing';

import { DivideBySubtractService } from './divide-by-subtract.service';
import { SubtractionService } from './subtraction.service';

describe('DivideBySubtractService', () => {
  let subtractionServiceSpy: jasmine.SpyObj<SubtractionService>;
  let divideBySubtractService: DivideBySubtractService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['subtract']);

    TestBed.configureTestingModule({
      providers:[
        DivideBySubtractService,
        { provide: SubtractionService, useValue: spy }
      ]
    });
    subtractionServiceSpy = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
    divideBySubtractService = TestBed.inject(DivideBySubtractService);
  });

  it('should be created', () => {
    expect(divideBySubtractService).toBeTruthy();
  });

  it('divide(3,1) should return 3', () => {
    subtractionServiceSpy.subtract.and.returnValues(2,1,0);
    expect(divideBySubtractService.divide(3,1)).toEqual(3);
    expect(subtractionServiceSpy.subtract.calls.count())
      .toBe(3, 'spy method was called three times');
  });

  it('divide(4,2) should return 2', () => {
    subtractionServiceSpy.subtract.and.returnValues(2,0);
    expect(divideBySubtractService.divide(4,2)).toEqual(2);
    expect(subtractionServiceSpy.subtract.calls.count())
      .toBe(2, 'spy method was called twice');
  });

  it('divide(100,20) should return 5', () => {
    subtractionServiceSpy.subtract.and.returnValues(80, 60, 40, 20, 0);
    expect(divideBySubtractService.divide(100,20)).toEqual(5);
    expect(subtractionServiceSpy.subtract.calls.count())
      .toBe(5, 'spy method was called five times');
  });

  it('divide(24,12) should return 2', () => {
    subtractionServiceSpy.subtract.and.returnValues(12,0);
    expect(divideBySubtractService.divide(24,12)).toEqual(2);
    expect(subtractionServiceSpy.subtract.calls.count())
      .toBe(2, 'spy method was called twice');
  });

  it('divide(24,4) should return 6', () => {
    subtractionServiceSpy.subtract.and.returnValues(20,16,12,8,4,0);
    expect(divideBySubtractService.divide(24,4)).toEqual(6);
    expect(subtractionServiceSpy.subtract.calls.count())
      .toBe(6, 'spy method was called one time');
  });

  it('divide(5,2) should return 3', () => {
    subtractionServiceSpy.subtract.and.returnValues(3,1,-1);
    expect(divideBySubtractService.divide(5,2)).toEqual(3);
    expect(subtractionServiceSpy.subtract.calls.count())
      .toBe(3, 'spy method was called three times');
  });



});
