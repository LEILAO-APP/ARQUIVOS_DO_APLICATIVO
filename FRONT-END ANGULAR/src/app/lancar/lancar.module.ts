import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancarPageRoutingModule } from './lancar-routing.module';

import { LancarPage } from './lancar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancarPageRoutingModule
  ],
  declarations: [LancarPage]
})
export class LancarPageModule {}
