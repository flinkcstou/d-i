import {Directive, Host, NgModule, Optional} from '@angular/core';
import {FlowerService} from './services/flower.service';
import {AnimalService} from './services/animal.service';

@Directive({
  selector: '[inspertor]',
})
export class InspertorDirective {

  constructor(
      @Optional() @Host() public flowerHost: FlowerService,
      @Optional() @Host() public animalhost: AnimalService,
  ) {
    // console.error('Emoji from FlowerService host: ', flowerHost?.emoji);
    // console.error('Emoji from AnimalService host: ', animalhost?.emoji);
  }
}

@NgModule({
  exports: [InspertorDirective],
  declarations: [InspertorDirective]
})
export class InstertorDirectiveModule {

}
