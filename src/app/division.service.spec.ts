import { TestBed } from '@angular/core/testing';

import { DivisionService } from './division.service';
import { SubtrationService } from './subtration.service';

describe('DivisionService', () => {
  let divService: DivisionService;
  let spySubtration: jasmine.SpyObj<SubtrationService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['sub']);

    TestBed.configureTestingModule({
      providers: [
        DivisionService,
        { provide: SubtrationService, useValue: spy },
      ],
    });

    divService = TestBed.inject(DivisionService);
    spySubtration = TestBed.inject(
      SubtrationService
    ) as jasmine.SpyObj<SubtrationService>;
  });

  it('divide(10,2) should return 5', () => {
    spySubtration.sub.and.returnValues(3, 5);
    expect(divService.div(3, 2)).toEqual(15);
  });
});
