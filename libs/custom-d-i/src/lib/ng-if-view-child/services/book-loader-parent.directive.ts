import { Directive, EventEmitter, Injector, Output } from '@angular/core';

@Directive({
  selector: '[bookLoaderParent]',
  exportAs: 'bookLoaderParent'
})
export class BookLoaderParentDirective {


  @Output() loaded = new EventEmitter<any>();

  sdf = 'sdf';

  constructor(public injector: Injector) {
  }

}
