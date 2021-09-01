import { TestBed } from '@angular/core/testing';

import { DivisionBySubService } from './division-by-sub.service';
import { SubService } from './sub.service';

describe('DivisionBySubService', () => {
  let subServiceSpy: jasmine.SpyObj<SubService>;
  let divisionBySubService: DivisionBySubService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SubService', ['sub']);

    TestBed.configureTestingModule({
      providers: [DivisionBySubService, { provide: SubService, useValue: spy }],
    });
    subServiceSpy = TestBed.inject(SubService) as jasmine.SpyObj<SubService>;
    divisionBySubService = TestBed.inject(DivisionBySubService);
  });

  it('should be created', () => {
    expect(divisionBySubService).toBeTruthy();
  });

  it('division(9,3) should return 3', () => {
    subServiceSpy.sub.and.returnValues(9, 6, 3);
    expect(divisionBySubService.division(9, 3)).toEqual(3);
    expect(subServiceSpy.sub.calls.count()).toEqual(3);
  });

  it('division(100,10) should return 10', () => {
    subServiceSpy.sub.and.returnValues(100, 90, 80, 70, 60, 50, 40, 30, 20, 10);
    expect(divisionBySubService.division(100, 10)).toEqual(10);
    expect(subServiceSpy.sub.calls.count()).toEqual(10);
  });
});
