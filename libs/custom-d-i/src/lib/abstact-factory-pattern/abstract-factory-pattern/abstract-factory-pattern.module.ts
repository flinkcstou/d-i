import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastaService } from './pasta.service';
import { PizzaService } from './pizza.service';
import { AbstractFactoryPatternService } from './abstract-factory-pattern.service';
import { AbstractFactoryPatternComponent } from './abstract-factory-pattern.component';

@NgModule({
  declarations: [AbstractFactoryPatternComponent],
  exports: [AbstractFactoryPatternComponent],
  imports: [CommonModule],
  providers:[
    PastaService,
    PizzaService,
    AbstractFactoryPatternService
  ]
})
export class AbstractFactoryPatternModule {}
