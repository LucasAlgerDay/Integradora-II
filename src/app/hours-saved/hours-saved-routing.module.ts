import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoursSavedPage } from './hours-saved.page';

const routes: Routes = [
  {
    path: '',
    component: HoursSavedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoursSavedPageRoutingModule {}
