import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPaperParentComponent } from './book-paper-parent.component';
import { BookLoaderDirective } from '../services/book-loader.directive';
import { BookPaperBackModule } from '../book-paper-back/book-paper-back.module';

@NgModule({
  declarations: [
    BookPaperParentComponent,
    BookLoaderDirective],
  imports: [CommonModule, BookPaperBackModule],
  exports: [
    BookPaperParentComponent
  ]
})
export class BookPaperParentModule {
}
