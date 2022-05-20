import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { JeloltClass } from '../jelolt.model';
import { JeloltService } from '../jelolt.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FilterDialogComponent } from '../dialogs/filter-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-jeloltek',
  templateUrl: './jeloltek.component.html',
  styleUrls: ['./jeloltek.component.scss']
})
export class JeloltekComponent implements OnInit, AfterViewInit {

  jeloltek: any[] = [];
  headers:string[] = Object.keys(new JeloltClass());
  filters: string[] = [];
  
  dataSource = new MatTableDataSource(this.jeloltek);

  @ViewChild(MatPaginator, {static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true }) sort!: MatSort;

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

  constructor(private jeloltService: JeloltService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.jeloltService.getJelolts().subscribe(snapshot => {
      this.jeloltek = [];
      snapshot.forEach(doc => this.jeloltek.push(doc.data()));
      this.dataSource.data = this.jeloltek;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onColumnsChanged(columns: string[]){
    this.headers = columns;
  }

  openBoardDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '400px',
      data: { }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filters.push(result);
        console.log(this.filters);
        
      }
    });
  }

}
