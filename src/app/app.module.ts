import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumService } from './sum.service';
import { MultiplyBySumService } from './multiply-by-sum.service';
import { PowerByMultiplyService } from './power-by-multiply.service';
import { SubtractionService } from './subtraction.service';
import { DivisionBySubtractionService } from './division-by-subtraction.service';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SumService,
    MultiplyBySumService,
    PowerByMultiplyService,
    SubtractionService,
    DivisionBySubtractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
