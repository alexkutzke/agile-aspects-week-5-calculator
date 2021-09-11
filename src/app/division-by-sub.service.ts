import { Injectable } from '@angular/core';
import { SubService } from './sub.service';

@Injectable({
  providedIn: 'root',
})
export class DivisionBySubService {
  constructor(private subService: SubService) {}

  division(num1: number, num2: number): number {
    let remainder = num1;
    let result = 0;   

    while (remainder >= num2) {
      remainder = this.subService.sub(remainder, num2);
      result++;
    }

    return result;
  }
}
