import { TestBed } from '@angular/core/testing';

import { DivideBySubtractionService } from './divide-by-subtraction.service';
import { SubtractService} from './subtract.service'

describe('DivideBySubtractionService', () => {
  let divideBySubtraction: DivideBySubtractionService;
  let subtractServiceSpy: jasmine.SpyObj<SubtractService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('subService', ['subtract'])

    TestBed.configureTestingModule({
      providers:[
        DivideBySubtractionService,
        {provide: SubtractService, useValue: spy}
      ]
    });
    subtractServiceSpy = TestBed.inject(SubtractService) as jasmine.SpyObj<SubtractService>;
    divideBySubtraction = TestBed.inject(DivideBySubtractionService);
  });

  it('should be created', () => {
    expect(divideBySubtraction).toBeTruthy();
  });

  it('divide(6,3) should return [2,0]', () => {
    subtractServiceSpy.subtract.and.returnValues(3,0);
    expect(divideBySubtraction.divide(6,3)).toEqual([2,0]);
    expect(subtractServiceSpy.subtract.calls.count())
    .toBe(2,'spy method was called two times');
  });

  it('divide(6,2) should return [3,0]', () => {
    subtractServiceSpy.subtract.and.returnValues(4,2,0);
    expect(divideBySubtraction.divide(6,2)).toEqual([3,0]);
  });

  it('divide(2,3) should return [0,2]', () => {
    expect(divideBySubtraction.divide(2,3)).toEqual([0,2]);
  });

  it('divide(3,2) should return [1,1]', () => {
    subtractServiceSpy.subtract.and.returnValues(1);
    expect(divideBySubtraction.divide(3,2)).toEqual([1,1]);
  });
});
