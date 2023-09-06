import { Component, Host, Optional } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { AnimalService } from '../services/animal.service';
import { InspertorDirective } from '../inspertor.directive';

@Component({
  selector: 'd-i-child-inspector',
  templateUrl: './child-inspector.component.html',
  styleUrls: ['./child-inspector.component.scss'],
})
export class ChildInspectorComponent {

  constructor(
    public flower: FlowerService,
    public animal: AnimalService,
    @Optional() @Host() public flowerHost: FlowerService,
    @Optional() @Host() public animalhost: AnimalService,
    private inspertor:InspertorDirective,
  ) {
    // console.error(inspertor.animalhost === animalhost)
    // console.error(inspertor.flowerHost === flowerHost)


  }


}
