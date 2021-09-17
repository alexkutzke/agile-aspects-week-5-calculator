import { TestBed } from '@angular/core/testing';

import { SubtractionService } from './subtraction.service';
import { DivisionService } from './division.service';

describe('DivisionService', () => {
  let subtractionServiceSpy: jasmine.SpyObj<SubtractionService>;
  let divisionBySubtraction: DivisionService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['subtration']);

    TestBed.configureTestingModule({
      providers: [ 
          DivisionService,
        { provide: SubtractionService, useValue: spy} 
      ]
    });
    subtractionServiceSpy = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
    divisionBySubtraction = TestBed.inject(DivisionService);
  });

  it('should be created', () => {
    expect(divisionBySubtraction).toBeTruthy();
    expect(subtractionServiceSpy).toBeTruthy();
  });

  it('division(4,2) should return 2', () => {
   //subtractionServiceSpy.subtraction.and.returnValues(2,0);
    //expect(divisionBySubtraction.division(4,2)).toEqual(2);
    //expect(subtractionServiceSpy.subtraction.calls.count())
    //  .toBe(2, 'spy method was called three times');

  });

});
