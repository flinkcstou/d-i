import {Component, Self, Optional} from '@angular/core';
import {LeafService} from '../services/leaf.service';
import {FlowerService} from '../services/flower.service';

@Component({
  selector: 'app-self-no-data',
  templateUrl: './self-no-data.component.html',
  styleUrls: ['./self-no-data.component.css']
})
export class SelfNoDataComponent {
  constructor(
      public flower: FlowerService,
      @Self() @Optional() public leaf?: LeafService
  ) {
  }
}


// The app doesn't break because the value being available at self is optional.
// If you remove @Optional(), the app breaks.

