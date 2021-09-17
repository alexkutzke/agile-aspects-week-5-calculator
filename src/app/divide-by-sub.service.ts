import { Injectable } from '@angular/core';
import { SubtractionService } from './subtraction.service';
@Injectable({
  providedIn: 'root'
})
export class DivideBySubService {

  constructor(private subService: SubtractionService) { }

  divide(num1: number, num2: number): number {
    let result = num1; 

    for (let i = 0; i < num2; i++) {
      result = this.subService.subtraction(result, num2);        
    }

    return result;
  }
}
