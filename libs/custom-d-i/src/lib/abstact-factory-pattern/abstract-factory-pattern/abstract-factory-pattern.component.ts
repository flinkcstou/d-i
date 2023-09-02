import { Component } from '@angular/core';
import { AbstractFactoryPatternService, FactoryPatternMenuEnum } from './abstract-factory-pattern.service';

@Component({
  selector: 'd-i-abstract-factory-pattern',
  templateUrl: './abstract-factory-pattern.component.html',
  styleUrls: ['./abstract-factory-pattern.component.scss'],
})
export class AbstractFactoryPatternComponent {
// https://medium.com/@rjlopezdev/angular-tips-combine-abstract-factory-pattern-injector-to-inject-a-service-depends-on-f0787c6a7390

  constructor(private factoryPatternService: AbstractFactoryPatternService,
  ) {
    const factoryPatternMenu = factoryPatternService.get(FactoryPatternMenuEnum.PIZZA);
    console.error('factoryPatternMenu', factoryPatternMenu);
  }
}
