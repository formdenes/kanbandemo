import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { BeosztasRoutingModule } from './beosztas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BeosztasComponent } from './beosztas/beosztas.component';
import { JeloltekModule } from '../jeloltek/jeloltek.module';


@NgModule({
  declarations: [
    BeosztasComponent
  ],
  imports: [
    CommonModule,
    BeosztasRoutingModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    JeloltekModule,
    MatExpansionModule
  ]
})
export class BeosztasModule { }
