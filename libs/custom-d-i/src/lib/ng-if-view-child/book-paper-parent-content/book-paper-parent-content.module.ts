import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookPaperParentContentComponent} from './book-paper-parent-content.component';
import {BookPaperParentModule} from '@d-i/custom-d-i';

@NgModule({
  declarations: [BookPaperParentContentComponent],
  exports: [BookPaperParentContentComponent],
  imports: [CommonModule, BookPaperParentModule],
})
export class BookPaperParentContentModule {
}
