import { Component, Host, Optional } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css'],
  viewProviders: [
    {provide: AnimalService, useValue: {emoji: '🐶 inspector 🐶'}}
    // { provide: FlowerService, useValue: { emoji: '🌻 inspector 🌻' } }
  ],
})
export class InspectorComponent {
  constructor(
    public flower: FlowerService,
    public animal: AnimalService,
    @Optional() @Host() public flowerHost: FlowerService,
    @Optional() @Host() public animalhost: AnimalService,
  ) {

  }
}
