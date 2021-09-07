import { TestBed } from '@angular/core/testing';
import { DivideBySubtractionService } from './divide-by-subtraction.service';
import { SubtractionService } from './subtraction.service';

describe('DivideBySubtractionService', () => {
  let subtractionServiceSpy: jasmine.SpyObj<SubtractionService>;
  let divideBySubtractionService: DivideBySubtractionService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['sub']);

    TestBed.configureTestingModule({
      providers:[
        DivideBySubtractionService,
        { provide: SubtractionService, useValue: spy }
      ]
    });
    subtractionServiceSpy = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
    divideBySubtractionService = TestBed.inject(DivideBySubtractionService);
  });

  it('should be created', () => {
    expect(divideBySubtractionService).toBeTruthy();
  });

  it('Divide(6,2) should return 3', () => {
    subtractionServiceSpy.sub.and.returnValues(4,2,0);
    expect(divideBySubtractionService.divide(6,2)).toEqual(3);
  });
  
  it('Divide(30,15) should return 2', () => {
    subtractionServiceSpy.sub.and.returnValues(15,0);
    expect(divideBySubtractionService.divide(30,15)).toEqual(2);
  });

  it('Divide(36,4) should return 4', () => {
    subtractionServiceSpy.sub.and.returnValues(24,16,8,0);
    expect(divideBySubtractionService.divide(36,4)).toEqual(4);
  });

  it('Divide(11,5) should return -1 - Not integer results', () => {
    subtractionServiceSpy.sub.and.returnValues(6,1,-4);
    expect(divideBySubtractionService.divide(11,5)).toEqual(-1);
  });
  
});
