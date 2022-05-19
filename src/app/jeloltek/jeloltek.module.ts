import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JeloltekRoutingModule } from './jeloltek-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UploadComponent } from './upload/upload.component';
import { JeloltekComponent } from './jeloltek/jeloltek.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ColumnPickerComponent } from './column-picker/column-picker.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    UploadComponent,
    JeloltekComponent,
    ColumnPickerComponent
  ],
  imports: [
    CommonModule,
    JeloltekRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule
  ]
})
export class JeloltekModule { }
