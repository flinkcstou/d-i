import {Component} from '@angular/core';
import {CustomDIService} from './custom-d-i.service';
import {GrandService} from '../grand/grand.service';
import {ParentService} from '../parent/parent.service';
import {ChildService} from '../child/child.service';

@Component({
  selector: 'd-i-custom-d-i',
  templateUrl: './custom-d-i.component.html',
  styleUrls: ['./custom-d-i.component.scss'],
  providers: []
})
export class CustomDIComponent {

  constructor(
      private customDi: CustomDIService,
      private grand: GrandService,
      private parent: ParentService,
      private child: ChildService,
  ) {
  }
}
