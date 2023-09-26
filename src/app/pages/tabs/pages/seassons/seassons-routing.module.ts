import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeassonsPage } from './seassons.page';

const routes: Routes = [
  {
    path: '',
    component: SeassonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeassonsPageRoutingModule {}
