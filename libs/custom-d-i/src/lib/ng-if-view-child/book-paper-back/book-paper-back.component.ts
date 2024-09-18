import {Component, forwardRef, OnInit, Optional} from '@angular/core';
import {AbstractBookComponent} from '../services/abstract-book.component';
import {BookPaperGrandComponent} from '../book-paper-grand/book-paper-grand.component';

@Component({
  selector: 'd-i-book-paper-back',
  templateUrl: './book-paper-back.component.html',
  styleUrls: ['./book-paper-back.component.scss'],
  providers: [
    {
      provide: AbstractBookComponent,
      useExisting: forwardRef(() => BookPaperBackComponent)
    }
  ]
})
export class BookPaperBackComponent extends AbstractBookComponent implements OnInit {

  constructor(@Optional() private asdfGrand: BookPaperGrandComponent,
  ) {
    super();

    console.error(asdfGrand);
  }

  ngOnInit(): void {
  }


}
