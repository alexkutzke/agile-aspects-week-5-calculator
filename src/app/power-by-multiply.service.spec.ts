import { TestBed } from '@angular/core/testing';

import { PowerByMultiplyService } from './power-by-multiply.service';
import { MultiplyBySumService } from './multiply-by-sum.service';

describe('PowerByMultiplyService', () => {
  let multiplyBySumSpy: jasmine.SpyObj<MultiplyBySumService>;
  let powerByMultiplyService: PowerByMultiplyService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MultiplierBySumService', ['multiply']);

    TestBed.configureTestingModule({
      providers: [
        PowerByMultiplyService,
        { provide: MultiplyBySumService, useValue: spy }
      ]
    });
    multiplyBySumSpy = TestBed.inject(MultiplyBySumService) as jasmine.SpyObj<MultiplyBySumService>;
    powerByMultiplyService = TestBed.inject(PowerByMultiplyService);
  });

  it('should be created', () => {
    expect(powerByMultiplyService).toBeTruthy();
  });
  
  it('power(2,3) should return 8', () => {
    multiplyBySumSpy.multiply.and.returnValues(2,4,8);
    expect(powerByMultiplyService.power(2,3)).toEqual(8);
  });
});
