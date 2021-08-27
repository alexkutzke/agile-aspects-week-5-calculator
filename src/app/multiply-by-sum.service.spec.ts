import { TestBed } from '@angular/core/testing';

import { SumService } from './sum.service';
import { MultiplyBySumService } from './multiply-by-sum.service';

describe('MultiplierBySumService', () => {
  let sumServiceSpy: jasmine.SpyObj<SumService>;
  let multiplyBySumService: MultiplyBySumService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['sum']);

    TestBed.configureTestingModule({
      providers:[
        MultiplyBySumService,
        { provide: SumService, useValue: spy }
      ]
    });
    sumServiceSpy = TestBed.inject(SumService) as jasmine.SpyObj<SumService>;
    multiplyBySumService = TestBed.inject(MultiplyBySumService);
  });

  it('should be created', () => {
    expect(multiplyBySumService).toBeTruthy();
  });

  it('multiply(2,3) should return 6', () => {
    sumServiceSpy.sum.and.returnValues(2,4,6);
    expect(multiplyBySumService.multiply(2,3)).toEqual(6);
    expect(sumServiceSpy.sum.calls.count())
      .toBe(3, 'spy method was called three times');
  });
  
  it('multiply(3,2) should return 6', () => {
    sumServiceSpy.sum.and.returnValues(3,6);
    expect(multiplyBySumService.multiply(3,2)).toEqual(6);
  });
});
