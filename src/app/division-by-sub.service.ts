import { Injectable } from '@angular/core';
import { SubService } from './sub.service';

@Injectable({
  providedIn: 'root',
})
export class DivisionBySubService {
  constructor(private subService: SubService) {}

  division(num1: number, num2: number): number {
    let result = 0;

    for (let i = 0; i < num2; i++) {
      result = this.subService.sub(result, num1);        
    }

    return result;
  }
}
