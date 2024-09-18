import {Component, Host, Optional, SkipSelf} from '@angular/core';
import {FlowerService} from '../services/flower.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  //  provide the service
  providers: [{provide: FlowerService, useValue: {emoji: '🌷 HOST 🌷'}}]
})
export class HostComponent {
  // use @Host() in the constructor when injecting the service
  constructor(
      @Optional() @Host() public flower?: FlowerService,
      @Optional() @SkipSelf() public flowerskip?: FlowerService,
      @Optional() @Host() @SkipSelf() public flowerskipHost?: FlowerService,
  ) {
  }

}

// if you take out @Host() and the providers array, flower will be red hibiscus


