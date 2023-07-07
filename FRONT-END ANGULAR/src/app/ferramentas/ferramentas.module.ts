import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FerramentasPageRoutingModule } from './ferramentas-routing.module';

import { FerramentasPage } from './ferramentas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FerramentasPageRoutingModule
  ],
  declarations: [FerramentasPage]
})
export class FerramentasPageModule {}
