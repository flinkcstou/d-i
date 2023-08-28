import { Component } from '@angular/core';
import { LeafService } from './services/leaf.service';
import { FlowerService } from './services/flower.service';

@Component({
  selector: 'resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: [ './resolution-modifiers.component.css' ]
})
export class ResolutionModifiersComponent {
  name = 'Angular';
  constructor(public flower: FlowerService, public leaf: LeafService) {}
}
