import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { BookPaperParentComponent } from '../book-paper-parent/book-paper-parent.component';
import { AbstractBookComponent } from './abstract-book.component';

@Directive({
  selector: '[bookLoader]'
})
export class BookLoaderDirective implements OnInit {


  @Output() loaded = new EventEmitter<any>();

  constructor(
    private element: ElementRef,
    private sdf: AbstractBookComponent,
    private sdfP: BookPaperParentComponent,
  ) {
  }

  ngOnInit() {
    this.loaded.emit({component: this.sdf});
  }
}
