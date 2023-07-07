import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BelezaPage } from './beleza.page';

const routes: Routes = [
  {
    path: '',
    component: BelezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BelezaPageRoutingModule {}
