import {Component, Inject} from '@angular/core';
import {A_SERVICE} from '../custom-d-i/injection-token';

@Component({
  selector: 'd-i-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent {

  constructor(@Inject(A_SERVICE) a: string) {
    console.error(a);
  }

}
