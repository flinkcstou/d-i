import { Component, forwardRef } from '@angular/core';
import { AbstractBookComponent } from '../services/abstract-book.component';

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
export class BookPaperBackComponent extends AbstractBookComponent {

}
