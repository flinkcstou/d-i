import { Component, Host, Optional } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css'],
  providers: [
    {provide: FlowerService, useValue: {emoji: '🌻 inspector 🌻'}}
  ],
  viewProviders: [
    {provide: AnimalService, useValue: {emoji: '🐶 child 🐶'}}
  ]
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
