import { TestBed } from '@angular/core/testing';

import { DivBySubService } from './div-by-sub.service';

describe('DivBySubService', () => {
  let service: DivBySubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivBySubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('divide(3,3) should return 1', () => {
    expect(service.divide(3,3)).toEqual(1);
  });

  it('divide(5,3) should return 1', () => {
    expect(service.divide(5,3)).toEqual(1);
  });

  it('divide(6,3) should return 2', () => {
    expect(service.divide(6,3)).toEqual(2);
  });

  it('divide(7,3) should return 2', () => {
    expect(service.divide(7,3)).toEqual(2);
  });
 
  it('divide(-7,3) should return -2', () => {
    expect(service.divide(-7,3)).toEqual(-2);
  });

  it('divide(-7,-3) should return 2', () => {
    expect(service.divide(-7,-3)).toEqual(2);
  });

});
