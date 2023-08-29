import { Component } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // provide services
  providers: [
    {provide: FlowerService, useValue: {emoji: '🌻 child 🌻'}},
    {provide: AnimalService, useValue: {emoji: '🐶 child 🐶'}}
  ],
  viewProviders: [
    {provide: FlowerService, useValue: {emoji: '🌻 child 🌻'}},
    {provide: AnimalService, useValue: {emoji: '🐶 child 🐶'}}
  ]
})

export class ChildComponent {
  // inject service
  constructor(public flower: FlowerService, public animal: AnimalService) {
  }

  // viewProviders ensures that only the view gets to see this.
  // With the AnimalService in the viewProviders, the
  // InspectorComponent doesn't get to see it because the
  // inspector is in the content.


  // constructor( public flower: FlowerService, @Optional() @Host()  public animal?: AnimalService) { }

// Comment out the above constructor and alternately
// uncomment the two following constructors to see the
// effects of @Host() and @Host() + @SkipSelf().

// constructor(
//     @Host() public animal : AnimalService,
//     @Host() @Optional() public flower ?: FlowerService) { }

// constructor(
//     @SkipSelf() @Host() public animal : AnimalService,
//     @SkipSelf() @Host() @Optional() public flower ?: FlowerService) { }

}

