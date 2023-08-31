import { Component } from '@angular/core';
import { AbstractBookComponent } from '../services/abstract-book.component';

@Component({
  selector: 'd-i-book-paper-parent',
  templateUrl: './book-paper-parent.component.html',
  styleUrls: ['./book-paper-parent.component.scss'],
})
export class BookPaperParentComponent {

  show = true;


  loaded(event: { component: AbstractBookComponent }) {
    console.error(event);

  }
}
