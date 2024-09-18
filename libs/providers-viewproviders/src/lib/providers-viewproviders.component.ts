import {Component} from '@angular/core';
import {FlowerService} from './services/flower.service';
import {AnimalService} from './services/animal.service';


@Component({
  selector: 'providers-viewproviders',
  templateUrl: './providers-viewproviders.component.html',
  styleUrls: ['./providers-viewproviders.component.css']
})
export class ProvidersViewprovidersComponent {
  constructor(public flower: FlowerService, public animal: AnimalService) {
  }
}

// When using @Host() together with @SkipSelf() in
// child-2.component.ts for the AnimalService, add the
// following viewProviders array to the @Component metadata:

// viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]

// So, the entire Child2Component @Component() decorator and its
// metadata should be as follows:

// @Component({
//   selector: 'app-root',
//   templateUrl: './providers-viewproviders.component.html',
//   styleUrls: [ './providers-viewproviders.component.css' ],
//   viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]
// })
