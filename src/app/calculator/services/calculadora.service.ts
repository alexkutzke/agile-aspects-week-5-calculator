import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  somar(numero1: number, numero2: number): number {
    let resultado: number;
    resultado = numero1 + numero2;
    return resultado;
    }

    subtrair(numero1: number, numero2: number): number {
      let resultado: number;
      resultado = numero1 - numero2;
      return resultado;
    }

    dividir(numero1: number, numero2: number):number {
      let resultado: number;
      resultado = numero1 / numero2;
      return resultado
    }

    multiplicacao(numero1: number, numero2:number): number{
      let resultado : number;
      resultado = numero1 * numero2
      return resultado;
    }
  constructor() { }
}
