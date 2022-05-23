import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeosztasRoutingModule } from './beosztas-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BeosztasRoutingModule,
    SharedModule
  ]
})
export class BeosztasModule { }
