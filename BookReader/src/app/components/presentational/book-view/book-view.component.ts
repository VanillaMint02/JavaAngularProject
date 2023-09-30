import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Book } from 'src/app/modules/types/books';
@Component({
  standalone:true,
  imports:[MatPaginatorModule],
  selector: 'book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent {
@Input() book!:Book;
@Output()nextPage:EventEmitter<number>=new EventEmitter<number>;
@Output()prevPage:EventEmitter<number>=new EventEmitter<number>;

}
