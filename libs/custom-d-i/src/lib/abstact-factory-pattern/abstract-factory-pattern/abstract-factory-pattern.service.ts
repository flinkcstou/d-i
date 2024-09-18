import {Injectable, Injector, Type} from '@angular/core';
import {PastaService} from './pasta.service';
import {PizzaService} from './pizza.service';


export enum FactoryPatternMenuEnum {
  PIZZA = 'PIZZA',
  PASTA = 'PASTA'
}

export interface IFactoryPatternMenu {
  get(): any[];
}

@Injectable()
export class AbstractFactoryPatternService {

  factoryMap: Map<FactoryPatternMenuEnum, Type<IFactoryPatternMenu>> = new Map<FactoryPatternMenuEnum, Type<IFactoryPatternMenu>>();


  constructor(private injector: Injector) {

    this.factoryMap.set(FactoryPatternMenuEnum.PASTA, PastaService);
    this.factoryMap.set(FactoryPatternMenuEnum.PIZZA, PizzaService);
  }

  get(value: FactoryPatternMenuEnum): IFactoryPatternMenu {
    const clazz = this.factoryMap.get(value);
    return this.injector.get(clazz);
  }


}
