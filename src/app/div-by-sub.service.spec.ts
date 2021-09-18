import { TestBed } from '@angular/core/testing';

import { DivBySubService } from './div-by-sub.service';
import { SubService } from './sub.service';

describe('DivBySubService', () => {
 
  let subServiceSpy: jasmine.SpyObj<SubService>;
  let divBySubService: DivBySubService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['sub']);

    TestBed.configureTestingModule({
      providers:[
        DivBySubService,
        { provide: SubService, useValue: spy }
      ]
    });
    subServiceSpy = TestBed.inject(SubService) as jasmine.SpyObj<SubService>;
    divBySubService = TestBed.inject(DivBySubService);
  });

  it('should be created', () => {
    expect(divBySubService).toBeTruthy();
  });

  it('divide(2,3) should return 0', () => {
    subServiceSpy.sub.and.returnValues(0);
    expect(divBySubService.divide(2, 3)).toEqual(0);
    expect(subServiceSpy.sub.calls.count())
      .toBe(0, 'spy method wasn´t called');
  });
  
  it('divide(3,2) should return 1', () => {
    subServiceSpy.sub.and.returnValues(1);
    expect(divBySubService.divide(3, 2)).toEqual(1);
    expect(subServiceSpy.sub.calls.count())
      .toBe(1, 'spy method was called one time');
  });

  it('divide(6,2) should return 3', () => {
    subServiceSpy.sub.and.returnValues(4, 2, 0);
    expect(divBySubService.divide(6, 2)).toEqual(3);
    expect(subServiceSpy.sub.calls.count())
      .toBe(3, 'spy method was called three times');
  });

  it('divide(-6,2) should return -3', () => {
    subServiceSpy.sub.and.returnValues(4, 2, 0);
    expect(divBySubService.divide(-6, 2)).toEqual(-3);
    expect(subServiceSpy.sub.calls.count())
      .toBe(3, 'spy method was called three times');
  });

  it('divide(-8,-2) should return 4', () => {
    subServiceSpy.sub.and.returnValues(6, 4, 2, 0);
    expect(divBySubService.divide(-6, -2)).toEqual(4);
    expect(subServiceSpy.sub.calls.count())
      .toBe(4, 'spy method was called four times');
  });

});
