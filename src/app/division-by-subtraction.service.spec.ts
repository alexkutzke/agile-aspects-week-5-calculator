import { TestBed } from '@angular/core/testing';

import { DivisionBySubtractionService } from './division-by-subtraction.service';
import { SubtractionService } from './subtraction.service';


describe('DivisionBySubtractionService', () => {
  let divisionBySubtractionService: DivisionBySubtractionService;
  let subServiceSpy: jasmine.SpyObj<SubtractionService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['subtraction']);

    TestBed.configureTestingModule({
      providers:[
        DivisionBySubtractionService,
        { provide: SubtractionService, useValue: spy }
      ]
    });
    subServiceSpy = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
    divisionBySubtractionService = TestBed.inject(DivisionBySubtractionService);
  });

  it('should be created', () => {
    expect(divisionBySubtractionService).toBeTruthy();
  });
  
  it('divide(12,4) should return 3', () => {
    subServiceSpy.subtraction.and.returnValues(8,4,0);
    expect(divisionBySubtractionService.division(12,4)).toEqual(3);
    expect(subServiceSpy.subtraction.calls.count())
      .toBe(3, 'spy method was called three times');
  });
  
  it('divide(20,5) should return 4', () => {
    subServiceSpy.subtraction.and.returnValues(15,10,5,0);
    expect(divisionBySubtractionService.division(20,5)).toEqual(4);
  });

});
