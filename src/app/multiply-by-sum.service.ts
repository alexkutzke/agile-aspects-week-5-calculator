import { Injectable } from '@angular/core';
import { SumService } from './sum.service';

@Injectable({
  providedIn: 'root'
})
export class MultiplyBySumService {

  constructor(private sumService: SumService) { }

  multiply(num1: number, num2: number): number {
    let result = 0;
    let absNum1 = Math.abs(num1);
    let absNum2 = Math.abs(num2);

    for (let i = 0; i < absNum2; i++) {
      result = this.sumService.sum(result, absNum1);        
    }

    if (num1 < 0 && num2 < 0) {
      return result;
    } else if (num1 < 0 || num2 < 0) {
      return -result;
    } else {
      return result;
    }
  }
}
