import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  template: `
    <h1 mat-dialog-title>Filter</h1>
    <div mat-dialog-content>
    <mat-form-field appearance="fill">
      <mat-label>Válassz egy Filtert</mat-label>
      <mat-select [(ngModel)]="selectedValue" name="food">
        <mat-option *ngFor="let filter of filters" [value]="filter">{{filter}}</mat-option>
      </mat-select>
    </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button color="accent" [mat-dialog-close]="selectedValue" cdkFocusInitial>Create</button>
      <button mat-button (click)="onNoClick()">Cancel</button>
    </div>
  `,
  styles: [
  ]
})
export class FilterDialogComponent implements OnInit {

  selectedValue?: string;
  filters: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.filters = Object.values(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
    
  }

}
