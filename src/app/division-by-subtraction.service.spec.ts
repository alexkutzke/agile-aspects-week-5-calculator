import { TestBed } from '@angular/core/testing';

import { DivisionBySubtractionService } from './division-by-subtraction.service';
import { SubtractionService } from './subtraction.service';

describe('DivisionBySubtractionService', () => {
  let service: DivisionBySubtractionService;
  let subtractionService: jasmine.SpyObj<SubtractionService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SubtractionService', ['sub']);

    TestBed.configureTestingModule({
      providers:[
        DivisionBySubtractionService,
        { provide: SubtractionService, useValue: spy }
      ]
    });
    subtractionService = TestBed.inject(SubtractionService) as jasmine.SpyObj<SubtractionService>;
    service = TestBed.inject(DivisionBySubtractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('divide(6, 2) should return 3', () => {
    subtractionService.sub.and.returnValues(4, 2, 0);
    expect(service.divide(6, 2)).toEqual(3);
    expect(subtractionService.sub.calls.count())
      .withContext('spy method was called three times')
      .toBe(3);
  });

  it('divide(10, 5) should return 2', () => {
    subtractionService.sub.and.returnValues(5, 0);
    expect(service.divide(10, 5)).toEqual(2);
  });

  it('divide(3.2, 2) should throw error', () => {
    expect(() => service.divide(3.2, 2)).toThrow(new Error('Values are not Integers'));
  });

  it('divide(5, 2.4) should throw error', () => {
    expect(() => service.divide(5, 2.4)).toThrow(new Error('Values are not Integers'));
  });
});
