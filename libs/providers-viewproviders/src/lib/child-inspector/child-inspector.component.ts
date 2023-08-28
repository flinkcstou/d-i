import { Component, Host, Optional } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { AnimalService } from '../services/animal.service';

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
  ) {

  }


}
