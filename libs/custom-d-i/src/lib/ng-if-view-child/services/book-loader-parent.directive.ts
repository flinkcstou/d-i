import { Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[bookLoaderParent]'
})
export class BookLoaderParentDirective {


  @Output() loaded = new EventEmitter<any>();

  constructor() {
  }

}
