import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Book } from 'src/app/modules/types/books';
import { BooksTable } from 'src/app/modules/types/interface-types/books-table';

@Component({
  standalone: true,
  imports: [ CommonModule,MatTableModule,],
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.tableDataSource);
  }
  @Input() tableHeader!: string[];
  @Input() tableDataSource!: BooksTable[];

  
}
