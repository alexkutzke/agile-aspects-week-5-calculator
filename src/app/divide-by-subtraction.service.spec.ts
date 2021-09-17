import { TestBed } from '@angular/core/testing';

import { SubService } from './sub.service';
import { DivideBySubtractionService } from './divide-by-subtraction.service';

describe('DivideBySubtractionService', () => {
  let subServiceSpy: jasmine.SpyObj<SubService>;
  let divideBySubService: DivideBySubtractionService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['sub']);

    TestBed.configureTestingModule({
      providers: [
        DivideBySubtractionService,
        { provide: SubService, useValue: spy },
      ],
    });
    subServiceSpy = TestBed.inject(SubService) as jasmine.SpyObj<SubService>;
    divideBySubService = TestBed.inject(DivideBySubtractionService);
  });

  it('should be created', () => {
    expect(divideBySubService).toBeTruthy();
  });

  // it('divide(10,1) should return -10', () => {
  //   subServiceSpy.sub.and.returnValues(3, 6);
  //   expect(divideBySubService.divide(3, 2)).toEqual(6);
  //   expect(subServiceSpy.sub.calls.count()).toBe(
  //     3,
  //     'spy method was called three times'
  //   );
  // });

  it('divide(10,2) should return 5', () => {
    subServiceSpy.sub.and.returnValues(3, 5);
    expect(divideBySubService.divide(3, 2)).toEqual(5);
  });
});
