import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsSavedPage } from './pets-saved.page';

const routes: Routes = [
  {
    path: '',
    component: PetsSavedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsSavedPageRoutingModule {}
