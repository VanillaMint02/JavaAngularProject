import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule],
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnInit {
  @Input() tableHeader!: [string, string][];
  @Input() tableDataSource!: Object[];
  @Output() onRowClick!: EventEmitter<void>;
  headerKeys!: string[];
  headerNames!: string;

  ngOnInit(): void {
    this.headerKeys = [];
    this.tableHeader.forEach((key) => {
      this.headerKeys.push(key[0]);
    });
    this.headerKeys.forEach((key) => {
      if (!this.tableDataSource[0].hasOwnProperty(key)) {
        throw new Error(
          'the table header must contain all the keys to be displayed, and the keys must belong to the tableDataSource'
        );
      }
    });
  }
  findHeaderName(headerKey: string): string {
    const keyIndex = this.headerKeys.indexOf(headerKey);
    return this.tableHeader[keyIndex][1];
  }
}
