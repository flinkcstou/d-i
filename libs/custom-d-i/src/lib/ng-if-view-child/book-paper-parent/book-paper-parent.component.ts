import { Component, Injector, OnInit, Optional, ViewContainerRef } from '@angular/core';
import { AbstractBookComponent } from '../services/abstract-book.component';
import { BookPaperGrandComponent } from '../book-paper-grand/book-paper-grand.component';

@Component({
  selector: 'd-i-book-paper-parent',
  templateUrl: './book-paper-parent.component.html',
  styleUrls: ['./book-paper-parent.component.scss'],
})
export class BookPaperParentComponent implements OnInit {

  show = true;

  constructor(private vcr: ViewContainerRef,
              public injector: Injector,
              @Optional() public bookGrand: BookPaperGrandComponent,
  ) {
  }

  ngOnInit(): void {
  }
  
  loaded(event: { component: AbstractBookComponent }) {
    console.error('loaded:', event);

  }
}
