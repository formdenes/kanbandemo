import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  template: `
    <h1 mat-dialog-title>Filter</h1>
    <div mat-dialog-content>
    <p>Válassz egy mezőt a filterhez</p>
    <mat-form-field>
      <input placeholder="title" matInput [(ngModel)]="data.title" />
    </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.title" cdkFocusInitial>Create</button>
    </div>
  `,
  styles: [
  ]
})
export class FilterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
