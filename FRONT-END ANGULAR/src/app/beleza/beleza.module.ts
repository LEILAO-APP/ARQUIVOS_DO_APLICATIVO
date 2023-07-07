import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BelezaPageRoutingModule } from './beleza-routing.module';

import { BelezaPage } from './beleza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BelezaPageRoutingModule
  ],
  declarations: [BelezaPage]
})
export class BelezaPageModule {}
