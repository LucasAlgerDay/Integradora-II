import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RelojPage } from '../reloj/reloj.page'

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },

  {
    path: 'reloj',
    loadChildren: () => import('../reloj/reloj.page').then(m => m.RelojPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
