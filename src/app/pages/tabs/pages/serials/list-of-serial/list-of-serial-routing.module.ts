import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfSerailsPage } from './list-of-serial.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfSerailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfSerailsPageRoutingModule {}
