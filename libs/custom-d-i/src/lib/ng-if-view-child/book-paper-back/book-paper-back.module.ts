import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPaperBackComponent } from './book-paper-back.component';

@NgModule({
  declarations: [BookPaperBackComponent],
  exports: [BookPaperBackComponent],
  imports: [CommonModule],
})
export class BookPaperBackModule {}
