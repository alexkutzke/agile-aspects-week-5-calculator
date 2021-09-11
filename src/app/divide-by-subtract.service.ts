import { Injectable } from '@angular/core';
import { SubtractService } from './subtract.service';

@Injectable({
  providedIn: 'root'
})
export class DivideBySubtractService {

  constructor(private subtractService: SubtractService) { }

  divide(num1: number, num2: number) : number {
    let result = 0;
    let subResult = num1;

    while(subResult >= num2) {
      subResult = this.subtractService.subtract(subResult, num2);
      result++;
    }

    return result;
  }
}
