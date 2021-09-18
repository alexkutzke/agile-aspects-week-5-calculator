import { Injectable } from '@angular/core';
import { SubtrationService } from './subtration.service';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  constructor(private subtrationService: SubtrationService) {}

  div(num1: number, num2: number): number {
    let result = 0;

    for (let i = 0; i < num2; i++) {
      result = this.subtrationService.sub(result, num1);
    }
    return result;
  }
}
