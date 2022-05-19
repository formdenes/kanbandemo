import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeloltekComponent } from './jeloltek/jeloltek.component';

const routes: Routes = [
  { path: '', component: JeloltekComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeloltekRoutingModule { }
