import { Injectable } from '@angular/core';
import { SubService } from './sub.service';

@Injectable({
  providedIn: 'root'
})

export class DivBySubService {

  constructor(private subService: SubService) { }

  divide(num1: number, num2: number): number {
    let divisorInteiro = 0;
    let absNum1 = Math.abs(num1);
    let absNum2 = Math.abs(num2);
    
    for (let resto = absNum1; resto >= absNum2; ) {
      resto = this.subService.sub(resto, absNum2);
      divisorInteiro++;
    }

    if (num1 < 0 && num2 < 0) {
      return divisorInteiro;
    } else if (num1 < 0 || num2 < 0) {
      return -divisorInteiro;
    } else {
      return divisorInteiro;
    }
    
  }
}
