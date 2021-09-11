import { TestBed } from '@angular/core/testing';
import { SubService } from './sub.service';
import { DivisionBySubService } from './division-by-sub.service';

describe('DivisionBySubService', () => {
  let service: DivisionBySubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionBySubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('division(10,5) should return 2', () => {
    expect(service.division(10,5)).toEqual(2);
  });

  it('division(50,5) should return 10', () => {
    const divService = new DivisionBySubService(new SubService());
    expect(divService.division(50,5)).toEqual(10);
  })

  it('division(36,12) should return 3', () => {
      const divService = new DivisionBySubService(new SubService());
      expect(divService.division(36,12)).toEqual(3);
  })
});
