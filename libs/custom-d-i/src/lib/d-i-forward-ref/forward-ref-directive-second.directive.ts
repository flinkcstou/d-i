import { Directive, Host, Inject, Optional } from '@angular/core';
import { DIRECTIVE, DIRECTIVE_SECOND } from './injection-token';

@Directive(
  {
    selector: '[forwardRefSecond]',
    providers: [
      {
        provide: DIRECTIVE_SECOND,
        useExisting: ForwardRefDirectiveSecondDirective
      }
    ]
  }
)
export class ForwardRefDirectiveSecondDirective {


  constructor(
    // @Optional() @Inject(SECOND) private second: any,

    @Inject(DIRECTIVE) @Optional() @Host() public directive: any
  ) {
    console.error(directive);
  }
}
