import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { FilterDialogComponent } from '../dialogs/filter-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import { JeloltClass } from '../jelolt.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() jeloltek?: any[];
  @Output() appliedFilters = new EventEmitter();

  filters = new FormGroup({});
  filtersList: string[] = [];
  avaibleFiltersList = Object.keys(new JeloltClass());
  optionsList: any = {};

  constructor(public dialog: MatDialog) { }

  openBoardDialog(list: string[]): void {
    // console.log(list);
    
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '400px',
      data: { ...list }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log(result);
        this.filtersList.push(result);
        this.avaibleFiltersList.splice(this.avaibleFiltersList.indexOf(result), 1);
        // console.log(this.jeloltek);
        this.optionsList[result] = this.getFieldsForFilter(result);
        // console.log(this.optionsList);
        this.filters.addControl(result, new FormControl());
        console.log(this.filters);
        
      }
    });
  }

  getFieldsForFilter(column: string){
    let fields: string[] = [];
    for (let row of this.jeloltek!){
      if (fields.indexOf(row[column]) === -1) {
        fields.push(row[column]);
      }
    }
    // console.log(fields);
    
    return fields;
  }

  callingFunction() {
    // console.log(this.filters.value);
    this.appliedFilters.emit(this.filters.value);
    
  }

  resetFilters() {
    
  }

}
