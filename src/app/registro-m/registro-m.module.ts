import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMPageRoutingModule } from './registro-m-routing.module';

import { RegistroMPage } from './registro-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMPageRoutingModule
  ],
  declarations: [RegistroMPage]
})
export class RegistroMPageModule {}
