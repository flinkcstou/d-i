import { Directive, forwardRef } from '@angular/core';
import { DIRECTIVE } from './injection-token';

@Directive(
  {
    selector: '[forwardRef]',
    providers: [
      {
        provide: DIRECTIVE,
        useExisting: forwardRef(() => ForwardRefDirectiveDirective)
      }
    ]
  }
)
export class ForwardRefDirectiveDirective {


  constructor(
    // @Optional() @Inject(SECOND) private second: any,
  ) {
    // console.error(second);
  }
}
