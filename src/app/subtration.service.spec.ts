import { TestBed } from '@angular/core/testing';

import { SubtrationService } from './subtration.service';

describe('SubtrationService', () => {
  let service: SubtrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sub(10 - 5) return 5', () => {
    const result = service.sub(10, 5);
    expect(result).toEqual(5);
  });

  it('should sub(50 - 15) return 35', () => {
    const result = service.sub(50, 15);
    expect(result).toEqual(35);
  });
});
