import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeloltComponent } from './jelolt/jelolt.component';
import { JeloltekComponent } from './jeloltek/jeloltek.component';

const routes: Routes = [
  { path: '', component: JeloltekComponent },
  { path: 'jelolt' , component: JeloltComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeloltekRoutingModule { }
