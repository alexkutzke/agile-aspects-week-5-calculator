import { Injectable } from '@angular/core';
import { SumService } from './sum.service';

@Injectable({
  providedIn: 'root'
})
export class MultiplyBySumService {

  constructor(private sumService: SumService) { }

  multiply_unsigned(num1: number, num2: number): number {
    let result = 0;

    for (let i = 0; i < num2; i++) {
      result = this.sumService.sum(result, num1);
    }
    return result;
  }


  multiply(num1: number, num2: number): number {
    if ((num1 >= 0 && num2 >= 0) || (num1 < 0 && num2 < 0)) {
      return this.multiply_unsigned(this.abs(num1), this.abs(num2));
    }
    else {
      return -this.multiply_unsigned(this.abs(num1), this.abs(num2))
    }
  }

  
  abs(num1: number): number {
    if (num1 < 0) {
      return -num1;
    }
    else { return num1; }
  }
}
