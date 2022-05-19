import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JeloltekRoutingModule } from './jeloltek-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UploadComponent } from './upload/upload.component';
import { JeloltekComponent } from './jeloltek/jeloltek.component';


@NgModule({
  declarations: [
    UploadComponent,
    JeloltekComponent
  ],
  imports: [
    CommonModule,
    JeloltekRoutingModule,
    SharedModule
  ]
})
export class JeloltekModule { }
