import { Injectable } from '@angular/core';
import {MultiplyBySumService} from './multiply-by-sum.service';

@Injectable({
  providedIn: 'root'
})
export class PowerByMultiplyService {

  constructor(private multiplyBySumService: MultiplyBySumService) { }

  power(num1: number, num2: number): number {
    let result = 1;

    for (let i = 0; i < num2; i++) {
      result = this.multiplyBySumService.multiply(result, num1);        
    }

    return result;
  }

}
