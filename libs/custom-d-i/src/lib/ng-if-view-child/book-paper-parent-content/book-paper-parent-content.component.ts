import {
  AfterViewInit,
  Component,
  ContentChild,
  Injector,
  OnInit,
  Optional,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { BookPaperGrandComponent } from '../book-paper-grand/book-paper-grand.component';
import { AbstractBookComponent } from '../services/abstract-book.component';
import { BookLoaderParentDirective } from '../services/book-loader-parent.directive';

@Component({
  selector: 'd-i-book-paper-parent-content',
  templateUrl: './book-paper-parent-content.component.html',
  styleUrls: ['./book-paper-parent-content.component.scss'],
})
export class BookPaperParentContentComponent implements OnInit, AfterViewInit {

  @ViewChild('template') templateRef?: TemplateRef<any>;
  @ViewChild('container', {read: ViewContainerRef, static: true}) containerRef?: ViewContainerRef;
  @ContentChild('template') contentRef: TemplateRef<any>;
  @ViewChild(BookLoaderParentDirective) bookParentDirective: BookLoaderParentDirective;

  constructor(private vcr: ViewContainerRef,
              public injector: Injector,
              @Optional() public bookGrand: BookPaperGrandComponent,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.containerRef?.createEmbeddedView(this.contentRef, {}, {
    //   index: 0,
    //   injector: this.bookParentDirective.injector
    // });
  }


  loaded(event: { component: AbstractBookComponent }) {
    console.error('loaded:', event);
  }

}
