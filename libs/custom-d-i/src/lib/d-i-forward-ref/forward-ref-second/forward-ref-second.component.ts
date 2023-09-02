import { Component, forwardRef, Inject } from '@angular/core';
import { DIRECTIVE, SECOND } from '../injection-token';

@Component({
  selector: 'd-i-forward-ref-second',
  templateUrl: './forward-ref-second.component.html',
  styleUrls: ['./forward-ref-second.component.scss'],
  providers: [
    {
      provide: SECOND,
      useExisting: forwardRef(() => ForwardRefSecondComponent)
    }
  ]
})
export class ForwardRefSecondComponent {

  constructor(
    @Inject(DIRECTIVE) private directive: any,
  ) {
    // console.error(directive);
  }
}
