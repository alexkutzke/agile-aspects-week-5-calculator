import { TestBed } from '@angular/core/testing';

import { SubService } from './sub.service';

describe('SubService', () => {
  let service: SubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sub(3,3) should return 0', () => {
    expect(service.sub(3,3)).toEqual(0);
  });

  it('sub(10,3) should return 7', () => {
    expect(service.sub(10,3)).toEqual(7);
  });

  it('sub(-3,-10) should return 7', () => {
    expect(service.sub(-3,-10)).toEqual(7);
  });

});
