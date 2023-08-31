import { Directive, ElementRef } from '@angular/core';
import { AbstractBookComponent } from './abstract-book.component';
import { BookLoaderParentDirective } from './book-loader-parent.directive';

@Directive({
  selector: '[bookLoader]'
})
export class BookLoaderDirective {

  constructor(
    private element: ElementRef,
    private bookLoadedParent: BookLoaderParentDirective,
    private sdf: AbstractBookComponent,
  ) {
    this.bookLoadedParent.loaded.emit({component: this.sdf});

  }
}
