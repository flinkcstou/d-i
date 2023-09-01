import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPaperGrandComponent } from './book-paper-grand.component';

@NgModule({
  declarations: [BookPaperGrandComponent],
  exports: [BookPaperGrandComponent],
  imports: [CommonModule],
})
export class BookPaperGrandModule {
}
