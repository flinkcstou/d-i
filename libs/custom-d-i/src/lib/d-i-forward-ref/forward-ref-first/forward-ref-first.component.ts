import {Component, forwardRef, Inject} from '@angular/core';
import {DIRECTIVE, FIRST} from '../injection-token';

@Component({
  selector: 'd-i-forward-ref-first',
  templateUrl: './forward-ref-first.component.html',
  styleUrls: ['./forward-ref-first.component.scss'],
  providers: [
    {
      provide: FIRST,
      useExisting: forwardRef(() => ForwardRefFirstComponent)
    }
  ]
})
export class ForwardRefFirstComponent {

  constructor(
      // @Inject(DIRECTIVE) private directive: any
  ) {
    // console.error(directive);
  }
}
