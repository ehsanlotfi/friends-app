import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerialsPage } from './serials.page';

const routes: Routes = [
  {
    path: '',
    component: SerialsPage,
    
  },
  {
    path: 'list-of-Serial',
    loadChildren: () => import('./list-of-serial/list-of-serial.module').then( m => m.ListOfSeralisPageModule)
  },
  {
    path: 'serial-details/:id',
    loadChildren: () => import('./serial-details/serial-details.module').then( m => m.SerialDetailsPageModule)
  },
  {
    path: 'part-details/:serialId/:id',
    loadChildren: () => import('./part-details/part-details.module').then( m => m.PartDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerialsPageRoutingModule {}
