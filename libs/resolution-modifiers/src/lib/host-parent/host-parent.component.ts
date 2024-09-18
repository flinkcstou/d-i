import {Component} from '@angular/core';
import {FlowerService} from '../services/flower.service';


@Component({
  selector: 'app-host-parent',
  templateUrl: './host-parent.component.html',
  styleUrls: ['./host-parent.component.css'],
  providers: [{provide: FlowerService, useValue: {emoji: '🌺 PARENT 🌺'}}]

})
export class HostParentComponent {

  constructor(public flower: FlowerService) {
  }

}
