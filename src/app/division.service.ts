import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  constructor() {}

  divide(num1: number, num2: number): number {
    return Math.round(num1 / num2);
  }
}
