import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumService } from './sum.service';
import { MultiplyBySumService } from './multiply-by-sum.service';
import { PowerByMultiplyService } from './power-by-multiply.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { SubtractionService } from './subtraction.service';
import { DivisionService } from './division.service';

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
    DivisionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
