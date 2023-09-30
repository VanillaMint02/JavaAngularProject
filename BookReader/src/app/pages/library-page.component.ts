import { Component, OnInit } from '@angular/core';
import { GenericFormComponent } from '../components/container/generic-form/generic-form.component';
import { InputComponent } from '../components/container/input/input.component';
import { GenericTableComponent } from '../components/presentational/generic-table/generic-table.component';
import { Book, mockBook } from '../modules/types/books';
import { BooksTable, booksTableHeader } from '../modules/types/interface-types/books-table';
import { BookService } from '../services/books-service';
@Component({
  selector: 'library',
  imports: [InputComponent, GenericFormComponent, GenericTableComponent],
  standalone: true,
  providers:[BookService],
  template: `<generic-table
  [tableHeader]="tableHeader"
  [tableDataSource]="booksTable"
  >
  </generic-table>`,
})
export class LibraryPageComponent implements OnInit {

  bookList: Book[]=mockBook;
  booksTable: BooksTable[]=[];
  tableHeader!:[string,string][];
  tableHeaderNames!:Object;
  constructor(private bookService:BookService){

  }
  ngOnInit(): void {
    
    this.tableHeader=booksTableHeader;
    this.bookList.forEach((book) => {
      this.booksTable.push(
        ({
          id:book.id,
          title: book.title,
          authors: this.bookService.convertAuthorsToString(book.authors!),
          pagesNumber: book.pageNumber?.toString(),
          currentPage: book.currentPage!.pageNumber!.toString(),
          bookFinished: book.bookFinished!.toString(),
          genres:book.genres,
        })
      );
    });    
  }
}
