import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeosztasComponent } from './beosztas/beosztas.component';

const routes: Routes = [
  { path: '', component: BeosztasComponent },
  {
    path: 'Beosztas/:stage',
    component: BeosztasComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeosztasRoutingModule { }
