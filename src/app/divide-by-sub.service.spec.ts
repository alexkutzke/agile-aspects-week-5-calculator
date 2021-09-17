import { TestBed } from '@angular/core/testing';

import { SubtractionService } from './subtraction.service';
import { DivideBySubService } from './divide-by-sub.service';

describe('MultiplierBySumService', () => {
  let subServiceSpy: jasmine.SpyObj<SubtractionService>;
  let divideBySubService: DivideBySubService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['sub']);

    TestBed.configureTestingModule({
      providers:[
        DivideBySubService,
        { provide: SubtractionService, useValue: spy }
      ]
    });
    subServiceSpy = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
    divideBySubService = TestBed.inject(DivideBySubService);
  });

  it('should be created', () => {
    expect(divideBySubService).toBeTruthy();
  });

  it('divide(4,2) should return 2', () => {
    subServiceSpy.subtraction.and.returnValues(2);
    expect(divideBySubService.divide(4,2)).toEqual(2);
    expect(subServiceSpy.subtraction.calls.count())
      .toBe(1, 'spy method was called one time');
  });
  
  it('divide(8,2) should return 4', () => {
    subServiceSpy.subtraction.and.returnValues(4,2);
    expect(divideBySubService.divide(8,2)).toEqual(4);
  });
});
