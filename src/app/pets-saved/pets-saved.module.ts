import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsSavedPageRoutingModule } from './pets-saved-routing.module';

import { PetsSavedPage } from './pets-saved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetsSavedPageRoutingModule
  ],
  declarations: [PetsSavedPage]
})
export class PetsSavedPageModule {}
