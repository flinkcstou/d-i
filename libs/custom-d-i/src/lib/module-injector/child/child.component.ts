import {Component} from '@angular/core';
import {Child2Service} from '../child-2/child-2.service';

@Component({
  selector: 'd-i-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  constructor(child2: Child2Service,) {
  }

}
