import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor() { }

  sub(num3: number, num4: number) : number {
    return(num3 - num4);
  }
}
