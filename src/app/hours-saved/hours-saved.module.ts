import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoursSavedPageRoutingModule } from './hours-saved-routing.module';

import { HoursSavedPage } from './hours-saved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoursSavedPageRoutingModule
  ],
  declarations: [HoursSavedPage]
})
export class HoursSavedPageModule {}
