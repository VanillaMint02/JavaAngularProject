import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  imports: [ CommonModule,MatTableModule,],
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnInit {
 
  @Input() tableHeader!: [string,string][];
  @Input() tableDataSource!: Object[];
  @Output() onRowClick!:EventEmitter<void> 
  headerKeys!:string[];
  headerNames!:string;

  ngOnInit(): void {
    this.headerKeys=[];
    this.tableHeader.forEach(key=>{this.headerKeys.push(key[0])});
    console.log(this.tableDataSource);
  }
  findHeaderName( headerKey:string):string{
    const keyIndex=this.headerKeys.indexOf(headerKey)
    return this.tableHeader[keyIndex][1];
  }
  
  

 
}
