import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodsPage } from './episods.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodsPageRoutingModule {}
