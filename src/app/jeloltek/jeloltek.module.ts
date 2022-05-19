import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JeloltekRoutingModule } from './jeloltek-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UploadComponent } from './upload/upload.component';
import { JeloltekComponent } from './jeloltek/jeloltek.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    UploadComponent,
    JeloltekComponent
  ],
  imports: [
    CommonModule,
    JeloltekRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class JeloltekModule { }
