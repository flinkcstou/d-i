import { Component } from '@angular/core';
import { Child2Service } from './child-2.service';

@Component({
  selector: 'd-i-child-2',
  templateUrl: './child-2.component.html',
  styleUrls: ['./child-2.component.scss'],
  providers: [Child2Service]
})
export class Child2Component {


  constructor(child: Child2Service
  ) {
  }
}
