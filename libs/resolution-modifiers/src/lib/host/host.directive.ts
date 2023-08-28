import { Directive, Host, Optional } from '@angular/core';
import { FlowerService } from '../services/flower.service';

@Directive(
  {
    selector: 'app-host'
  }
)
export class HostDirective {

  constructor(
    @Host() @Optional() flowerService: FlowerService
  ) {
    console.error(flowerService);
  }
}
