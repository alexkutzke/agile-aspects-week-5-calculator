import { TestBed } from '@angular/core/testing';

import { DivisionService } from './division.service';
import { SubtractionService } from './subtraction.service';

describe('DivisionService', () => {
  let subtractionServiceSpy: jasmine.SpyObj<SubtractionService>;
  let divisionService: DivisionService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SubtractionService', ['subtract']);
    TestBed.configureTestingModule({
      providers:[
        DivisionService,
        {
          provide: SubtractionService, useValue: spy
        }
      ]
    });
    subtractionServiceSpy = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
    divisionService = TestBed.inject(DivisionService);
  });

  it('should be created', () => {
    expect(divisionService).toBeTruthy();
  });

  it('divide(10,2) should return 5', () => {
    subtractionServiceSpy.subtract.and.returnValues(8, 6, 4, 2, 0);
    expect(divisionService.divide(10,2)).toEqual(5);
    expect(subtractionServiceSpy.subtract.calls.count()).toBe(5, 'spy method was called 3 times');
  });

  it('divide(50,2) should return 25', () => {
    subtractionServiceSpy.subtract.and.returnValues(48, 46, 44, 42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0);
    expect(divisionService.divide(50,2)).toEqual(25);
    expect(subtractionServiceSpy.subtract.calls.count()).toBe(25, 'spy method was called 25 times');
  });
});
