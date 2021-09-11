import { TestBed } from '@angular/core/testing';

import { DivideBySubtractService } from './divide-by-subtract.service';
import { SubtractService } from './subtract.service';

describe('DivideBySubtractService', () => {
  let divideBySubtractService: DivideBySubtractService;
  let subtractServiceSpy: jasmine.SpyObj<SubtractService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['subtract']);

    TestBed.configureTestingModule({
      providers: [
        DivideBySubtractService,
        { provide: SubtractService, useValue: spy }
      ]
    });
    
    subtractServiceSpy = TestBed.inject(SubtractService) as jasmine.SpyObj<SubtractService>;
    divideBySubtractService = TestBed.inject(DivideBySubtractService);
  });

  it('should be created', () => {
    expect(divideBySubtractService).toBeTruthy();
  });

  it('divide(25,5) should return 5', () => {
    subtractServiceSpy.subtract.and.returnValues(20, 15, 10, 5, 0);
    expect(divideBySubtractService.divide(25,5)).toEqual(5);
    expect(subtractServiceSpy.subtract.calls.count())
      .toBe(5, 'spy method was called five times');
  });

  it('divide(8,2) should return 4', () => {
    subtractServiceSpy.subtract.and.returnValues(6, 4, 2, 0);
    expect(divideBySubtractService.divide(8,2)).toEqual(4);
  });
});
