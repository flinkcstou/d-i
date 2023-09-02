import { Injectable } from '@angular/core';
import { IFactoryPatternMenu } from './abstract-factory-pattern.service';

@Injectable()
export class PizzaService implements IFactoryPatternMenu{
  get(): any[] {
    return [
      'Pepperoni',
      'Mazzarella'
    ];
  }


}
