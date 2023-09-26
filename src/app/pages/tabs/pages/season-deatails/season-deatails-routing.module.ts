import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonDeatailsPage } from './season-deatails.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonDeatailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonDeatailsPageRoutingModule {}
