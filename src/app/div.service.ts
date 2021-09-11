import { Injectable } from '@angular/core';
import { SubService } from './sub.service';

@Injectable({
  providedIn: 'root'
})
export class DivService {

  constructor(private subService: SubService) { }

  div(num1: number, num2: number): number {
    let result = num1;
    let contagem = 1;

    do{
      result = this.subService.sub(result, num2)
      contagem = contagem=contagem+1;
    }
    while(result>num2)
    return contagem;
  }

}