import {Directive} from '@angular/core';
import {DIRECTIVE} from './injection-token';

@Directive(
    {
      selector: '[forwardRef]',
      providers: [
        {
          provide: DIRECTIVE,
          useExisting: ForwardRefDirectiveDirective
        }
      ]
    }
)
export class ForwardRefDirectiveDirective {


  constructor(
      // @Optional() @Inject(SECOND) private second: any,
      // @Inject(DIRECTIVE_SECOND) @Optional() @Host() public directive: any
  ) {
    // console.error(directive);
    // console.error(second);
  }
}
