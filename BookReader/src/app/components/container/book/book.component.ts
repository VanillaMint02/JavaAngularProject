import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book, mockBook, mockedBook } from 'src/app/modules/types/books';
import { BookViewComponent } from '../../presentational/book-view/book-view.component';
import { Page } from 'src/app/modules/types/pages';

@Component({
  standalone: true,
  imports: [BookViewComponent],
  selector: 'book',
  template: `<book-view
    [book]="book"
    (prevPage)="onPrevPage(this.book.currentPage!.pageNumber! - 1)"
    (nextPage)="onNextPage(this.book.currentPage!.pageNumber! + 1)"
  ></book-view>`,
})
export class BookComponent {
  book = mockedBook;
  findPageByNumber(pageNumber: number): Page | undefined {
    return this.book.pages!.find((page) => page.pageNumber === pageNumber);
  }
  onPrevPage(pageNumber: number) {
    console.log(pageNumber);
    if (pageNumber < 1) {
      pageNumber = this.book.pages!.length;
    }
    this.book.currentPage = this.findPageByNumber(pageNumber);
  }
  onNextPage(pageNumber: number) {
    console.log(pageNumber);
    if (pageNumber > this.book.pages!.length) {
      pageNumber = 1;
    }
    this.book.currentPage = this.findPageByNumber(pageNumber);
  }
}
