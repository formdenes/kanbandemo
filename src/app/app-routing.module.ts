import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban',
    loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'jeloltek',
    loadChildren: () => import('./jeloltek/jeloltek.module').then(m => m.JeloltekModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'beosztas',
    loadChildren: () => import('./beosztas/beosztas.module').then(m => m.BeosztasModule),
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
