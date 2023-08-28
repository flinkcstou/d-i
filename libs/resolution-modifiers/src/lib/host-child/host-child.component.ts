import { Component, Host, Optional } from '@angular/core';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-host-child',
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.css']
})
export class HostChildComponent {
  constructor(
    public flower: FlowerService,
    @Host() @Optional() public flowerHost: FlowerService
  ) {
  }
}
