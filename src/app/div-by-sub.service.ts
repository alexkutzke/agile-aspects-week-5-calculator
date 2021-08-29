import { Injectable } from '@angular/core';
import { SubService } from './sub.service';

@Injectable({
  providedIn: 'root'
})
export class DivBySubService {

  
  constructor(private subService: SubService) { }

  div(num3: number, num4: number): number {
    let result = num3;
    let contagem = 1;
    
    do{
      result = this.subService.sub(result, num4)
      contagem = contagem=contagem+1;
    }while(result>num4)


    return contagem;
  }

}
