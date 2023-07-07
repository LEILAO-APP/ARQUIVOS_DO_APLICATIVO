import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FerramentasPage } from './ferramentas.page';

const routes: Routes = [
  {
    path: '',
    component: FerramentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FerramentasPageRoutingModule {}
