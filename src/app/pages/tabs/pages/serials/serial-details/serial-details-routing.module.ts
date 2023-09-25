import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerialDetailsPage } from './serial-details.page';

const routes: Routes = [
  {
    path: '',
    component: SerialDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerialDetailsPageRoutingModule {}
