import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { JeloltClass } from '../jelolt.model';
import { JeloltService } from '../jelolt.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-jeloltek',
  templateUrl: './jeloltek.component.html',
  styleUrls: ['./jeloltek.component.scss']
})
export class JeloltekComponent implements OnInit, AfterViewInit {

  jeloltek: any[] = [];
  headers:string[] =  Object.keys(new JeloltClass());
  filters: string[] = [];
  jeloltIds:any = {};
  
  dataSource = new MatTableDataSource(this.jeloltek);

  @ViewChild(MatPaginator, {static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true }) sort!: MatSort;

  ngAfterViewInit(): void {
    // this.dataSource.filterPredicate = this.createFilter();
      this.dataSource.paginator = this.paginator;
  }

  constructor(
    private jeloltService: JeloltService, 
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.jeloltService.getJelolts().subscribe(snapshot => {
      this.jeloltek = [];
      snapshot.forEach(doc => {
        const data: any = doc.data();
        this.jeloltek.push(data);
        this.jeloltIds[data[this.headers[0]]] = doc.id;
      });
      this.dataSource.data = this.jeloltek;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.jeloltIds);
      
    });
    // console.log();
    const viewParams = this.activatedRoute.snapshot.queryParamMap.getAll('view');
    this.headers = viewParams.length === 0 ? Object.keys(new JeloltClass()) : viewParams;
    // console.log(this.activatedRoute.snapshot.queryParamMap.getAll('view'));
    
    
  }

  onColumnsChanged(columns: string[]){
    this.headers = columns;
    // columns.forEach(column => )
    const queryParams: Params = { 'view': columns}
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams, 
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }
  onFiltersChanged(filters: any){
    // console.log(filters);
    const queryParams: Params = { ...filters };
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams, 
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
    console.log(this.router.getCurrentNavigation()?.extractedUrl.queryParams);
    
  }



}
